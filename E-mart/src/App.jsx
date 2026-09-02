import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import './App.css'
import { store } from './store/store.js'
import productsData from './data/products.js'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import CartPage from './pages/CartPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import ProductFilters from './components/ProductFilters.jsx'
import Toast from './components/Toast.jsx'
import { addToCart } from './store/cartSlice.js'

function AppContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')
  const [priceRange, setPriceRange] = useState(200)
  const [products, setProducts] = useState(productsData)
  const [loading, setLoading] = useState(true)
  const [toastItems, setToastItems] = useState([])
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('eMartTheme') || 'light'
  })
  const [apiError, setApiError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('eMartTheme', theme)
  }, [theme])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(
          data.map(item => ({
            ...item,
            id: item.id.toString(),
            rating: item.rating || { rate: 4.4, count: 120 },
          })),
        )
        setApiError(null)
      } catch (error) {
        setProducts(productsData)
        setApiError('Unable to load live products. Showing local catalog.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map(product => product.category)))],
    [products],
  )

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch =
        normalizedSearch === '' ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch)

      const matchesPrice = product.price <= priceRange
      return matchesCategory && matchesSearch && matchesPrice
    })

    if (sortOrder === 'low-high') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'high-low') {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [products, searchTerm, selectedCategory, sortOrder, priceRange])

  const showToast = message => {
    const id = Date.now().toString()
    setToastItems(items => [...items, { id, message }])
    window.setTimeout(() => {
      setToastItems(items => items.filter(item => item.id !== id))
    }, 3000)
  }

  const handleAddToCart = (product, quantity = 1) => {
    dispatch(addToCart({ product, quantity }))
    showToast(`Added ${quantity} ${product.title} to cart`)
    navigate('/cart')
  }

  const toggleTheme = () => {
    setTheme(current => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {apiError && (
          <div className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm dark:border-amber-300/30 dark:bg-amber-900/5 dark:text-amber-100">
            {apiError}
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={visibleProducts}
                loading={loading}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onAddToCart={handleAddToCart}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetail products={products} showToast={showToast} />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage onContinueShopping={() => navigate('/')} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Toast items={toastItems} />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  )
}

export default App

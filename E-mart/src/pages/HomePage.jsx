import ProductCard from '../components/ProductCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import ProductFilters from '../components/ProductFilters.jsx'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'

function HomePage({
  products,
  loading,
  searchTerm,
  onSearch,
  categories,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  sortOrder,
  onSortChange,
  priceRange,
  onPriceChange,
}) {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-8 text-white shadow-xl">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] opacity-90">Welcome to E-Mart</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Shop top products in electronics, fashion, home, and sports.</h1>
          <p className="mt-4 max-w-2xl text-sm opacity-95 sm:text-base">
            Use search, categories, live filters, and detailed product pages for a polished shopping experience.
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          <SearchBar value={searchTerm} onChange={onSearch} />
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            sortOrder={sortOrder}
            onSortChange={onSortChange}
            priceRange={priceRange}
            onPriceChange={onPriceChange}
          />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Your quick insights</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{products.length} items available</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Use filters and sorting to find the best products faster.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured products</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Hand-picked recommendations based on your search.</p>
          </div>
        </div>

        {loading ? (
          <LoadingSkeleton count={6} />
        ) : products.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <p className="text-xl font-medium">No products match your filters.</p>
            <p className="mt-2 text-sm">Try adjusting the price cap or switching categories.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default HomePage

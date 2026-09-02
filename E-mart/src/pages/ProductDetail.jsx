import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice.js'
import { toggleWishlist } from '../store/wishlistSlice.js'
import RatingStars from '../components/RatingStars.jsx'
import QuantitySelector from '../components/QuantitySelector.jsx'
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa'

function ProductDetail({ products, showToast }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wishlistItems = useSelector(state => state.wishlist.items)
  const [quantity, setQuantity] = useState(1)

  const product = useMemo(
    () => products.find(item => item.id.toString() === id.toString()),
    [id, products],
  )

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The item you are looking for may have been removed or is unavailable.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Back to shop
        </Link>
      </div>
    )
  }

  const isWishlisted = Boolean(wishlistItems[product.id])

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }))
    showToast(`${quantity} ${product.title} added to cart`)
    navigate('/cart')
  }

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product))
    showToast(
      isWishlisted
        ? `${product.title} removed from wishlist`
        : `${product.title} added to wishlist`,
    )
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <FaArrowLeft /> Back to results
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-4xl bg-slate-100 p-6 dark:bg-slate-800">
            <img
              src={product.image}
              alt={product.title}
              style={{ maxHeight: 520 }}
              className="mx-auto h-full w-full rounded-[1.75rem] object-contain"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {product.category}
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {product.title}
                  </h1>
                </div>
                <button
                  type="button"
                  onClick={handleToggleWishlist}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  {isWishlisted ? <FaHeart className="text-rose-500" /> : <FaRegHeart />}
                  {isWishlisted ? 'Saved' : 'Save'}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <RatingStars value={product.rating?.rate ?? 4.5} />
                <span>{product.rating?.count ?? 0} reviews</span>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {product.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Price</p>
                  <p className="mt-2 text-4xl font-semibold text-slate-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="space-y-3">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-slate-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">Why customers love this</p>
              <ul className="mt-4 space-y-3">
                <li>• Fast shipping with premium packaging</li>
                <li>• Easy returns and secure checkout</li>
                <li>• Real ratings from happy customers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

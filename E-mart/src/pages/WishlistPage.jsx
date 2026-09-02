import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../store/wishlistSlice.js'
import { FaHeartBroken } from 'react-icons/fa'

function WishlistPage() {
  const wishlistItems = useSelector(state => Object.values(state.wishlist.items))
  const dispatch = useDispatch()

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Wishlist</p>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Saved items</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue browsing
          </Link>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-xl font-medium text-slate-900 dark:text-white">Your wishlist is empty.</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Save products to review them later.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map(item => (
            <div key={item.id} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <img src={item.image} alt={item.title} className="mb-4 h-56 w-full rounded-3xl object-cover" />
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                  <button
                    type="button"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-200"
                  >
                    <FaHeartBroken /> Remove
                  </button>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.category}</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WishlistPage

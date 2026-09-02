import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartArrowDown, FaMoon, FaSun, FaHeart } from 'react-icons/fa'

function Header({ onToggleTheme }) {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const wishlistCount = useSelector(state => Object.keys(state.wishlist.items).length)

  return (
    <header className="sticky top-0 z-30 rounded-b-[2rem] border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white">
            <FaCartArrowDown className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">E-Mart</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Smart shopping made simple</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link to="/" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
            Home
          </Link>
          <Link to="/wishlist" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
            Wishlist
          </Link>
          <Link to="/cart" className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white">
            Cart
          </Link>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            <FaMoon className="h-5 w-5" />
          </button>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <span>View cart</span>
            <span className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-100">
              {totalQuantity}
            </span>
          </Link>
          <Link
            to="/wishlist"
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            <FaHeart className="text-rose-500" />
            <span>{wishlistCount}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

import { Link } from 'react-router-dom'
import RatingStars from './RatingStars.jsx'

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950">
      <Link to={`/product/${product.id}`} className="block overflow-hidden transition duration-500 group-hover:scale-[1.01]">
        <img src={product.image} alt={product.title} className="h-64 w-full object-cover" />
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {product.category}
          </p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">${product.price.toFixed(2)}</p>
        </div>
        <div>
          <Link to={`/product/${product.id}`} className="text-xl font-semibold text-slate-900 transition hover:text-slate-700 dark:text-white dark:hover:text-slate-300">
            {product.title}
          </Link>
          <div className="mt-3 flex items-center justify-between gap-2 text-sm text-slate-500 dark:text-slate-400">
            <RatingStars value={product.rating?.rate ?? 4.4} />
            <span>{product.rating?.count ?? 0} reviews</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p>
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard

import { useMemo } from 'react'

function ProductFilters({ categories, selectedCategory, onSelectCategory, sortOrder, onSortChange, priceRange, onPriceChange }) {
  const priceLabel = useMemo(
    () => (priceRange <= 25 ? 'Budget' : priceRange <= 75 ? 'Value' : 'Premium'),
    [priceRange],
  )

  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
      <div className="grid gap-4 sm:grid-cols-[1.2fr_auto]">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
          <select
            value={selectedCategory}
            onChange={event => onSelectCategory(event.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Sort</label>
          <select
            value={sortOrder}
            onChange={event => onSortChange(event.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="default">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-4 rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>Price cap</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">${priceRange}</span>
        </div>
        <input
          type="range"
          min="10"
          max="200"
          step="5"
          value={priceRange}
          onChange={event => onPriceChange(Number(event.target.value))}
          className="mt-3 w-full accent-sky-500"
        />
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Recommended: {priceLabel}</p>
      </div>
    </div>
  )
}

export default ProductFilters

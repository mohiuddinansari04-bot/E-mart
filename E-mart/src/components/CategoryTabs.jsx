function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="mb-4 flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-500">
        Choose a category to narrow results or use search for any item.
      </p>
    </div>
  )
}

export default CategoryTabs

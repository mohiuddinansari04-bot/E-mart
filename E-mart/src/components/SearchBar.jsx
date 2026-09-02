function SearchBar({ value, onChange }) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <label className="mb-3 block text-sm font-medium text-slate-700">Search products</label>
      <input
        type="search"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Search by title, category or keyword"
        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
      />
    </div>
  )
}

export default SearchBar

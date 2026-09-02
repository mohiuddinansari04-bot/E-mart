function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        -
      </button>
      <span className="min-w-[2rem] text-center">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector

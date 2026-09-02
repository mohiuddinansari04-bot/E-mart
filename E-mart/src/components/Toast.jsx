function Toast({ items }) {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex flex-col gap-3 sm:right-6 sm:top-6">
      {items.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-4 text-sm shadow-xl backdrop-blur-xl transition duration-300 ease-out dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100"
        >
          <p className="font-medium text-slate-900 dark:text-slate-100">{toast.message}</p>
        </div>
      ))}
    </div>
  )
}

export default Toast

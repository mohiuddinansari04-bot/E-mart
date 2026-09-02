function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="mb-4 h-56 w-full rounded-3xl bg-slate-200 dark:bg-slate-700" />
          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-5/6 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="mt-4 h-12 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton

import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
      <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Return home
      </Link>
    </div>
  )
}

export default NotFoundPage

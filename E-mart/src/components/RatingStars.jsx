import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function RatingStars({ value }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const ratingPosition = index + 1
    if (value >= ratingPosition) return <FaStar key={index} className="text-amber-400" />
    if (value >= ratingPosition - 0.5) return <FaStarHalfAlt key={index} className="text-amber-400" />
    return <FaRegStar key={index} className="text-slate-400" />
  })

  return <div className="flex items-center gap-1 text-sm">{stars}</div>
}

export default RatingStars

import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../store/cartSlice.js'

function CartPage({ onContinueShopping }) {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const itemList = Object.values(cart.items)

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Your Cart</p>
            <h1 className="text-3xl font-semibold">Review items before checkout</h1>
          </div>
          <button
            type="button"
            onClick={onContinueShopping}
            className="inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Continue shopping
          </button>
        </div>
      </div>

      {itemList.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 shadow-sm">
          <p className="text-xl font-medium">Your cart is empty.</p>
          <p className="mt-2 text-sm text-slate-500">Add products from the shop to see them here.</p>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            {itemList.map(item => (
              <div key={item.id} className="grid gap-4 rounded-3xl border border-slate-200 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="h-24 w-24 rounded-3xl object-cover" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-sm text-slate-500">{item.category}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                      Qty: {item.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="rounded-full bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 text-right sm:items-end">
                  <span className="text-sm text-slate-500">Each</span>
                  <span className="text-xl font-semibold text-slate-900">${item.price.toFixed(2)}</span>
                  <span className="text-sm text-slate-500">Total: ${item.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Order summary</p>
                <h2 className="mt-3 text-3xl font-semibold">${cart.totalAmount.toFixed(2)}</h2>
              </div>
              <div className="rounded-3xl bg-slate-800 p-4">
                <p className="text-sm text-slate-300">Items in cart</p>
                <p className="mt-2 text-2xl font-semibold">{cart.totalQuantity}</p>
              </div>
              <button
                type="button"
                onClick={() => dispatch(clearCart())}
                className="w-full rounded-3xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Clear cart
              </button>
              <button
                type="button"
                className="w-full rounded-3xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-cyan-400"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CartPage

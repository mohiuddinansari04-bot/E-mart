import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
  totalQuantity: 0,
  totalAmount: 0,
}

const recalculateTotals = items => {
  const totalQuantity = Object.values(items).reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = Object.values(items).reduce((sum, item) => sum + item.totalPrice, 0)
  return { totalQuantity, totalAmount: +totalAmount.toFixed(2) }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity = 1 } = action.payload
      const existingItem = state.items[product.id]

      if (existingItem) {
        existingItem.quantity += quantity
        existingItem.totalPrice = +(existingItem.quantity * existingItem.price).toFixed(2)
      } else {
        state.items[product.id] = {
          ...product,
          quantity,
          totalPrice: +(product.price * quantity).toFixed(2),
        }
      }

      const totals = recalculateTotals(state.items)
      state.totalQuantity = totals.totalQuantity
      state.totalAmount = totals.totalAmount
    },
    increaseQuantity(state, action) {
      const item = state.items[action.payload]
      if (!item) return
      item.quantity += 1
      item.totalPrice = +(item.quantity * item.price).toFixed(2)
      const totals = recalculateTotals(state.items)
      state.totalQuantity = totals.totalQuantity
      state.totalAmount = totals.totalAmount
    },
    decreaseQuantity(state, action) {
      const item = state.items[action.payload]
      if (!item) return

      item.quantity -= 1
      if (item.quantity <= 0) {
        delete state.items[action.payload]
      } else {
        item.totalPrice = +(item.quantity * item.price).toFixed(2)
      }

      const totals = recalculateTotals(state.items)
      state.totalQuantity = totals.totalQuantity
      state.totalAmount = totals.totalAmount
    },
    removeFromCart(state, action) {
      const item = state.items[action.payload]
      if (!item) return
      delete state.items[action.payload]
      const totals = recalculateTotals(state.items)
      state.totalQuantity = totals.totalQuantity
      state.totalAmount = totals.totalAmount
    },
    clearCart(state) {
      state.items = {}
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

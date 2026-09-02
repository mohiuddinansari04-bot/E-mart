import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      const product = action.payload
      if (state.items[product.id]) {
        delete state.items[product.id]
      } else {
        state.items[product.id] = product
      }
    },
    removeFromWishlist(state, action) {
      delete state.items[action.payload]
    },
    clearWishlist(state) {
      state.items = {}
    },
  },
})

export const { toggleWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer

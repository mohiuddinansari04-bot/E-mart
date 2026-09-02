import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice.js'
import wishlistReducer from './wishlistSlice.js'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('eMartState')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

const saveState = state => {
  try {
    localStorage.setItem('eMartState', JSON.stringify(state))
  } catch (error) {
    // Ignore write errors
  }
}

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    wishlist: store.getState().wishlist,
  })
})

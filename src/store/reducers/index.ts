import { combineReducers } from 'redux'
import bagReducer from './bagReducer'
import priceReducer from './priceReducer'
import sizeReducer from './sizeReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  size: sizeReducer,
  bag: bagReducer,
  price: priceReducer,
})

export type RootState = ReturnType<typeof rootReducer>

import { PriceAction, PriceActionType, PriceState } from '../../types/price'

const initialState: PriceState = {
  price: 0,
}

const priceReducer = (state = initialState, action: PriceAction): PriceState => {
  switch (action.type) {
    case PriceActionType.FETCH_PRICE:
      return { price: action.payload }
    default:
      return state
  }
}

export default priceReducer

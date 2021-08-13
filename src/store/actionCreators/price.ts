import { Dispatch } from 'react'
import IBagItem from '../../components/Bag/BagItem/types'
import useTypedSelector from '../../hooks/useTypedSelector'
import { PriceAction, PriceActionType } from '../../types/price'

const fetchPrice = (priceData: number) => {
  return (dispatch: Dispatch<PriceAction>) => {
    dispatch({ type: PriceActionType.FETCH_PRICE, payload: priceData })
  }
}

export default fetchPrice

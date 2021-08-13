import { Dispatch } from 'react'
import IBagItem from '../../components/Bag/BagItem/types'
import bagData from '../../data/bagData'
import { BagAction, BagActionType } from '../../types/bag'

export const fetchBagData = () => {
  return (dispatch: Dispatch<BagAction>) => {
    try {
      dispatch({ type: BagActionType.FETCH_BAG })
      const response = bagData
      dispatch({ type: BagActionType.FETCH_BAG_SUCCESS, payload: response.data })
    } catch (error) {
      dispatch({
        type: BagActionType.FETCH_BAG_ERROR,
        payload: 'Ошибка при загрузке данных корзины',
      })
    }
  }
}

export const removeBagData = (response: IBagItem[] | []) => {
  return (dispatch: Dispatch<BagAction>) => {
    dispatch({ type: BagActionType.REMOVE_BAG, payload: response })
  }
}

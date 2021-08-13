import { BagAction, BagActionType, BagState } from '../../types/bag'

const initialState: BagState = {
  bagData: [],
  loading: false,
  error: null,
}

const bagReducer = (state = initialState, action: BagAction): BagState => {
  switch (action.type) {
    case BagActionType.FETCH_BAG:
      return { bagData: [], loading: true, error: null }
    case BagActionType.FETCH_BAG_SUCCESS:
      return { bagData: action.payload, loading: false, error: null }
    case BagActionType.FETCH_BAG_ERROR:
      return { bagData: [], loading: false, error: action.payload }
    case BagActionType.REMOVE_BAG:
      return { bagData: action.payload, loading: false, error: null }
    default:
      return state
  }
}

export default bagReducer

import IBagItem from '../components/Bag/BagItem/types'

export enum BagActionType {
  FETCH_BAG = 'FETCH_BAG',
  FETCH_BAG_SUCCESS = 'FETCH_BAG_SUCCESS',
  FETCH_BAG_ERROR = 'FETCH_BAG_ERROR',
  REMOVE_BAG = 'REMOVE_BAG',
}

export interface BagState {
  bagData: IBagItem[]
  loading: boolean
  error: null | string
}

interface BagActionFetch {
  type: BagActionType.FETCH_BAG
}

interface BagActionFetchSuccess {
  type: BagActionType.FETCH_BAG_SUCCESS
  payload: IBagItem[]
}

interface BagActionFetchError {
  type: BagActionType.FETCH_BAG_ERROR
  payload: string
}

interface RemoveBag {
  type: BagActionType.REMOVE_BAG
  payload: IBagItem[]
}

export type BagAction = BagActionFetch | BagActionFetchSuccess | BagActionFetchError | RemoveBag

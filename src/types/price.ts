export enum PriceActionType {
  FETCH_PRICE = 'FETCH_PRICE',
}

export interface PriceState {
  price: number
}

interface PriceActionFetch {
  type: PriceActionType.FETCH_PRICE
  payload: number
}

export type PriceAction = PriceActionFetch

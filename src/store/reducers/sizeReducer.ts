import { SizeState } from '../../types/size'

const initialState = {
  size: [
    { id: 0, value: 'S' },
    { id: 1, value: 'M' },
    { id: 2, value: 'L' },
    { id: 3, value: 'XL' },
  ],
}

const sizeReducer = (state = initialState): SizeState => {
  return state
}

export default sizeReducer

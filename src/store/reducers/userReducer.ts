import { UserAction, UserActionType, UserState } from '../../types/user'

const initialState = {
  isAuth: true,
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return { isAuth: true }
    case UserActionType.LOGOUT:
      return { isAuth: false }

    default:
      return state
  }
}

export default userReducer

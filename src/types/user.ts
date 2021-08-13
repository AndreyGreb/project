export enum UserActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface UserState {
  isAuth: boolean
}

interface UserActionLogin {
  type: UserActionType.LOGIN
  payload?: unknown
}

interface UserActionLogout {
  type: UserActionType.LOGOUT
  payload?: unknown
}

export type UserAction = UserActionLogin | UserActionLogout

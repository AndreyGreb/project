import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import useTypedSelector from '../hooks/useTypedSelector'
import { NOT_FOUND_ROUTE } from '../utils/consts'
import { authRoutes, publicRoutes } from './routes'

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user)
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={NOT_FOUND_ROUTE} />
    </Switch>
  )
}

export default AppRouter

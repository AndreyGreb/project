import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter'

import style from './App.module.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={style.containerPage}>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App

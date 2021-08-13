import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  CATALOG_ROUTE,
  JACKETS_ROUTE,
  JEANS_ROUTE,
  SHIRTS_ROUTE,
  SKIRTS_ROUTE,
} from '../../../utils/consts'

import style from './NavBarCatalog.module.scss'

const NavBarCatalog: FC = () => {
  return (
    <section className={style.navBar}>
      <span className={style.navBar__title}>CATEGORIES</span>
      <ul>
        <Link to={SHIRTS_ROUTE}>SHIRTS</Link>
        <Link to={JACKETS_ROUTE}>JACKETS</Link>
        <Link to={JEANS_ROUTE}>JEANS</Link>
        <Link to={SKIRTS_ROUTE}>SKIRTS</Link>
        <Link to={CATALOG_ROUTE}>SHOP ALL</Link>
      </ul>
    </section>
  )
}

export default NavBarCatalog

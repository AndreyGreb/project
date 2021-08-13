import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../utils/consts'
import NavBarCatalog from './NavBarCatalog'

import style from './Catalog.module.scss'

const Catalog: FC = () => {
  return (
    <section className={style.catalog}>
      <NavBarCatalog />
      <section className={style.product}>
        <Link to={`${PRODUCT_ROUTE}/:1`} className={style.product__item}>
          <img src="https://a.lmcdn.ru/img600x866/M/P/MP002XW04COU_12903251_1_v1_2x.jpg" alt="" />
        </Link>
        <Link to={`${PRODUCT_ROUTE}/:2`} className={style.product__item}>
          <img src="https://a.lmcdn.ru/img600x866/R/T/RTLAAF636602_14060794_1_v1_2x.jpg" alt="" />
        </Link>
        <Link to={`${PRODUCT_ROUTE}/:3`} className={style.product__item}>
          <img src="https://a.lmcdn.ru/img600x866/R/T/RTLAAA484801_13363991_1_v1_2x.jpg" alt="" />
        </Link>
        <Link to={`${PRODUCT_ROUTE}/:4`} className={style.product__item}>
          <img src="https://a.lmcdn.ru/img600x866/R/T/RTLAAB604302_13467114_1_v1_2x.jpg" alt="" />
        </Link>
      </section>
    </section>
  )
}

export default Catalog

import AuthPage from '../pages/AuthPage'
import BasketPage from '../pages/BasketPage'
import CatalogPage from '../pages/CatalogPage'
import LikePage from '../pages/LikePage'
import MainPage from '../pages/MainPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductPage from '../pages/ProductPage'
import RegistrationPage from '../pages/RegistrationPage'
import {
  MAIN_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  NOT_FOUND_ROUTE,
  CATALOG_ROUTE,
  LIKE_ROUTE,
  NEW_ARRIVALS_ROUTE,
  TRENDS_ROUTE,
  AUTH_ROUTE,
  REGISTRATION_ROUTE,
  SHIRTS_ROUTE,
  JACKETS_ROUTE,
  JEANS_ROUTE,
  SKIRTS_ROUTE,
} from '../utils/consts'

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    Component: BasketPage,
  },
  {
    path: LIKE_ROUTE,
    Component: LikePage,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: CATALOG_ROUTE,
    Component: CatalogPage,
  },
  {
    path: NEW_ARRIVALS_ROUTE,
    Component: CatalogPage,
  },
  {
    path: TRENDS_ROUTE,
    Component: CatalogPage,
  },
  {
    path: SHIRTS_ROUTE,
    Component: CatalogPage,
  },
  {
    path: JACKETS_ROUTE,
    Component: CatalogPage,
  },
  {
    path: JEANS_ROUTE,
    Component: CatalogPage,
  },
  {
    path: SKIRTS_ROUTE,
    Component: CatalogPage,
  },
  {
    path: `${PRODUCT_ROUTE}/:id`,
    Component: ProductPage,
  },
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrationPage,
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFoundPage,
  },
]

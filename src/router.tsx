import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import { lazy, Suspense } from 'react'

const FavoritesPage = lazy( () => import('./views/FavoritesPage') ) 
const IndexPage = lazy( () => import('./views/IndexPage') ) 

export default function AppRouter() {

  const routes = [
  {
    path: "/",
      element: <Suspense> <IndexPage /> </Suspense>
  },
  {
    path: "/favoritos",
    element: <Suspense> <FavoritesPage /> </Suspense>
  }
  ];
  
  return (
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

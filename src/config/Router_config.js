import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import  {Products}  from '../pages/Product'
import  {Product_Details}  from '../pages/Productdetial'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Products />} />
      <Route path=':id' element={<Product_Details />} />


    </Route>

  )
)

export const New_Router_App = () => {
  return (
    <RouterProvider router={router} />
  )
}
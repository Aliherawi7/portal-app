import React, { Suspense, useState } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import browserRouter from "./route/routerProvider"
import "./App.css"


const App = () => {
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  )
}

export default App

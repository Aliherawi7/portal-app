import React, { Suspense, useContext, useState } from "react"
import { AuthContext } from "./context/authContext"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import "./App.css"

import Loading from "./components/UI/Loading/Loading"
import Wrapper from "./components/HOC/Wrapper"
import Header from "./components/Header/Header"
import BackToTop from "./components/UI/BackToTop/BackToTop"
import { DarkModeContext } from "./context/darkMode"

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const ComputerScience = React.lazy(() =>
  import("./pages/ComputerScience/ComputerScience")
)
const Low = React.lazy(() => import("./pages/Low/Low"))
const Dentistry = React.lazy(() => import("./pages/Dentistry/Dentistry"))
const Posts = React.lazy(() => import("./pages/Posts/Posts"))
const Students = React.lazy(() => import("./pages/Students/Students"))
const AddStudent = React.lazy(() => import("./pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("./pages/Profile/Profile"))
const Login = React.lazy(() => import("./pages/Login/Login"))
const NewPost = React.lazy(() => import("./pages/NewPost/NewPost"))
const DeleteStudent = React.lazy(() =>
  import("./pages/DeleteStudent/DeleteStudent")
)
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"))
const PostManagement = React.lazy(() =>
  import("./pages/PostManagement/PostManagement")
)

const App = (props) => {
  const authContext = useContext(AuthContext)
  const [activeNav, setActiveNav] = useState(false)
  // handle tab header
  const navActiveHandler = () => setActiveNav(!activeNav)
  // using dark mode
  const { darkMode } = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <Suspense fallback={<Loading />}>
        <div className={`app ${darkMode ? "theme-dark" : "theme-light"}`}>
          <main className={`main ${activeNav && "main_active_nav"}`}>
            <div className="app_header">
              <Header />
            </div>
            <Navbar activeNav={activeNav} navActiveHandler={navActiveHandler} />
            <Wrapper>
              <Outlet />
            </Wrapper>
            <BackToTop />
          </main>
        </div>
      </Suspense>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cs",
          element: <ComputerScience />,
        },
        {
          path: "/low",
          element: <Low />,
        },
        {
          path: "/dentistry",
          element: <Dentistry />,
        },
        {
          path: "/admin/addstudent",
          element: <AddStudent />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/admin/newpost",
          element: <NewPost />,
        },
        {
          path: "/admin/deletestudent",
          element: <DeleteStudent />,
        },
        {
          path: "/admin/postmanagement",
          element: <PostManagement />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

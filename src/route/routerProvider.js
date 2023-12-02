import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
const Home = React.lazy(() => import("../pages/Home/Home"))
const Posts = React.lazy(() => import("../pages/Posts/Posts"))
const Students = React.lazy(() => import("../pages/Students/Students"))
const AddStudent = React.lazy(() => import("../pages/AddStudent/AddStudent"))
const Profile = React.lazy(() => import("../pages/Profile/Profile"))
const Login = React.lazy(() => import("../pages/Login/Login"))
const NewPost = React.lazy(() => import("../pages/NewPost/NewPost"))
const About = React.lazy(() => import("../pages/About/About"))
const UpdatePost = React.lazy(() => import("../components/UpdatePost/UpdatePost"))
const UpdateStudentPage = React.lazy(() =>
    import("../pages/UpdateStudentPage/UpdateStudentPage")
)
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"))
const PostManagement = React.lazy(() =>
    import("../pages/PostManagement/PostManagement")
)
const ResetPassword = React.lazy(() => import("../pages/Login/ResetPassword"))
const Teachers = React.lazy(() => import("../pages/Teachers/Teachers"))
const Timetable = React.lazy(() => import("../pages/Timetable/Timetable"))
const AttendanceSheet = React.lazy(() =>
    import("../pages/AttendanceSheet/AttendanceSheet")
)
const TeacherProfile = React.lazy(() => import("../pages/TeacherProfile/TeacherProfile"))

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/admin/add-student",
                element: <AddStudent />,
            },
            {
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/admin/post-management/edit/:id",
                element: <UpdatePost />,
            },
            {
                path: "/admin/students",
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
                path: "/admin/update-student/:id",
                element: <UpdateStudentPage />,
            },
            {
                path: "/admin/post-management",
                element: <PostManagement />,
            },
            {
                path: "/admin/teachers",
                element: <Teachers />,
            },
            {
                path: "/profile-teacher/:id",
                element: <TeacherProfile />,
            },
            {
                path: "/admin/timetable",
                element: <Timetable />,
            },
            {
                path: "/admin/attendance-sheet",
                element: <AttendanceSheet />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/reset-password/:id",
                element: <ResetPassword />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
])

export default browserRouter;


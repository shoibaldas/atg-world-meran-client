import Home from "../../pages/Home/Home";
import SignIn from "../../pages/Shared/SignIn/SignIn";
import SignUp from "../../pages/Shared/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <SignIn></SignIn>
            },
            {
                path: '/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/comments/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;
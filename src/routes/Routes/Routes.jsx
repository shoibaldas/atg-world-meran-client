import Home from "../../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;
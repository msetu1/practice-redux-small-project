import Main from "@/MainLayout/Main";
import Tasks from "@/pages/tasks";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes =createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    children:[
        {
            index:true,
            element:<Tasks/>
        },
        {
            path:'users',
            element:<Users/>
        },
    ]
}
])
export default routes
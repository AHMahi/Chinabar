import { createBrowserRouter } from "react-router-dom";
import Delivery from "../Components/Delivery";
import Home from "../Components/Home";
import Items from "../Components/Items";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([//router acts like https link of typical website to make website a single page website
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/delivery',
                element: <Delivery></Delivery>
            },

            {
                path: '/items',
                element: <Items></Items>
            }
        ]
    }
]);
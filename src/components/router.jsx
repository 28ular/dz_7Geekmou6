import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "./MainPage/MainPage.jsx";
import {Layout} from "./Layout.jsx";
import {Filmsist} from "./Filmsist.jsx";
import {Details} from "./Detail.jsx";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/> ,
        children:[
            {index:true ,  element: <MainPage/>},
            {path:'films' ,  element: <Filmsist/>},
            {path:'films/:id', element: <Details/>},
            {path: '*' , element: <h1>Not Found 404</h1> }
            // {path:'catalog' ,  element: <Caralog/>},
        ]
    }
]);
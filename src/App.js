import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Main from './Components/Main';
import About from './Components/About';
import Error from './Components/Error';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Body from './Components/Body';
import Restaurant from './Components/Restaurant';

const root = ReactDOM.createRoot(document.getElementById("root"))

const appRoter = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Body />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/cart',
                element: <Cart />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/restaurant/:id',
                element: <Restaurant />
            }
        ],
        errorElement: <Error />
    },  
    {
        basename: '/swiggy'  // replace 'your-repo-name' with your actual GitHub repository name
    }
]
)

root.render(<RouterProvider router={appRoter}/>)
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/HomePage/Home/Home';
import ErrorPages from '../SharedPages/ErrorPages/ErrorPages';
import Contact from '../Pages/HomePage/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    },
    {
        path: "*",
        element: <ErrorPages></ErrorPages>
    }

])
export default router;
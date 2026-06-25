import React from 'react'
import Home from "../pages/Home/Home";
import { Navigate,Route,Routes } from 'react-router-dom';


function AllRoutes() {

    return (
       <Routes>
            <Route path="/" element={<Home/>}></Route>
       </Routes>
    )
}

export default AllRoutes
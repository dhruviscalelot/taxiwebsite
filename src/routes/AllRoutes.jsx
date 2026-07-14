import React from 'react'
import Home from "../pages/Home/Home";
import { Navigate,Route,Routes } from 'react-router-dom';
import SelectCar from '../pages/SelectCar';


function AllRoutes() {

    return (
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/select-car" element={<SelectCar/>}></Route>
       </Routes>
    )
}

export default AllRoutes
import React from 'react'
import Home from "../pages/Home/Home";
import { Route,Routes } from 'react-router-dom';
import SelectCar from '../pages/SelectCar';
import Booking from '../pages/Booking';


function AllRoutes() {

    return (
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/select-car" element={<SelectCar/>}></Route>
            <Route path="/booking" element={<Booking/>}></Route>
       </Routes>
    )
}

export default AllRoutes

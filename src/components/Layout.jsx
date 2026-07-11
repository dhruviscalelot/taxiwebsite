import React from 'react'
import { Link } from 'react-router-dom'
import AllRoutes from '../routes/AllRoutes'
import { assets } from '../assets/images/images'
import { Phone } from "lucide-react";
import Footer from "../components/Footer"  

const Layout = () => {

    return (
        <>
            <AllRoutes />
            <a
                className="fixed left-4 bottom-4 z-50 w-[50px] h-[50px] rounded-full bg-[#008A00] text-white flex items-center justify-center shadow-lg"
            >
                <Phone size={24} />
            </a>

            {/* Right Side WhatsApp */}
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-4 bottom-4 z-50 w-[50px] h-[50px] rounded-full flex items-center justify-center"
            >
                <img
                    src={assets?.whatsappIcon}
                    alt="WhatsApp"
                    className="max-w-11 lg:max-w-14 object-contain"
                />
            </a>
            <Footer/>
        </>
    )
}

export default Layout
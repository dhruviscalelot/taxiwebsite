import React from 'react'
import { ArrowRight } from "lucide-react";


const Footer = () => {

    const quickLinks = ["Home", "About Us", "Blogs", "Contact RK Cabs"];
    const services = ["Surat to Ahmedabad Cabs", "Surat To Mumbai Cabs", "Surat to Pune Cabs"];

    return (
        <footer className="w-full text-gray-300 bg-dark">
            <div className="w-full px-6 py-14 md:px-12 lg:px-20">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-wrap">
                        {/* Column 1: About */}
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 lg:mb-0 pr-0 md:pr-6">
                            <h1 className='font-bold mb-4'>ABOUT COMPANY</h1>
                            <p className="text-sm leading-relaxed text-gray-400">
                                RK Cabs offers affordable, reliable 24/7 taxi services in Surat,
                                including local and outstation trips, airport transfers, and
                                business travel with professional drivers and easy booking.
                            </p>
                            <div className="mt-6 flex flex-wrap">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="mr-3 mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 text-gray-300 transition-colors hover:bg-primary hover:text-dark"
                                // style={{ ["--accent" as never]: ACCENT }}
                                >
                                    <span className='text-[16px] font-bold'>f</span>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="mr-3 mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 text-gray-300 transition-colors hover:bg-primary hover:text-dark"
                                >
                                    <svg
                                        className="w-[18px] h-[18px]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Link */}
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0 pl-0 md:pl-6 lg:pl-10">
                            <h1 className='font-bold mb-4'>Quick link</h1>
                            <ul className="flex flex-col">
                                {quickLinks.map((label) => (
                                    <li key={label} className="mb-3">
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-sm text-gray-300 transition-colors hover:text-primary"
                                        >
                                            <ArrowRight
                                                className="mr-2 h-4 w-4 text-primary "

                                            />
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Taxi Services */}
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0 pl-0 lg:pl-10">
                            <h1 className='font-bold mb-4'>Taxi Services</h1>
                            <ul className="flex flex-col">
                                {services.map((label) => (
                                    <li key={label} className="mb-3">
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-sm text-gray-300 transition-colors hover:text-primary"
                                        >
                                            <ArrowRight
                                                className="mr-2 h-4 w-4 text-primary"

                                            />
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact Details */}
                        <div className="w-full md:w-1/2 lg:w-1/4 pl-0 md:pl-6 lg:pl-10">
                            <h1 className='font-bold mb-4'>Contact Details</h1>

                            <div className="mb-5">
                                <p className="mb-2 text-xs font-semibold tracking-widest text-white">
                                    PHONE NUMBER
                                </p>
                                <a
                                    href="tel:+917487879679"
                                    className="flex flex-wrap items-center text-sm text-gray-300 hover:text-white"
                                >
                                    <span
                                        className="mr-3 inline-flex h-7 w-7 items-center justify-center  bg-primary"

                                    >
                                        <svg
                                            className="w-[14px] h-[14px] text-dark"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.64a16 16 0 0 0 6.27 6.27l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </span>
                                    (+91) 7487879679
                                </a>
                            </div>

                            <div className="mb-5">
                                <p className="mb-2 text-xs font-semibold tracking-widest text-white">
                                    EMAIL ADDRESS
                                </p>
                                <a
                                    href="mailto:rktt2710@gmail.com"
                                    className="flex flex-wrap items-center text-sm text-gray-300 hover:text-white"
                                >
                                    <span
                                        className="mr-3 inline-flex h-7 w-7 items-center justify-center  bg-primary"

                                    >
                                        <svg
                                            className="w-[14px] h-[14px] text-dark"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="3" y="5" width="18" height="14" rx="2" />
                                            <path d="M3 7l9 6 9-6" />
                                        </svg>
                                    </span>
                                    rktt2710@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="mb-2 text-xs font-semibold tracking-widest text-white">
                                    OFFICE LOCATION
                                </p>
                                <div className="flex flex-wrap items-start text-sm text-gray-300">
                                    <span
                                        className="mr-3 mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center bg-primary"

                                    >
                                        <svg
                                            className="w-[14px] h-[14px] text-dark"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </span>
                                    <span className="leading-relaxed" style={{ maxWidth: "12rem" }}>
                                        Soham Residency, A5 302, Near by Soham Circle, New City Light,
                                        Althan, Surat, Gujarat 395017
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div
                className="w-full px-6 py-9 md:px-12 lg:px-20"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
                <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between">
                    <p className="mb-2 mr-4 text-semibold md:mb-0">
                        © 2026 Rkcabs.in All Rights Reserved.
                    </p>
                    <ul className="flex flex-wrap">
                        <li className="mr-6 mb-1 md:mb-0">
                            <a href="#" className=" text-semibold hover:text-white">
                                Terms and Conditions
                            </a>
                        </li>
                        <li className="mr-6 mb-1 md:mb-0">
                            <a href="#" className="text-semibold hover:text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="mb-1 md:mb-0">
                            <a href="#" className="text-semibold hover:text-white">
                                Disclaimer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
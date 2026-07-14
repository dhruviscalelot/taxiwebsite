import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
    CalendarClock,
    CarFront,
    CheckCircle2,
    IndianRupee,
    Mail,
    MapPin,
    Phone,
    Route,
    UserRound,
} from "lucide-react";
import { assets } from "../assets/images/images";
import { carOptions } from "../data/carOptions";
import { bookingFormInitialValues, bookingTabs } from "../data/bookingData";

const Booking = () => {
    const { state } = useLocation();
    const [activeTab, setActiveTab] = useState(bookingTabs[0].id);

    const fallbackTrip = {
        origin_name: "New Delhi",
        destinations: [{ dest_name: "Mathura" }],
        trip_type: "one_way",
        pickup_date: "14-07-2026",
        pickup_time: "7:00 AM",
        mobile: "",
    };

    const trip = state?.trip || fallbackTrip;
    const selectedCar = state?.car || carOptions[0];
    const destination = trip?.destinations?.[0]?.dest_name || "";
    const routeLabel = `${trip?.origin_name || ""} - ${destination}`;
    const pickupDateTime = [trip?.pickup_date, trip?.pickup_time].filter(Boolean).join(" ");
    const activeTabData = bookingTabs.find((tab) => tab.id === activeTab) || bookingTabs[0];

    const detailItems = [
        {
            label: "Route Information",
            value: routeLabel,
            icon: <Route size={18} />,
        },
        {
            label: "Pickup Date & Time",
            value: pickupDateTime || "-",
            icon: <CalendarClock size={18} />,
        },
        {
            label: "Selected Car Type",
            value: selectedCar?.name || "-",
            icon: <CarFront size={18} />,
        },
        {
            label: "Included KMs",
            value: selectedCar?.distance || "-",
            icon: <MapPin size={18} />,
        },
        {
            label: "Total Fare",
            value: selectedCar?.price || "-",
            icon: <IndianRupee size={18} />,
        },
    ];

    const initialValues = {
        ...bookingFormInitialValues,
        mobile: trip?.mobile || "",
        pickup_address: trip?.origin_name || "",
        drop_address: destination,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Enter a valid email").required("Email is required"),
        mobile: Yup.string().required("Mobile number is required"),
        pickup_address: Yup.string().required("Pickup address is required"),
        drop_address: Yup.string().required("Drop address is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log("Booking traveller info:", {
            ...values,
            trip,
            car: selectedCar,
        });
        resetForm({ values });
    };

    const inputClass =
        "mt-1.5 h-12 w-full rounded-2xl border border-line bg-light px-4 text-14 font-semibold text-dark outline-none transition-all duration-300 placeholder:text-g6 focus:border-primary focus:bg-white";

    return (
        <div className="min-h-screen bg-light">
            <header className="bg-white py-3.5">
                <div className="wrapper flex items-center justify-between">
                    <div className="flex items-center rounded-full bg-[#FEF2E0] px-3.5 py-2.5 text-14 font-semibold text-dark">
                        <Phone size={18} className="mr-2" />
                        <span className="whitespace-nowrap">+91 8976786567</span>
                    </div>

                    <Link to="/">
                        <img className="w-20" src={assets?.taxilogo} alt="Taxi logo" />
                    </Link>
                </div>
            </header>

            <section className="border-y border-line bg-white/60">
                <div className="wrapper py-4">
                    <div className="flex flex-wrap items-center -mx-1 text-12 font-semibold text-g6">
                        <div className="px-1">
                            <Link to="/" className="transition-colors duration-200 hover:text-primary">
                                Home
                            </Link>
                        </div>
                        <div className="px-1">
                            <span>&gt;</span>
                        </div>
                        <div className="px-1">
                            <Link to="/select-car" className="transition-colors duration-200 hover:text-primary">
                                Select Car
                            </Link>
                        </div>
                        <div className="px-1">
                            <span>&gt;</span>
                        </div>
                        <div className="px-1">
                            <span className="text-dark">Booking</span>
                        </div>
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-12 font-bold uppercase tracking-wide text-g6">
                                Confirm Booking
                            </p>
                            <h1 className="text-24 font-extrabold text-dark sm:text-30">
                                {routeLabel}
                            </h1>
                        </div>
                        <p className="mt-1 text-[13px] font-bold text-g4 sm:mt-0 sm:text-right">
                            {pickupDateTime}
                        </p>
                    </div>
                </div>
            </section>

            <main className="wrapper py-6 sm:py-8 lg:py-10">
                <div className="flex flex-wrap -mx-2.5 xl:-mx-3.5">
                    <div className="w-full px-2.5 pb-5 lg:w-[55%] xl:px-3.5 xl:pb-7">
                    <section className="rounded-[24px] bg-white p-4 shadow-card sm:p-5 lg:p-6">
                        <div className="mb-4">
                            <p className="text-12 font-bold uppercase tracking-wide text-g6">
                                Traveller Details
                            </p>
                            <h2 className="mt-1 text-22 font-extrabold text-dark">
                                Confirm Traveller Information
                            </h2>
                        </div>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            enableReinitialize
                        >
                            {() => (
                                <Form>
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-full px-2 pb-3 sm:w-1/2">
                                            <label className="text-12 font-bold uppercase tracking-wide text-g6">
                                                Name
                                            </label>
                                            <div className="relative">
                                                <UserRound
                                                    size={18}
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                                                />
                                                <Field
                                                    name="name"
                                                    className={`${inputClass} pl-11`}
                                                    placeholder="Enter user name"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="name"
                                                component="span"
                                                className="mt-1 block text-12 text-red-500"
                                            />
                                        </div>

                                        <div className="w-full px-2 pb-3 sm:w-1/2">
                                            <label className="text-12 font-bold uppercase tracking-wide text-g6">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <Mail
                                                    size={18}
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                                                />
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    className={`${inputClass} pl-11`}
                                                    placeholder="Enter email address"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="email"
                                                component="span"
                                                className="mt-1 block text-12 text-red-500"
                                            />
                                        </div>

                                        <div className="w-full px-2 pb-3 sm:w-1/2">
                                            <label className="text-12 font-bold uppercase tracking-wide text-g6">
                                                Mobile Number
                                            </label>
                                            <div className="relative">
                                                <Phone
                                                    size={18}
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                                                />
                                                <Field
                                                    name="mobile"
                                                    className={`${inputClass} pl-11`}
                                                    placeholder="Enter mobile number"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="mobile"
                                                component="span"
                                                className="mt-1 block text-12 text-red-500"
                                            />
                                        </div>

                                        <div className="w-full px-2 pb-3 sm:w-1/2">
                                            <label className="text-12 font-bold uppercase tracking-wide text-g6">
                                                Pickup Address
                                            </label>
                                            <div className="relative">
                                                <MapPin
                                                    size={18}
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                                                />
                                                <Field
                                                    name="pickup_address"
                                                    className={`${inputClass} pl-11`}
                                                    placeholder="Enter pickup address"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="pickup_address"
                                                component="span"
                                                className="mt-1 block text-12 text-red-500"
                                            />
                                        </div>

                                        <div className="w-full px-2 pb-3">
                                            <label className="text-12 font-bold uppercase tracking-wide text-g6">
                                                Drop Address
                                            </label>
                                            <div className="relative">
                                                <MapPin
                                                    size={18}
                                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                                                />
                                                <Field
                                                    name="drop_address"
                                                    className={`${inputClass} pl-11`}
                                                    placeholder="Enter drop address"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="drop_address"
                                                component="span"
                                                className="mt-1 block text-12 text-red-500"
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn_primary mt-2">
                                        Submit Booking
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </section>
                    </div>

                    <aside className="w-full px-2.5 lg:w-[45%] xl:px-3.5">
                        <section className="overflow-hidden rounded-[24px] bg-white shadow-card">
                            <div className="border-b border-line p-4 sm:p-5">
                                <div className="flex items-center">
                                    <div className="flex h-24 w-28 shrink-0 items-center justify-center rounded-[18px] bg-[#FFF7EA] sm:h-28 sm:w-36">
                                        <img
                                            src={selectedCar?.image}
                                            alt={selectedCar?.name}
                                            className="h-full w-full object-contain p-3"
                                        />
                                    </div>

                                    <div className="ml-4 min-w-0">
                                        <p className="text-12 font-bold uppercase tracking-wide text-g6">
                                            Booking Details
                                        </p>
                                        <h2 className="mt-1 text-22 font-extrabold text-dark">
                                            {selectedCar?.name}
                                        </h2>
                                        <p className="mt-1 text-[13px] font-semibold text-g4">
                                            {selectedCar?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:p-5">
                                {detailItems.map((item) => (
                                    <div
                                        key={item.label}
                                        className="mt-3 flex items-start justify-between rounded-2xl border border-line bg-light px-4 py-3 first:mt-0"
                                    >
                                        <div className="flex min-w-0 items-center text-g6">
                                            <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                                {item.icon}
                                            </span>
                                            <span className="text-[13px] font-bold uppercase tracking-wide">
                                                {item.label}
                                            </span>
                                        </div>
                                        <p className="ml-4 max-w-[55%] text-right text-14 font-extrabold text-dark">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-5 rounded-[24px] bg-white p-4 shadow-card sm:p-5">
                            <div className="flex rounded-full bg-light p-1">
                                {bookingTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`mx-1 min-h-11 w-1/3 rounded-full px-2 text-12 font-extrabold transition-all duration-300 first:ml-0 last:mr-0 sm:text-14 ${activeTab === tab.id
                                            ? "bg-primary text-dark shadow-sm"
                                            : "text-g6 hover:text-dark"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-5">
                                {activeTabData.items.map((item) => (
                                    <div
                                        key={item}
                                        className="mt-3 flex items-start rounded-2xl border border-line bg-light px-4 py-3 first:mt-0"
                                    >
                                        <span className="mr-3 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                                            <CheckCircle2 size={17} />
                                        </span>
                                        <p className="text-[13px] font-semibold leading-6 text-g4">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Booking;

import { assets } from "../assets/images/images";
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BadgeCheck, Briefcase, ChevronDown, ShieldCheck, Star, UserRound } from "lucide-react";
import { carOptions } from "../data/carOptions";
import FromToLocation from "../components/FromToLocation";

const SelectCar = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [showModifyForm, setShowModifyForm] = useState(false);

    // Static fallback data
    const staticData = {
        origin_name: 'New Delhi',
        destinations: [{ dest_name: 'Mathura' }],
        trip_type: 'one_way',
        pickup_date: '14-07-2026',
        pickup_time: '7:00 AM',
    };

    const trip = state?.trip || staticData;

    const routeLabel = `${trip.origin_name} – ${trip.destinations?.[0]?.dest_name || ''}`;



    const tripTypeLabel =
        trip.trip_type === 'round_trip' ? 'Round Trip'
            : trip.trip_type === 'one_way' ? 'One Way'
                : trip.trip_type || '—';
    const pickupDate = trip?.pickup_date || "—";
    const pickupTime = trip?.pickup_time || "—";

    return (
        //  header start
        <div className='w-full'>
            <header className="py-3.5 bg-white">
                <div className="wrapper flex items-center">

                    {+918976786567 && <div className="flex items-center rounded-full py-2.5 px-3.5 text16 space-x-2 bg-[#FEF2E0]">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.27 12.5579C16.0129 11.8959 16.5365 11.0248 16.7716 10.0597C17.0067 9.09472 16.9421 8.08133 16.5865 7.15367C16.2308 6.22601 15.6009 5.42779 14.7799 4.86466C13.959 4.30152 12.9858 4 11.9891 4C10.9924 4 10.0191 4.30152 9.1982 4.86466C8.37725 5.42779 7.74728 6.22601 7.39163 7.15367C7.03599 8.08133 6.97143 9.09472 7.20651 10.0597C7.4416 11.0248 7.96523 11.8959 8.70813 12.5579C7.33375 13.0374 6.14266 13.9302 5.29932 15.1129C4.45597 16.2957 4.00197 17.7102 4 19.161C4 19.3835 4.08872 19.5969 4.24665 19.7543C4.40457 19.9116 4.61876 20 4.84211 20C5.06545 20 5.27964 19.9116 5.43756 19.7543C5.59549 19.5969 5.68421 19.3835 5.68421 19.161C5.68566 17.7483 6.24956 16.3939 7.25218 15.395C8.25479 14.3961 9.61421 13.8342 11.0321 13.8328H12.9679C14.3858 13.8342 15.7452 14.3961 16.7478 15.395C17.7504 16.3939 18.3143 17.7483 18.3158 19.161C18.3158 19.3835 18.4045 19.5969 18.5624 19.7543C18.7204 19.9116 18.9346 20 19.1579 20C19.3812 20 19.5954 19.9116 19.7534 19.7543C19.9113 19.5969 20 19.3835 20 19.161C19.9964 17.7075 19.5392 16.2911 18.6918 15.108C17.8443 13.925 16.6485 13.0338 15.27 12.5579ZM11.9891 5.72061C12.6261 5.72061 13.2488 5.90881 13.7784 6.26141C14.3081 6.61401 14.7209 7.11517 14.9647 7.70153C15.2084 8.28788 15.2722 8.93308 15.148 9.55555C15.0237 10.178 14.7169 10.7498 14.2665 11.1986C13.8161 11.6473 13.2422 11.953 12.6174 12.0768C11.9926 12.2006 11.345 12.137 10.7565 11.8942C10.168 11.6513 9.66499 11.24 9.31108 10.7123C8.95718 10.1846 8.76828 9.56419 8.76828 8.92952C8.76828 8.50812 8.85159 8.09085 9.01345 7.70153C9.17531 7.3122 9.41255 6.95846 9.71163 6.66048C10.3156 6.05869 11.1349 5.72061 11.9891 5.72061Z" fill="black" /> </svg>
                        </span>
                        <span className="whitespace-nowrap">+91 8976786567</span>
                    </div>}
                    <Link to='/' className='ml-auto'>
                        <img className="w-full max-w-20" src={assets?.taxilogo} alt="logo" />
                    </Link>
                </div>
            </header>
            {/* header end */}

            {/* ── Trip Info Bar ── */}
            <div className="bg-light border-b border-[#E8EEF5]">
                <div className="wrapper py-3 lg:py-4">

                    {/* Breadcrumb */}
                    <div className="mb-2 flex items-center text-[12px] text-[#748194]">
                        <Link to="/" className="mr-1.5 hover:text-[#FBB03B] transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-[#748194]">›</span>
                        <span className="text-[#0B1727] font-semibold">Select Car</span>
                    </div>

                    {/* Info Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

                        {/* Route */}
                        <h1 className="text-[18px] font-bold text-[#0B1727] leading-snug">
                            {routeLabel}
                        </h1>

                        {/* Details + Modify */}
                        <div className="mt-3 flex flex-wrap items-center -mx-3 -mb-2 sm:mt-0">

                            {/* Trip Type */}
                            <div className="px-3 pb-2">
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#748194]">Trip Type</p>
                                <p className="text-[14px] font-bold text-[#0B1727]">{tripTypeLabel}</p>
                            </div>

                            <div className="hidden sm:block h-8 w-px bg-[#E8EEF5] mx-3 mb-2" />

                            {/* Pickup Date */}
                            <div className="px-3 pb-2">
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#748194]">Pick up</p>
                                <p className="text-[14px] font-bold text-[#0B1727]">{pickupDate}</p>
                            </div>

                            <div className="hidden sm:block h-8 w-px bg-[#E8EEF5] mx-3 mb-2" />

                            {/* Time */}
                            <div className="px-3 pb-2">
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#748194]">Time</p>
                                <p className="text-[14px] font-bold text-[#0B1727]">{pickupTime}</p>
                            </div>

                            <div className="hidden sm:block h-8 w-px bg-[#E8EEF5] mx-3 mb-2" />

                            {/* Modify Booking */}
                            <div className="px-3 pb-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModifyForm((isVisible) => !isVisible)}
                                    className="text-[14px] font-semibold text-[#FBB03B] hover:text-[#0B1727] transition-colors duration-200 whitespace-nowrap"
                                >
                                    {showModifyForm ? "Close Modify" : "Modify Booking"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            {/* ── Trip Info Bar End ── */}
            {showModifyForm && (
                <section className="bg-[#F8FAFC] py-5 sm:py-6">
                    <div className="wrapper">
                        <FromToLocation modifyTripData={trip} />
                    </div>
                </section>
            )}

            <section className="bg-[#F8FAFC] py-6 sm:py-8 lg:py-10">
                <div className="wrapper">
                    <div className="mb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[12px] font-bold uppercase tracking-wide text-[#748194]">
                                Available Cabs
                            </p>
                            <h2 className="mt-1 text-[22px] font-extrabold text-[#0B1727] sm:text-[26px]">
                                Choose your ride
                            </h2>
                        </div>

                        {/* <p className="max-w-[420px] text-[13px] font-medium leading-6 text-[#4D5969] sm:text-right">
                            Static fares shown for UI preview. Final price can update after live fare calculation.
                        </p> */}
                    </div>

                    <div className="space-y-4">
                        {carOptions.map((car) => (
                            <article
                                key={car.id}
                                className="overflow-hidden rounded-[20px] border border-[#E8EEF5] bg-white shadow-[0_12px_35px_rgba(11,23,39,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(11,23,39,0.12)]"
                            >
                                <div className="flex flex-wrap p-4 sm:p-5 lg:items-center">
                                    <div className="w-full pb-5 lg:w-[240px] lg:pb-0 lg:pr-7">
                                    <div className="relative mx-auto flex h-[150px] w-full max-w-[260px] items-center justify-center rounded-[18px] bg-[#FFF7EA] sm:h-[170px] lg:h-[155px]">
                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="h-full w-full object-contain p-3"
                                        />
                                        {/* <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#0B1727] shadow-sm">
                                            AC Cab
                                        </span> */}
                                    </div>
                                    </div>

                                    <div className="min-w-0 w-full pb-5 lg:w-[calc(100%-470px)] lg:pb-0 lg:pr-7">
                                        <div className="flex flex-wrap items-center -mx-1 -mb-2">
                                            <div className="px-1 pb-2">
                                            <h3 className="text-[20px] font-extrabold text-[#0B1727] sm:text-[22px]">
                                                {car.name}
                                            </h3>
                                            </div>

                                            <div className="px-1 pb-2">
                                                <span className="inline-flex h-6 items-center rounded-full bg-[#0B1727] px-2 text-[11px] font-bold text-white">
                                                    {car.rating}
                                                    <Star size={12} className="ml-1 fill-[#FBB03B] text-[#FBB03B]" />
                                                </span>
                                            </div>
                                        </div>

                                        <p className="mt-1 text-[13px] italic text-[#4D5969]">
                                            {car.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap -mx-1.5 -mb-3 text-[13px] text-[#0B1727]">
                                            <div className="w-full px-1.5 pb-3 sm:w-1/2">
                                            <div className="flex items-center">
                                                <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                                    <UserRound size={18} />
                                                </span>
                                                <span className="font-semibold">{car.driverAllowance}</span>
                                            </div>
                                            </div>

                                            <div className="w-full px-1.5 pb-3 sm:w-1/2">
                                            <div className="flex items-center">
                                                <span className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                                    <ShieldCheck size={18} />
                                                </span>
                                                <span>
                                                    <strong>{car.distance}</strong>
                                                    <span className="text-[#748194]"> | Post limit: </span>
                                                    <strong>{car.postLimit}</strong>
                                                </span>
                                            </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="mt-4 inline-flex items-center text-[13px] font-bold text-primary transition-colors duration-200 hover:text-[#0B1727]"
                                        >
                                            Inclusions and Exclusions
                                            <ChevronDown size={16} className="ml-1" />
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-[230px]">
                                    <div className="rounded-[18px] border border-[#E8EEF5] bg-[#FFFDF8] p-4 text-left sm:flex sm:items-center sm:justify-between lg:block lg:text-right">
                                        <div>
                                            <div className="flex items-center sm:justify-start lg:justify-end">
                                                <span className="inline-flex items-center text-[13px] font-extrabold text-[#09A441]">
                                                    <BadgeCheck size={15} className="mr-1" />
                                                    {car.offer}
                                                </span>
                                                <span className="ml-2 text-[13px] font-bold text-[#9AA5B4] line-through">
                                                    {car.oldPrice}
                                                </span>
                                            </div>

                                            <p className="mt-2 text-[32px] font-extrabold leading-none text-primary sm:text-[34px]">
                                                {car.price}
                                            </p>

                                            <p className="mt-2 text-[12px] font-semibold text-[#4D5969]">
                                                {car.taxes}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => navigate("/booking", { state: { trip, car } })}
                                            className="btn_primary mt-4 h-11 w-full uppercase sm:mt-0 sm:w-auto lg:mt-5 lg:w-full"
                                        >
                                            Select Car
                                        </button>
                                    </div>
                                    </div>
                                </div>

                                <div className="flex items-center bg-[#E7F7FF] px-4 py-3 text-[13px] font-bold text-[#0B1727] sm:px-5">
                                    <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                                        <Briefcase size={17} />
                                    </span>
                                    {car.addOn}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SelectCar

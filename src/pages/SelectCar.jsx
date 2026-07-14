import { assets } from "../assets/images/images";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const SelectCar = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

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
                        <img className="w-full max-w-44" src={assets?.logo} alt="logo" />
                    </Link>
                </div>
            </header>
            {/* header end */}

            {/* ── Trip Info Bar ── */}
            <div className="bg-white border-b border-[#E8EEF5]">
                <div className="wrapper py-3 lg:py-4">

                    {/* Breadcrumb */}
                    <div className="mb-2 flex items-center gap-1.5 text-[12px] text-[#748194]">
                        <Link to="/" className="hover:text-[#FBB03B] transition-colors duration-200">
                            Home
                        </Link>
                        <span className="text-[#748194]">›</span>
                        <span className="text-[#0B1727] font-semibold">Select Car</span>
                    </div>

                    {/* Info Row */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        {/* Route */}
                        <h1 className="text-[18px] font-bold text-[#0B1727] leading-snug">
                            {routeLabel}
                        </h1>

                        {/* Details + Modify */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

                            {/* Trip Type */}
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#748194]">Trip Type</p>
                                <p className="text-[14px] font-bold text-[#0B1727]">{tripTypeLabel}</p>
                            </div>

                            <div className="hidden sm:block h-8 w-px bg-[#E8EEF5]" />

                            {/* Pickup Date */}
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#748194]">Pick up</p>
                                <p className="text-[14px] font-bold text-[#0B1727]">{pickupDate}</p>
                            </div>

                            <div className="hidden sm:block h-8 w-px bg-[#E8EEF5]" />

                            {/* Time */}
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#748194]">Time</p>
                                <p className="text-[14px] font-bold text-[#0B1727]">{pickupTime}</p>
                            </div>

                            <div className="hidden sm:block h-8 w-px bg-[#E8EEF5]" />

                            {/* Modify Booking */}
                            <button
                                onClick={() => navigate('/', { state: { modifyTrip: trip } })}
                                className="text-[14px] font-semibold text-[#FBB03B] hover:text-[#0B1727] transition-colors duration-200 whitespace-nowrap"
                            >
                                Modify Booking
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* ── Trip Info Bar End ── */}

        </div>
    )
}

export default SelectCar

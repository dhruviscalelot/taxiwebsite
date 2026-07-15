import React from "react";
import Header from "../../components/Header";
import FromToLocation from "../../components/FromToLocation";
import { assets } from "../../assets/images/images";
import {
  CarFront,
  MapPinned,
  ShieldCheck,
  Route,
  Star,
  CircleCheckBig,
  Building2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BriefcaseBusiness,
  IndianRupee,
  Headphones,

} from "lucide-react";
import ContactUs from "../../components/ContactUs";

const Home = () => {
  return (
    <>
      <Header />

      <div className="w-full">
        {/* Hero Section */}
        <section className="relative z-20 overflow-visible bg-[#FFF7EA] pt-10 pb-14 sm:pt-14 lg:pt-20 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,176,59,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(11,23,39,0.10),transparent_35%)]" />

          <div className="wrapper relative z-10">
            <div className="flex flex-wrap items-center -mx-4">
              {/* Left Content */}
              <div className="w-full px-4 lg:w-[46%]">
                <div className="text-center lg:text-left">
                  <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-12 font-semibold text-dark shadow-card sm:text-14">
                    🚕 Fast & Comfortable Cab Booking
                  </span>

                  <h1 className="mt-5 text-36 font-extrabold leading-tight text-dark sm:text-48 lg:text-56 xl:text-64">
                    Your Journey,
                    <span className="block text-primary">Our Wheels</span>
                  </h1>

                  <p className="mx-auto mt-4 max-w-[600px] text-14 font-medium text-g4 sm:text-16 lg:mx-0 lg:text-18">
                    Hassle-free car rentals for every destination. Book in minutes,
                    travel in comfort.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center -mx-1.5 lg:justify-start">
                    <div className="px-1.5 pb-3">
                      <div className="rounded-2xl bg-white px-4 py-3 shadow-card">
                        <p className="text-20 font-bold text-dark">24/7</p>
                        <p className="text-12 text-g4">Cab Service</p>
                      </div>
                    </div>

                    <div className="px-1.5 pb-3">
                      <div className="rounded-2xl bg-white px-4 py-3 shadow-card">
                        <p className="text-20 font-bold text-dark">Safe</p>
                        <p className="text-12 text-g4">Verified Drivers</p>
                      </div>
                    </div>

                    <div className="px-1.5 pb-3">
                      <div className="rounded-2xl bg-white px-4 py-3 shadow-card">
                        <p className="text-20 font-bold text-dark">Easy</p>
                        <p className="text-12 text-g4">Online Booking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              {/* <div className="mt-8 w-full px-4 lg:mt-0 lg:w-[54%]">
                <div className="relative mx-auto w-full max-w-[560px]">
                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl sm:h-[360px] sm:w-[360px]" />

                  <div className="relative overflow-hidden rounded-[34px] bg-dark p-3 shadow-[0_25px_70px_rgba(11,23,39,0.22)] sm:p-4">
                    <div className="mb-3 flex items-center justify-between px-2 pt-1">
                      <div>
                        <p className="text-12 font-semibold text-white/60">
                          Today’s Ride
                        </p>
                        <h3 className="text-20 font-bold text-white">
                          Premium Cab Ready
                        </h3>
                      </div>

                      <div className="rounded-full bg-primary px-4 py-2 text-12 font-bold text-dark">
                        Available
                      </div>
                    </div>

                    <div className="relative h-[230px] overflow-hidden rounded-[26px] bg-white sm:h-[300px] lg:h-[340px]">
                      {assets?.taxi ? (
                        <img
                          src={assets.taxi}
                          alt="Taxi Cab"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#FFF7EA]">
                          <div className="text-center">
                            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-48">
                              🚕
                            </div>
                            <h3 className="text-24 font-bold text-dark">
                              Book Your Cab
                            </h3>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                        <div className="flex items-center justify-between rounded-2xl bg-white/95 p-3 backdrop-blur-md">
                          <div>
                            <p className="text-12 font-semibold text-g6">
                              Starting From
                            </p>
                            <p className="text-20 font-extrabold text-dark">
                              ₹12/km
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-12 font-semibold text-g6">ETA</p>
                            <p className="text-20 font-extrabold text-dark">
                              5 Min
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex px-1 pt-4 -mx-1.5">
                      <div className="w-1/3 px-1.5">
                        <div className="rounded-2xl bg-white/10 p-3 text-center">
                          <p className="text-16 font-bold text-white">AC</p>
                          <p className="text-11 text-white/60">Comfort</p>
                        </div>
                      </div>

                      <div className="w-1/3 px-1.5">
                        <div className="rounded-2xl bg-white/10 p-3 text-center">
                          <p className="text-16 font-bold text-white">4.8★</p>
                          <p className="text-11 text-white/60">Rating</p>
                        </div>
                      </div>

                      <div className="w-1/3 px-1.5">
                        <div className="rounded-2xl bg-white/10 p-3 text-center">
                          <p className="text-16 font-bold text-white">Clean</p>
                          <p className="text-11 text-white/60">Vehicle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Booking Form */}
              <div className="mt-8 w-full px-4 lg:mt-0 lg:w-[54%]">
                <div className="relative z-20 mx-auto w-full max-w-[760px] lg:ml-auto">
                  <FromToLocation homeLayout />
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* About + How It Works Section */}
        <section className="relative z-0 overflow-hidden bg-white py-12 sm:py-16 lg:py-20 2xl:py-24">
          <div className="wrapper relative z-10">

            {/* Cards */}
            <div className="flex flex-wrap -mx-2.5 xl:-mx-3.5">
              {/* Card 1 */}
              {/* Trusted Travel Partner Section */}
              <div className="w-full px-2.5 pb-5 xl:px-3.5 xl:pb-7">
                <div className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
                  <div className="flex flex-wrap items-center -mx-4">

                    {/* Left Content */}
                    <div className="w-full px-4 lg:w-[60%] xl:w-[62%]">
                      <div className="mx-auto max-w-[760px] text-center lg:mx-0 lg:text-left">
                        <h3 className="text-32 font-extrabold leading-tight text-dark sm:text-40 lg:text-48 xl:text-56">
                          Trusted{" "}
                          <span className="text-primary">Travel Partner</span>
                          <span className="block">Across India</span>
                        </h3>

                        <p className="mt-6 max-w-[780px] text-14 font-medium leading-7 text-g6 sm:text-16 lg:text-18">
                          Taxi Car Rentals is your trusted partner for smooth city rides,
                          intercity trips, and unforgettable road journeys. We offer a premium
                          fleet for chauffeur-driven and self-drive options, ensuring comfort,
                          safety, and great experiences. With a strong network across India,
                          Taxi makes every ride effortless and memorable.
                        </p>

                        <div className="mt-7 flex flex-wrap justify-center -mx-1.5 lg:justify-start">
                          <div className="px-1.5 pb-3">
                            <div className="rounded-2xl border border-line bg-light px-4 py-3">
                              <Route size={22} className="mb-2 text-primary" />
                              <p className="text-14 font-bold text-dark">City & Intercity</p>
                            </div>
                          </div>

                          <div className="px-1.5 pb-3">
                            <div className="rounded-2xl border border-line bg-light px-4 py-3">
                              <Star size={22} className="mb-2 text-primary" />
                              <p className="text-14 font-bold text-dark">Premium Fleet</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="mt-8 w-full px-4 lg:mt-0 lg:w-[40%] xl:w-[38%]">
                      <div className="relative mx-auto max-w-[460px] overflow-hidden rounded-[26px] bg-light shadow-[0_20px_60px_rgba(11,23,39,0.12)] lg:ml-auto">
                        <img
                          src={assets?.tf2}
                          alt="Trusted Travel Partner"
                          className="h-[300px] w-full object-cover object-center sm:h-[380px] lg:h-[480px]"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Card 2 */}
              {/* Reliable Rides Section */}
              <div className="w-full px-2.5 pb-5 xl:px-3.5 xl:pb-7">
                <div className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 xl:py-16">
                  <div className="flex flex-wrap items-center -mx-4">

                    {/* Left Image */}
                    <div className="w-full px-4 lg:w-[42%] xl:w-[40%]">
                      <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[26px] bg-light shadow-[0_20px_60px_rgba(11,23,39,0.12)] lg:mr-auto">
                        <img
                          src={assets?.tf1}
                          alt="Reliable Rides"
                          className="h-[300px] w-full object-cover object-center sm:h-[380px] lg:h-[480px]"
                        />
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="mt-8 w-full px-4 lg:mt-0 lg:w-[58%] xl:w-[60%]">
                      <div className="mx-auto max-w-[760px] text-center lg:mx-0 lg:text-left">
                        <h3 className="text-32 font-extrabold leading-tight text-dark sm:text-40 lg:text-48 xl:text-56">
                          <span className="text-primary">Reliable Rides</span>{" "}
                          for Every
                          <span className="block">Journey</span>
                        </h3>

                        <p className="mt-6 max-w-[780px] text-14 font-medium leading-7 text-g6 sm:text-16 lg:text-18">
                          Nothing beats the thrill of a road trip — open highways, new
                          adventures, hidden gems. At Taxi, we make every journey easy, safe,
                          and unforgettable. With services in 2000+ cities, premium cars, and
                          a passion for travel, we help you create memories where the journey
                          is as beautiful as the destination.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="wrapper relative z-10 mt-14 sm:mt-16 lg:mt-20 2xl:mt-24">
            <div className="mx-auto mb-12 max-w-[780px] text-center sm:mb-16 lg:mb-20">
              <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-2 text-12 font-bold text-dark sm:text-14">
                <CarFront size={18} className="mr-2 text-primary" />
                Taxi Cab Booking Process
              </span>

              <h2 className="mt-4 text-30 font-semibold leading-tight text-dark sm:text-36 lg:text-32">
                How It Works
              </h2>

              <p className="mx-auto mt-4 max-w-[680px] text-14 font-medium leading-7 text-g4 sm:text-16">
                Our premium vehicles are ready to take you on the journey of a
                lifetime. Choose your destination, select your ride, and hit the road!
              </p>
            </div>



            {/* Desktop Timeline */}
            <div className="relative hidden lg:block">
              {/* Connecting Line */}
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-[50px] h-[150px]">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 1000 150"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 90 28 L 500 92 L 910 28"
                    stroke="#E8EEF5"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>

              <div className="flex -mx-4">
                {[
                  {
                    no: "01",
                    title: "Choose Your Route",
                    text: "Browse our curated journeys or create your own custom route for the perfect adventure.",
                    icon: <Route size={26} strokeWidth={2.2} />,
                    top: "",
                  },
                  {
                    no: "02",
                    title: "Select Your Car",
                    text: "Pick the perfect ride from our fleet of well-maintained cars suited for any terrain.",
                    icon: <CarFront size={26} strokeWidth={2.2} />,
                    top: "mt-16",
                  },
                  {
                    no: "03",
                    title: "Confirm & Ride",
                    text: "Hit the road with confidence, knowing we’ve got your back with 24/7 roadside assistance.",
                    icon: <CircleCheckBig size={26} strokeWidth={2.2} />,
                    top: "",
                  },
                ].map((item) => (
                  <div
                    key={item.no}
                    className={`group w-1/3 px-4 text-center ${item.top}`}
                  >
                    <div className="relative mx-auto mb-7 flex h-[132px] w-[132px] items-center justify-center rounded-full border border-line bg-white  transition-all duration-300 group-hover:border-primary ">
                      {/* Default Icon */}
                      <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-primary/15 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
                        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-primary text-dark ">
                          {item.icon}
                        </div>
                      </div>

                      {/* Hover Number Circle */}
                      <div className="absolute inset-0 flex scale-75 items-center justify-center rounded-full bg-primary text-40 font-extrabold text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        {item.no}
                      </div>
                    </div>

                    <div className="mx-auto max-w-[330px]">
                      <h3 className="text-22 font-extrabold uppercase tracking-wide text-dark">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-14 font-medium leading-7 text-g4 sm:text-16">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>







            {/* Mobile / Tablet Timeline */}
            <div className="relative lg:hidden">
              {/* Vertical Line */}
              <div className="absolute left-[34px] top-8 bottom-8 w-px bg-line" />

              {[
                {
                  no: "01",
                  title: "Choose Your Route",
                  text: "Browse our curated journeys or create your own custom route for the perfect adventure.",
                  icon: <Route size={22} strokeWidth={2.2} />,
                },
                {
                  no: "02",
                  title: "Select Your Car",
                  text: "Pick the perfect ride from our fleet of well-maintained cars suited for any terrain.",
                  icon: <CarFront size={22} strokeWidth={2.2} />,
                },
                {
                  no: "03",
                  title: "Confirm & Ride",
                  text: "Hit the road with confidence, knowing we’ve got your back with 24/7 roadside assistance.",
                  icon: <CircleCheckBig size={22} strokeWidth={2.2} />,
                },
              ].map((item, index) => (
                <div
                  key={item.no}
                  className={`group relative flex ${index !== 0 ? "mt-6" : ""}`}
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 mr-4 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border border-line bg-white transition-all duration-300 group-hover:border-primary">
                    {/* Default Icon */}
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary/15 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
                      <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-primary text-dark">
                        {item.icon}
                      </div>
                    </div>

                    {/* Hover Number */}
                    <div className="absolute inset-0 flex scale-75 items-center justify-center rounded-full bg-primary text-22 font-extrabold text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      {item.no}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 rounded-[24px] border border-line bg-white p-5 shadow-card transition-all duration-300 group-hover:border-primary/40">
                    <span className="mb-1 inline-block text-12 font-extrabold text-primary">
                      STEP {item.no}
                    </span>

                    <h3 className="text-20 font-extrabold uppercase tracking-wide text-dark sm:text-22">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-14 font-medium leading-7 text-g4 sm:text-16">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>


          </div>



          {/* Our Services Section */}
          <div className="wrapper relative z-10 mt-14 sm:mt-16 lg:mt-20 2xl:mt-24">
            {/* Heading */}
            <div className="mx-auto mb-12 max-w-[780px] text-center">

              <h2 className="text-30 font-bold text-dark sm:text-36 lg:text-32">
                Our Services
              </h2>
            </div>

            <div className="relative">
              {/* Left Arrow */}
              <button
                type="button"
                className="absolute left-0 top-[170px] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-dark shadow-card transition-all duration-300 hover:bg-primary lg:flex"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                className="absolute right-0 top-[170px] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-dark shadow-card transition-all duration-300 hover:bg-primary lg:flex"
              >
                <ChevronRight size={22} />
              </button>


              {/* Services */}
              <div className="-mx-4 overflow-x-auto px-4 no-scrollbar sm:-mx-5 sm:px-5 lg:mx-auto lg:max-w-[1050px] lg:overflow-visible lg:px-0">
                <div className="flex flex-nowrap justify-start pt-2 lg:flex-wrap lg:justify-center lg:-mx-3 lg:pt-0">
                  {[
                    {
                      title: "Regular Office",
                      text: "Comfortable daily rides for office and business travel.",
                      image: assets?.s1,
                      icon: <Building2 size={28} strokeWidth={2.2} />,
                    },
                    {
                      title: "City Transport",
                      text: "Fast and reliable cab service for city travel.",
                      image: assets?.s2,
                      icon: <CarFront size={28} strokeWidth={2.2} />,
                    },
                    {
                      title: "Business Transfer",
                      text: "Competently expedite seamless results and business travel.",
                      image: assets?.s3,
                      icon: <BriefcaseBusiness size={28} strokeWidth={2.2} />,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="w-[85vw] min-w-[85vw] shrink-0 px-3 pb-8 sm:w-[48%] sm:min-w-[48%] lg:w-1/3 lg:min-w-0"
                    >
                      <div className="group relative mx-auto max-w-[330px] pt-[120px]">
                        {/* Image */}
                        <div className="absolute left-0 top-0 h-[190px] w-full overflow-hidden bg-light">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="h-full w-full bg-[linear-gradient(135deg,#F8FAFC,#E8EEF5)]" />
                          )}

                          <div className="absolute inset-0 bg-dark/0 transition-all duration-300 group-hover:bg-dark/35" />
                        </div>

                        {/* Content Card */}
                        <div className="relative z-10 mx-auto min-h-[150px] w-[82%] bg-white text-center shadow-[0_16px_35px_rgba(11,23,39,0.10)] transition-all duration-300 group-hover:bg-dark">
                          {/* Icon Circle */}
                          <div className="absolute left-1/2 top-0 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-dark transition-all duration-300 group-hover:text-white">
                            {item.icon}
                          </div>

                          <div className="px-5 pb-5 pt-16">
                            <h3 className="text-16 font-extrabold uppercase tracking-wide text-dark transition-all duration-300 group-hover:text-white">
                              {item.title}
                            </h3>

                            <p className="mx-auto mt-3 hidden max-w-[230px] text-12 font-medium leading-6 text-white/70 transition-all duration-300 group-hover:block">
                              {item.text}
                            </p>
                          </div>

                          {/* Button */}
                          <div className="border-t border-primary bg-primary py-3 transition-all duration-300 group-hover:border-white/10 group-hover:bg-dark">
                            <button
                              type="button"
                              className="inline-flex items-center text-12 font-semibold uppercase tracking-wide text-dark transition-all duration-300 group-hover:text-white"
                            >
                              Learn More
                              <ArrowRight size={14} className="ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* why choose us section */}
              <section className="py-12 sm:py-14 lg:py-16 mt-12 ">
                <div className="wrapper">
                  {/* Heading */}
                  <div className="mx-auto max-w-[760px] text-center">
                    <h2 className="text-30 font-extrabold text-dark sm:text-36 lg:text-40">
                      Why Choose Us?
                    </h2>

                    <p className="mx-auto mt-3 max-w-[620px] text-14 font-medium leading-7 text-g6 sm:text-16">
                      We make every ride safe, comfortable, and easy with trusted cab service
                      for city rides, airport transfers, and outstation trips.
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="mt-8 flex flex-wrap -mx-2">
                    {[
                      {
                        title: "Safe & Clean Cars",
                        text: "Well-maintained vehicles for a comfortable journey.",
                        icon: <CarFront size={24} />,
                      },
                      {
                        title: "Transparent Pricing",
                        text: "Clear fare details with no hidden charges.",
                        icon: <IndianRupee size={24} />,
                      },
                      {
                        title: "Trusted Service",
                        text: "Reliable cab service for local and outstation travel.",
                        icon: <ShieldCheck size={24} />,
                      },
                      {
                        title: "24/7 Support",
                        text: "Quick customer support whenever you need help.",
                        icon: <Headphones size={24} />,
                      },
                    ].map((item) => (
                      <div key={item.title} className="w-full px-2 pb-4 sm:w-1/2 lg:w-1/4">
                        <div className="h-full rounded-[24px] bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,23,39,0.12)]">
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                            {item.icon}
                          </div>

                          <h3 className="mt-4 text-16 font-extrabold text-dark">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-12 font-medium leading-6 text-g6 sm:text-14">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mx-auto mt-6 max-w-[760px] rounded-[26px] bg-dark px-5 py-6 text-center sm:px-8">
                    <h3 className="text-22 font-extrabold text-white sm:text-28">
                      Ready for a Comfortable Ride?
                    </h3>

                    <p className="mx-auto mt-2 max-w-[560px] text-14 font-medium leading-7 text-white/70">
                      Book your taxi easily and enjoy a smooth travel experience.
                    </p>

                    <button type="button" className="btn_primary mt-5">
                      Book Taxi
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              </section>


              {/* contact us section */}
              <div>
                  <ContactUs/>
              </div>

            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default Home;

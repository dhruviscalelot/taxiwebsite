import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/images/images";

function Header({
  scrollToAbout,
  scrollToHowToWork,
  scrollToOurServices,
  scrollToWhyChooseUs,
  scrollToPlaceInspiration,
  scrollToContact,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (scrollFunction) => {
    if (typeof scrollFunction === "function") {
      scrollFunction();
    }

    closeMenu();
  };

  const menuItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About Us",
      action: scrollToAbout,
    },
    {
      label: "How It Works",
      action: scrollToHowToWork,
    },
    {
      label: "Our Services",
      action: scrollToOurServices,
    },
    {
      label: "Why Choose Us?",
      action: scrollToWhyChooseUs,
    },
    {
      label: "Places",
      action: scrollToPlaceInspiration,
    },
    {
      label: "Contact Us",
      action: scrollToContact,
    },
    {
      label: "Routes",
      to: "/routes",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-line bg-white/95 shadow-header backdrop-blur-xl">
        <div className="wrapper">
          <div className="flex h-[72px] items-center justify-between lg:h-[84px]">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center">
              <img
                src={assets?.logo}
                alt="Taxi Cab Logo"
                className="h-[46px] w-[145px] object-contain sm:h-[52px] sm:w-[165px] lg:h-[58px] lg:w-[185px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="ml-6 hidden flex-1 items-center justify-center xl:ml-10 lg:flex">
              <ul className="flex items-center">
                {menuItems.map((item, index) => (
                  <li key={item.label} className={index !== 0 ? "ml-1 xl:ml-2" : ""}>
                    {item.to ? (
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          `inline-flex whitespace-nowrap rounded-full px-3 py-2 text-14 font-semibold transition-all duration-300 2xl:text-16 ${
                            isActive
                              ? "bg-primary/15 text-dark"
                              : "text-g4 hover:bg-primary/10 hover:text-dark"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleScroll(item.action)}
                        className="inline-flex whitespace-nowrap rounded-full px-3 py-2 text-14 font-semibold text-g4 transition-all duration-300 hover:bg-primary/10 hover:text-dark 2xl:text-16"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="ml-4 hidden shrink-0 items-center lg:flex">
              <a href="tel:+919999999999" className="btn_outline">
                Call Now
              </a>

              <Link to="/book-taxi" className="btn_primary ml-3">
                Book Taxi
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={openMenu}
              aria-label="Open Menu"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-dark shadow-sm lg:hidden"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 7H20" strokeLinecap="round" />
                <path d="M4 12H20" strokeLinecap="round" />
                <path d="M4 17H20" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-dark/50 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Link to="/" onClick={closeMenu}>
              <img
                src={assets?.logo}
                alt="Taxi Cab Logo"
                className="h-[46px] w-[150px] object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-light text-dark"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6L18 18" strokeLinecap="round" />
                <path d="M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Info */}
          <div className="px-5 pt-5">
            <div className="mb-5 rounded-2xl bg-primary/15 p-4">
              <p className="text-12 font-semibold uppercase tracking-wide text-g4">
                Taxi Cab
              </p>
              <h4 className="mt-1 text-20 font-bold text-dark">
                Book your ride easily
              </h4>
              <p className="mt-1 text-14 text-g4">
                Fast, safe and comfortable taxi booking.
              </p>
            </div>
          </div>

          {/* Mobile Nav */}
          <nav className="px-5 pb-5">
            <ul>
              {menuItems.map((item, index) => (
                <li key={item.label} className={index !== 0 ? "mt-2" : ""}>
                  {item.to ? (
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex w-full items-center justify-between rounded-xl px-4 py-3 text-14 font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-primary/15 text-dark"
                            : "text-dark hover:bg-primary/15"
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <span>→</span>
                    </NavLink>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleScroll(item.action)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-14 font-semibold text-dark transition-all duration-300 hover:bg-primary/15"
                    >
                      <span>{item.label}</span>
                      <span>→</span>
                    </button>
                  )}
                </li>
              ))}

              <li className="mt-5">
                <Link
                  to="/book-taxi"
                  onClick={closeMenu}
                  className="btn_primary w-full"
                >
                  Book Taxi
                </Link>
              </li>

              <li className="mt-3">
                <a href="tel:+919999999999" className="btn_outline w-full">
                  Call Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
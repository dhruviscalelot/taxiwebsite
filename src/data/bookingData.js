export const bookingTabs = [
    {
        id: "inclusions",
        label: "Inclusions",
        items: [
            "Base fare, driver allowance and fuel charges included",
            "Clean, sanitised and air-conditioned cab",
            "Professional driver for the full journey",
            "Free pickup from airport or railway station",
        ],
    },
    {
        id: "exclusions",
        label: "Exclusions",
        items: [
            "Toll, parking, state tax and permit charges are extra if applicable",
            "Extra kilometres are charged after the included KM limit",
            "Night charges may apply as per travel time",
            "Additional waiting or route changes are not included in base fare",
        ],
    },
    {
        id: "terms",
        label: "Terms & Conditions",
        items: [
            "Carry a valid ID proof during the trip",
            "Final fare may change if pickup, drop, route or travel time changes",
            "Cancellation charges may apply after driver assignment",
            "Booking confirmation is subject to cab availability",
        ],
    },
];

export const bookingFormInitialValues = {
    name: "",
    email: "",
    mobile: "",
    pickup_address: "",
    drop_address: "",
};

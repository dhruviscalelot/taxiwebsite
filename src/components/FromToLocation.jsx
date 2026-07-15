import React, { useMemo } from "react";
import { Calendar } from "primereact/calendar";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInputModule from "react-phone-input-2";
import { City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { MapPin, MapPinned } from "lucide-react";
import CustomDropdown from "../components/UI/CustomDropdown";
import moment from 'moment';

dayjs.extend(customParseFormat);

function FromToLocation({ modifyTripData, homeLayout = false }) {

    const PhoneInput = PhoneInputModule.default || PhoneInputModule;
    const navigate = useNavigate();
    const maxDestinationFields = 5;
    const fieldClass = homeLayout
        ? "w-full px-2 pb-4 sm:w-1/2"
        : "w-full px-2 pb-4 md:w-1/2 xl:w-1/5";

    const indianCities = useMemo(() => {
        return City.getCitiesOfCountry("IN")?.map((city) => ({
            label: `${city.name}, ${city.stateCode}`,
            value: city.name,
            stateCode: city.stateCode,
            lat: city.latitude,
            lng: city.longitude,
        }));
    }, []);

    const parseDateValue = (date) => {
        if (!date) return "";

        if (date instanceof Date) return date;

        const parsedDate = dayjs(date, ["DD-MM-YYYY", "DD/MM/YYYY", "YYYY-MM-DD"], true);
        return parsedDate.isValid() ? parsedDate.toDate() : "";
    };

    const parseTimeValue = (time, fallbackValue = dayjs().add(1, "hour")) => {
        if (!time) return fallbackValue;

        if (dayjs.isDayjs(time)) return time;

        const parsedTime = dayjs(time, ["h:mm A", "hh:mm A", "HH:mm"], true);
        return parsedTime.isValid() ? parsedTime : fallbackValue;
    };

    const formatDate = (date) => {
        if (!date) return "";

        const d = date instanceof Date ? date : parseDateValue(date);
        if (!d) return "";

        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();

        return `${day}-${month}-${year}`;
    };

    const selectedTripType = modifyTripData?.trip_type || "one_way";

    const getEmptyTripValues = (tripType) => ({
        trip_type: tripType,
        origin_name: "",
        origin_lat: "",
        origin_lng: "",
        dest_name: "",
        dest_lat: "",
        dest_lng: "",
        extra_destinations: [],
        pickup_date: "",
        return_date: "",
        mobile: "",
        country_code: "+91",
        country_wise_contact: {},
        pickup_time: null,
    });

    const initialValues = {
        trip_type: selectedTripType,
        origin_name: modifyTripData?.origin_name || "",
        origin_lat: modifyTripData?.origin_lat || "",
        origin_lng: modifyTripData?.origin_lng || "",
        dest_name: modifyTripData?.destinations?.[0]?.dest_name || "",
        dest_lat: modifyTripData?.destinations?.[0]?.dest_lat || "",
        dest_lng: modifyTripData?.destinations?.[0]?.dest_lng || "",
        extra_destinations:
            selectedTripType === "round_trip"
                ? modifyTripData?.destinations?.slice(1) || []
                : [],
        pickup_date: parseDateValue(modifyTripData?.pickup_date),
        return_date:
            selectedTripType === "round_trip"
                ? parseDateValue(modifyTripData?.return_date)
                : "",
        mobile: modifyTripData?.mobile || "",
        country_code: modifyTripData?.country_code || "+91",
        country_wise_contact: modifyTripData?.country_wise_contact || {},
        pickup_time: parseTimeValue(
            modifyTripData?.pickup_time,
            modifyTripData ? null : dayjs().add(1, "hour")
        ),
    };

    const validationSchema = Yup.object({
        origin_name: Yup.string().required("From location is required"),
        dest_name: Yup.string().required("To location is required"),
        extra_destinations: Yup.array().of(
            Yup.object({
                dest_name: Yup.string().required("To location is required"),
            })
        ),
        // pickup_date: Yup.mixed().required("Pickup date is required"),
        // return_date: Yup.mixed().required("Return date is required"),
        // pickup_time: Yup.string().required("Pickup time is required"),
        mobile: Yup.string().required("Mobile number is required"),
    });

    const updateCityValue = (value, fieldName, setFieldValue) => {
        setFieldValue(fieldName, value);
        const selectedCity = indianCities.find((city) => city.value === value);

        if (selectedCity) {
            if (fieldName === "origin_name") {
                setFieldValue("origin_lat", selectedCity.lat);
                setFieldValue("origin_lng", selectedCity.lng);
            } else {
                setFieldValue("dest_lat", selectedCity.lat);
                setFieldValue("dest_lng", selectedCity.lng);
            }
        }
    };

    const selectCity = (city, fieldName, setFieldValue) => {
        setFieldValue(fieldName, city.value);

        if (fieldName === "origin_name") {
            setFieldValue("origin_lat", city.lat);
            setFieldValue("origin_lng", city.lng);
        } else {
            setFieldValue("dest_lat", city.lat);
            setFieldValue("dest_lng", city.lng);
        }
    };

    const addDestination = (values, setFieldValue) => {
        const destinations = values.extra_destinations || [];

        if (destinations.length + 1 >= maxDestinationFields) {
            return;
        }

        setFieldValue("extra_destinations", [
            ...destinations,
            {
                dest_name: "",
                dest_lat: "",
                dest_lng: "",
            },
        ]);
    };

    const removeDestination = (values, index, setFieldValue) => {
        const destinations = values.extra_destinations || [];
        setFieldValue(
            "extra_destinations",
            destinations.filter((_, destinationIndex) => destinationIndex !== index)
        );
    };

    const updateExtraDestinationValue = (value, index, values, setFieldValue) => {
        const destinations = [...(values.extra_destinations || [])];
        const selectedCity = indianCities.find((city) => city.value === value);

        destinations[index] = {
            ...destinations[index],
            dest_name: value,
            dest_lat: selectedCity?.lat || "",
            dest_lng: selectedCity?.lng || "",
        };

        setFieldValue("extra_destinations", destinations);
    };

    const selectExtraDestination = (city, index, values, setFieldValue) => {
        const destinations = [...(values.extra_destinations || [])];

        destinations[index] = {
            ...destinations[index],
            dest_name: city.value,
            dest_lat: city.lat,
            dest_lng: city.lng,
        };

        setFieldValue("extra_destinations", destinations);
    };

    const selectTripType = (tripType, values, setValues) => {
        if (modifyTripData) {
            setValues(tripType === selectedTripType ? initialValues : getEmptyTripValues(tripType));
            return;
        }

        setValues({
            ...values,
            trip_type: tripType,
            extra_destinations: tripType === "one_way" ? [] : values.extra_destinations,
            return_date: tripType === "one_way" ? "" : values.return_date,
        });
    };

    const handleSubmit = (values) => {
        if (values.origin_name === values.dest_name) {
            toast.error("From and To locations cannot be same");
            return;
        }

        const extraDestinations =
            values.trip_type === "round_trip"
                ? values.extra_destinations.filter((destination) => destination.dest_name)
                : [];

        const payload = {
            trip_type: values.trip_type,
            origin_name: values.origin_name, //from
            origin_lat: values.origin_lat,
            origin_lng: values.origin_lng,
            destinations: [
                {
                    dest_name: values.dest_name, //to
                    dest_lat: values.dest_lat,
                    dest_lng: values.dest_lng,
                },
                ...extraDestinations,
            ],
            pickup_date: formatDate(values.pickup_date),
            return_date:
                values.trip_type === "round_trip" ? formatDate(values.return_date) : "",
            pickup_time: values.pickup_time
                ? moment(values.pickup_time.toDate()).format("h:mm A")
                : "",
            mobile: values.mobile,
            country_code: values.country_code,
            country_wise_contact: values.country_wise_contact,
        };

        navigate("/select-car", { state: { trip: payload } });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ values, setFieldValue, setFieldTouched, setValues }) => (
                <Form className="rounded-[28px] bg-white p-4 shadow-xl sm:p-5 lg:p-6">
                    <div className="mb-5 flex flex-wrap justify-center items-center">
                        <div className="px-1.5 pb-2">
                            <button
                                type="button"
                                onClick={() => selectTripType("one_way", values, setValues)}
                                className={`h-[42px] rounded-full border px-5 text-14 font-bold transition-all duration-300 ${values.trip_type === "one_way"
                                    ? "border-primary bg-primary text-dark"
                                    : "border-[#E8EEF5] bg-[#F8FAFC] text-[#748194] hover:border-primary hover:text-dark"
                                    }`}
                            >
                                One Way
                            </button>
                        </div>

                        <div className="px-1.5 pb-2">
                            <button
                                type="button"
                                onClick={() => selectTripType("round_trip", values, setValues)}
                                className={`h-[42px] rounded-full border px-5 text-14 font-bold transition-all duration-300 ${values.trip_type === "round_trip"
                                    ? "border-primary bg-primary text-dark"
                                    : "border-[#E8EEF5] bg-[#F8FAFC] text-[#748194] hover:border-primary hover:text-dark"
                                    }`}
                            >
                                Round Trip
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2">
                        {/* From */}
                        <div className={fieldClass}>
                            <label className="mb-2 block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                From
                            </label>

                            <CustomDropdown
                                icon={
                                    <MapPin
                                        size={20}
                                        strokeWidth={2.5}
                                        className="mr-2 shrink-0 text-primary"
                                    />
                                }
                                name="origin_name"
                                value={values.origin_name}
                                placeholder="Pickup location"
                                cities={indianCities}
                                onType={(value) =>
                                    updateCityValue(value, "origin_name", setFieldValue)
                                }
                                onSelect={(city) =>
                                    selectCity(city, "origin_name", setFieldValue)
                                }
                                onTouched={() => setFieldTouched("origin_name", true)}
                            />

                            <ErrorMessage
                                name="origin_name"
                                component="span"
                                className="mt-1 block text-12 text-red-500"
                            />
                        </div>

                        {/* To */}
                        <div className={fieldClass}>
                            <div className="mb-2 flex items-center justify-between">
                                <label className="block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                    To
                                </label>

                                {values.trip_type === "round_trip" &&
                                    values.extra_destinations.length + 1 < maxDestinationFields && (
                                        <button
                                            type="button"
                                            onClick={() => addDestination(values, setFieldValue)}
                                            className="form_icon_btn hover:border-primary hover:bg-primary"
                                        >
                                            +
                                        </button>
                                    )}
                            </div>

                            <CustomDropdown
                                icon={
                                    <MapPinned
                                        size={20}
                                        strokeWidth={2.5}
                                        className="mr-2 shrink-0 text-primary"
                                    />
                                }
                                name="dest_name"
                                value={values.dest_name}
                                placeholder="Drop location"
                                cities={indianCities}
                                onType={(value) =>
                                    updateCityValue(value, "dest_name", setFieldValue)
                                }
                                onSelect={(city) =>
                                    selectCity(city, "dest_name", setFieldValue)
                                }
                                onTouched={() => setFieldTouched("dest_name", true)}
                            />

                            <ErrorMessage
                                name="dest_name"
                                component="span"
                                className="mt-1 block text-12 text-red-500"
                            />
                        </div>

                        {values.trip_type === "round_trip" &&
                            values.extra_destinations.map((destination, index) => (
                                <div
                                    key={index}
                                    className={fieldClass}
                                >
                                    <div className="mb-2 flex items-center justify-between">
                                        <label className="block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                            To
                                        </label>

                                        <div className="flex items-center -mx-0.5">
                                            <div className="px-0.5">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeDestination(values, index, setFieldValue)
                                                    }
                                                    className="form_icon_btn hover:border-red-400 hover:bg-red-50 hover:text-red-500"
                                                >
                                                    -
                                                </button>
                                            </div>

                                            {values.extra_destinations.length + 1 <
                                                maxDestinationFields &&
                                                index === values.extra_destinations.length - 1 && (
                                                    <div className="px-0.5">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                addDestination(values, setFieldValue)
                                                            }
                                                            className="form_icon_btn hover:border-primary hover:bg-primary"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )}
                                        </div>
                                    </div>

                                    <CustomDropdown
                                        icon={
                                            <MapPinned
                                                size={20}
                                                strokeWidth={2.5}
                                                className="mr-2 shrink-0 text-primary"
                                            />
                                        }
                                        name={`extra_destinations.${index}.dest_name`}
                                        value={destination.dest_name}
                                        placeholder="Drop location"
                                        cities={indianCities}
                                        onType={(value) =>
                                            updateExtraDestinationValue(
                                                value,
                                                index,
                                                values,
                                                setFieldValue
                                            )
                                        }
                                        onSelect={(city) =>
                                            selectExtraDestination(
                                                city,
                                                index,
                                                values,
                                                setFieldValue
                                            )
                                        }
                                        onTouched={() =>
                                            setFieldTouched(
                                                `extra_destinations.${index}.dest_name`,
                                                true
                                            )
                                        }
                                    />

                                    <ErrorMessage
                                        name={`extra_destinations.${index}.dest_name`}
                                        component="span"
                                        className="mt-1 block text-12 text-red-500"
                                    />
                                </div>
                            ))}

                        {/* Pickup Date */}
                        <div className={fieldClass}>
                            <label className="mb-2 block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                Pickup Date
                            </label>

                            <div className="form_control">
                                <Calendar
                                    name="pickup_date"
                                    value={values.pickup_date}
                                    minDate={new Date()}
                                    onChange={(e) => setFieldValue("pickup_date", e.value)}
                                    dateFormat="dd/mm/yy"
                                    placeholder="Select date"
                                    showIcon
                                    className="w-full"
                                />
                            </div>

                            <ErrorMessage
                                name="pickup_date"
                                component="span"
                                className="mt-1 block text-12 text-red-500"
                            />
                        </div>

                        {/* Pickup Time */}
                        <div className={fieldClass}>
                            <label className="mb-2 block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                Pickup Time
                            </label>

                            <div className="form_control">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileTimePicker
                                        value={values.pickup_time}
                                        onChange={(newValue) => {
                                            setFieldValue("pickup_time", newValue);
                                        }}
                                        slotProps={{
                                            textField: {
                                                variant: "standard",
                                                fullWidth: true,
                                                InputProps: {
                                                    disableUnderline: true,
                                                },
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>

                            <ErrorMessage
                                name="pickup_time"
                                component="span"
                                className="mt-1 block text-12 text-red-500"
                            />
                        </div>

                        {/* Mobile */}
                        <div className={fieldClass}>
                            <label className="mb-2 block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                Mobile No.
                            </label>

                            <div className="phone_box form_control">
                                <PhoneInput
                                    country="in"
                                    value={`${values.country_code.replace("+", "")}${values.mobile}`}
                                    onChange={(phone, countryData) => {
                                        const dialCode = countryData.dialCode;
                                        const mobileNumber = phone.slice(dialCode.length);

                                        setFieldValue("mobile", mobileNumber);
                                        setFieldValue("country_code", `+${dialCode}`);
                                        setFieldValue("country_wise_contact", {
                                            ...countryData,
                                            localFormate: phone,
                                            withoutDialCode: mobileNumber,
                                        });
                                    }}
                                    onBlur={() => setFieldTouched("mobile", true)}
                                    inputProps={{
                                        name: "mobile",
                                        required: true,
                                    }}
                                />
                            </div>

                            <ErrorMessage
                                name="mobile"
                                component="span"
                                className="mt-1 block text-12 text-red-500"
                            />
                        </div>



                        {/* Return Date for only round trips */}
                        {values.trip_type === "round_trip" && (
                            <div className={fieldClass}>
                                <label className="mb-2 block text-12 font-bold uppercase tracking-wide text-[#748194]">
                                    Return Date
                                </label>

                                <div className="form_control">
                                    <Calendar
                                        name="return_date"
                                        value={values.return_date}
                                        minDate={new Date()}
                                        onChange={(e) => setFieldValue("return_date", e.value)}
                                        dateFormat="dd/mm/yy"
                                        placeholder="Select date"
                                        showIcon
                                        className="w-full"
                                    />
                                </div>

                                <ErrorMessage
                                    name="return_date"
                                    component="span"
                                    className="mt-1 block text-12 text-red-500"
                                />
                            </div>
                        )}
                    </div>

                    <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-center text-12 font-medium text-[#4D5969] sm:mr-4 sm:text-left sm:text-14">
                            Search available cabs based on your pickup and drop location.
                        </p>

                        <button type="submit" className="btn_primary mt-3 sm:mt-0">
                            Explore Cabs
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default FromToLocation;

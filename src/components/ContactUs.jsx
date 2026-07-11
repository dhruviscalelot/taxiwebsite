import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { MobileTimePicker } from '@mui/x-date-pickers';
import PhoneInputModule from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function ContactUs({ modifyContactData }) {
    const PhoneInput = PhoneInputModule.defalut || PhoneInputModule;

    const navigate = useNavigate();

    // generate the captcha
    const generateCaptcha = () => {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    };
    const [captchaCode, setCaptchaCode] = useState(generateCaptcha());


    const initialValues = {
        name: modifyContactData?.name || "",
        email: modifyContactData?.email || "",
        mobile: modifyContactData?.mobile || "",
        subject: modifyContactData?.subject || "",
        inquiry: modifyContactData?.Inquiry || "",
        message: modifyContactData?.message || "",
        captcha: modifyContactData?.captcha || ""
    }


    const validationSchema = Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().required("Email is required"),
        mobile: Yup.string().required("Mobile Number is required"),
        subject: Yup.string().required("Subject is required"),
        inquiry: Yup.string().required("Inquiry is required"),
        message: Yup.string().required("Message is required"),
        captcha: Yup.string()
            .required("Captcha is required")
            .test("captcha-match", "Invalid captcha", function (value) {
                return value === captchaCode;
            }),


    })

    const handleSubmit = (values) => {
        if (values.name === values.email) {
            toast.error("contact us form cannot be same");
            return;
        }

        const payload = {
            name: values.name,
            email: values.email,
            mobile: values.mobile,
            subject: values.subject,
            inquiry: values.inquiry,
            message: values.message,
        }
    }

    return (
        <>
            <div className="mt-12 flex items-center justify-center ">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ setFieldValue }) => (
                        <Form className="w-full max-w-[540px] bg-primary rounded-[9px] px-[30px] py-[32px] shadow-card">
                            <h2 className="text-center text-black text-[24px] font-bold mb-[24px]">
                                Book Your Car Now
                            </h2>

                            <div className="flex flex-wrap -mx-[15px]">
                                <div className="w-full md:w-1/2 px-[15px] mb-[15px]">
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="w-full h-[46px] bg-transparent border border-dark rounded-[4px] pl-[10px] pr-[42px] placeholder:text-g4 outline-none"
                                        />

                                    </div>
                                    <ErrorMessage
                                        name="name"
                                        component="span"
                                        className="text-red-500 text-[12px] mt-[4px] block"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 px-[15px] mb-[15px]">
                                    <div className="relative">
                                        <Field
                                            type="tel"
                                            name="email"
                                            placeholder="Email"
                                            className="w-full h-[46px] bg-transparent border border-dark rounded-[4px] pl-[10px] pr-[42px] text-[#555] placeholder:text-g4 outline-none"
                                        />
                                        {/* <Phone className="absolute right-[22px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#777]" /> */}
                                    </div>
                                    <ErrorMessage
                                        name="email"
                                        component="span"
                                        className="text-red-500 text-[12px] mt-[4px] block"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 px-[15px] mb-[15px]">
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            className="w-full h-[46px] bg-transparent border border-dark rounded-[4px] pl-[10px] pr-[42px] text-[#555] placeholder:text-g4 outline-none"
                                        />
                                        {/* <MapPin className="absolute right-[22px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#777]" /> */}
                                    </div>
                                    <ErrorMessage
                                        name="mobile"
                                        component="span"
                                        className="text-red-500 text-[12px] mt-[4px] block"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 px-[15px] mb-[15px]">
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            className="w-full h-[46px] bg-transparent border border-dark rounded-[4px] pl-[10px] pr-[42px] text-[#555] placeholder:text-g4 outline-none"
                                        />
                                        {/* <MapPin className="absolute right-[22px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#777]" /> */}
                                    </div>
                                    <ErrorMessage
                                        name="subject"
                                        component="span"
                                        className="text-red-500 text-[12px] mt-[4px] block"
                                    />
                                </div>





                                <div className="w-full px-[15px] mb-[15px]">
                                    <div className="relative">
                                        <Field
                                            as="textarea"
                                            name="inquiry"
                                            placeholder="Write a Message..."
                                            className="w-full h-[100px] bg-transparent border border-dark rounded-none pl-[10px] pr-[42px] pt-[18px] text-[#555] placeholder:text-g4 outline-none resize-y"
                                        />
                                        {/* <MessageSquare className="absolute right-[22px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#777]" /> */}
                                    </div>
                                    <ErrorMessage
                                        name="inquiry"
                                        component="span"
                                        className="text-red-500 text-[12px] mt-[4px] block"
                                    />
                                </div>



                                {/* captch code */}
                                <div className="w-full px-[15px] mb-[15px]">
                                    <div className="flex items-center mb-[10px]">
                                        <div className="h-[46px] min-w-[140px] bg-dark text-white flex items-center justify-center rounded-[4px] text-[20px] font-bold tracking-[4px] select-none">
                                            {captchaCode}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setCaptchaCode(generateCaptcha());
                                                setFieldValue("captcha", "");
                                            }}
                                            className="ml-[10px] h-[46px] px-[18px] bg-white text-dark rounded-[4px] font-bold"
                                        >
                                            ↻
                                        </button>
                                    </div>

                                    <Field
                                        type="text"
                                        name="captcha"
                                        placeholder="Enter Captcha"
                                        className="w-full h-[46px] bg-transparent border border-dark rounded-[4px] pl-[10px] pr-[10px] text-[#555] placeholder:text-g4 outline-none"
                                    />

                                    <ErrorMessage
                                        name="captcha"
                                        component="span"
                                        className="text-red-500 text-[12px] mt-[4px] block"
                                    />
                                </div>



                                <div className="w-full px-[15px]">
                                    <button
                                        type="submit"
                                        className="w-full h-[43px] bg-dark text-white text-[18px] font-bold rounded-[3px] uppercase"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default ContactUs
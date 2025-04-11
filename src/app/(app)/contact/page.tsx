"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/UI/Container";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "axios";
import { showErrorToast,showSuccessToast} from "@/utils/toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phone || formData.phone === undefined) {
      newErrors.phone = "Phone number is required.";
    } 
    // else if (!/^\+?[0-9\s\-]{7,15}$/.test(formData.phone)) {
    //   newErrors.phone = "Invalid phone number.";
    // }

    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/contact-us/`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
      );
      setLoading(false);
      showSuccessToast("Thank You for Reaching Out! your response submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error: any) {
      showErrorToast( error?.response?.data?.message || "OOPS! Something went wrong while purchasing plan");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-primary-light py-14 sm:py-20 px-3">
        <div data-aos="zoom-in" className="mx-auto  text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-secondary xl:text-7xl">
            {t("contactUs.title")}
          </h2>
          <p className="mt-4 md:mt-6 xl:mt-8 font-medium text-balance text-sm sm:text-base">
            {t("contactUs.description")}
          </p>
        </div>
      </div>
      <Container>
        <div className="bg-[#f5f5f5] p-5 my-10 rounded-xl">
          <div className="relative rounded-xl overflow-hidden isolate bg-white">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
              <div className="relative px-6 py-10 md:py-14 lg:static bg-primary-light">
                <div className="mx-auto max-w-xl lg:mx-0">
                  <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2" />
                  <h2
                    data-aos="fade-up"
                    className="text-pretty text-2xl font-semibold tracking-tight text-secondary  sm:text-3xl"
                  >
                    {t("contactUs.form.heading")}
                  </h2>
                  <p
                    data-aos="zoom-in"
                    className="mt-6 text-base md:text-lg/8 text-secondary"
                  >
                    {t("contactUs.form.description")}
                  </p>
                  <dl className="mt-10 space-y-4 text-base/7 text-secondary">
                    <div data-aos="zoom-in" className="flex ">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                      </dt>
                      <dd>
                        545 Mavis Island
                        <br />
                        Chicago, IL 99191
                      </dd>
                    </div>
                    <div className="flex" data-aos="zoom-in">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                      </dt>
                      <dd>
                        <a
                          href="tel:+1 (555) 234-5678"
                          className="hover:text-secondary"
                        >
                          +1 (555) 234-5678
                        </a>
                      </dd>
                    </div>
                    <div className="flex" data-aos="zoom-in">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                      </dt>
                      <dd>
                        <a
                          href="mailto:hello@example.com"
                          className="hover:text-secondary"
                        >
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="px-6 py-10  md:py-14">
                <div className="mx-auto max-w-xl  lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div data-aos="fade-up">
                      <label
                        htmlFor="firstName"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.firstName.label")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div data-aos="fade-up">
                      <label
                        htmlFor="lastName"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.lastName.label")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2" data-aos="fade-up">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.email.label")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2" data-aos="fade-up">
                      <label
                        htmlFor="phone"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.phoneNumber.label")}
                      </label>
                      <div className="mt-2.5">
                        <PhoneInput
                          placeholder="Enter your mobile number"
                          value={formData.phone}
                          defaultCountry={"KW"}
                          onChange={(e)=>handleChange({target:{name:"phone",value:e}})}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2" data-aos="fade-up">
                      <label
                        htmlFor="message"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.message.label")}
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="mt-8 flex justify-end">
                    <PrimaryButton type="submit">
                      {t("contactUs.form.submit")}
                    </PrimaryButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

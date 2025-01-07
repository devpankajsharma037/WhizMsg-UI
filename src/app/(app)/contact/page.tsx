"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/UI/Container";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
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
              <form action="#" method="POST" className="px-6 py-10  md:py-14">
                <div className="mx-auto max-w-xl  lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div data-aos="fade-up">
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.firstName.label")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                      </div>
                    </div>
                    <div data-aos="fade-up">
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.lastName.label")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
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
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2" data-aos="fade-up">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm/6 font-semibold text-secondary"
                      >
                        {t("contactUs.form.phoneNumber.label")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="phone-number"
                          name="phone-number"
                          type="tel"
                          autoComplete="tel"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#02914c]"
                        />
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
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="mt-8 flex justify-end">
                    <PrimaryButton>{t("contactUs.form.submit")}</PrimaryButton>
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

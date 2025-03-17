"use client";

import React from "react";
import { CheckIcon } from "@/assets/icons";
import Container from "@/components/UI/Container";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Cookies from "js-cookie";

export default function Pricing() {
  const { t } = useTranslation();

  const pricingTier = t("pricing.tiers", { returnObjects: true });

  const purchasePlan = async (id: string) => {
    const token = Cookies.get("access_token");

    if (!token) {
      console.error("Access token is missing");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v3/checkout/`,
        { plan_id: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = response?.data?.checkout_url;
      // Handle success (e.g., redirect, show message, etc.)
    } catch (error: any) {
      console.error(
        "Checkout failed:",
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <Container>
      <div className="mt-10 px-6 sm:mt-16 lg:px-8">
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-base/7 font-semibold text-secondary">
            {t("bannerSection.tagline")}
          </h1>
          <p className="mt-2 text-secondary text-5xl font-semibold tracking-tight text-secondary sm:text-6xl">
            {t("pricing.tagline")}
          </p>
        </div>
        <p
          data-aos="fade-up"
          className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-primary sm:text-xl/8"
        >
          {t("pricing.find")}
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div
              data-aos="zoom-in-up"
              className="w-52 rounded-full p-1 text-center font-semibold ring-1 ring-inset ring-[#3f4e41] transition-all duration-300"
            >
              <div className="cursor-pointer rounded-full px-4 py-2 text-secondary">
                {t("pricing.pricing")}
              </div>
            </div>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 gap-8 max-w-[400px] justify-center">
          {pricingTier &&
            Array.isArray(pricingTier) &&
            pricingTier.map((tier: any) => (
              <div
                data-aos="zoom-in"
                key={tier.id}
                className="group shadow-lg rounded-3xl p-8 transition-all duration-300 ring-2 ring-[#3f4e41] hover:ring-[#02914c] hover:bg-[#02914c] hover:scale-105 hover:text-white"
              >
                <h2
                  id={tier.id}
                  className="text-2xl font-semibold group-hover:text-white text-gray-900"
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm/6 group-hover:text-white text-gray-600">
                  {tier.description}
                </p>

                <button
                  onClick={() => purchasePlan(tier.id)}
                  className={`mt-6 block rounded-md px-3 py-2 w-full text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    border border-[#3f4e41] text-[#3f4e41] shadow-sm group-hover:bg-[#3f4e41] group-hover:text-white
                `}
                >
                  {t("pricing.buyPlan")}
                </button>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 group-hover:text-white text-gray-600"
                >
                  {tier.features.map((feature: any) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* <div className="mt-8 md:mt-12 xl:mt-16 space-y-8 md:space-y-12 xl:space-y-16 w-full overflow-x-auto">
      
        {tableSections.map((section) => (
          <div
            key={section.name}
            className="space-y-2 md:space-y-4 xl:space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {section.name}
            </h3>
            <table className="relative w-full border-separate border-spacing-x-8">
              <thead>
                <tr className="text-left ">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {section.features.map((feature: any) => (
                  <tr key={feature.name} className="my-5">
                    <th
                      scope="row"
                      className="w-1/4 py-3 pr-4 text-left text-sm font-normal text-gray-900"
                    >
                      {feature.name}
                    </th>
                    {tiers.map((tier) => (
                      <td
                        key={tier.id}
                        className="relative w-1/4 px-4 py-0  text-center"
                      >
                        <span className="relative  py-3  bg-none  md:bg-[#DCF6D45E] rounded-xl my-3 flex justify-center  w-full">
                          {feature.tiers[tier.name] === "string" ? (
                            <span className={` text-sm`}>
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <span className="text-secondary">
                                  <CheckIcon />
                                </span>
                              ) : (
                                <span className="text-secondary">
                                  <CrossIcon />
                                </span>
                              )}
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div> */}
    </Container>
  );
}

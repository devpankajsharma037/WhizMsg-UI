"use client";

import React, { useState } from "react";
import { CheckIcon } from "@/assets/icons";
import Container from "@/components/UI/Container";
import { useTranslation } from "react-i18next";
import SubscriptionModal from "@/components/UI/SubscriptionModal";

export default function Pricing() {
  const { t } = useTranslation();

  const pricingTier = t("pricing.tiers", { returnObjects: true });

  const [pricingTiers, setPricingTiers] = useState<any>("");
  const [openModal, setOpenModal] = useState(false);

  const purchasePlan = () => {
    setOpenModal(true);
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
        <SubscriptionModal open={openModal} onOpenChange={setOpenModal} />
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

                {pricingTiers?.data?.is_active ? (
                  <button
                    onClick={purchasePlan}
                    className={`mt-6 block rounded-md px-3 py-2 w-full text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    border border-[#3f4e41] text-[#3f4e41] shadow-sm group-hover:bg-[#3f4e41] group-hover:text-white
                `}
                  >
                    {t("pricing.managePlan")}
                  </button>
                ) : (
                  <button
                    onClick={purchasePlan}
                    className={`mt-6 block rounded-md px-3 py-2 w-full text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    border border-[#3f4e41] text-[#3f4e41] shadow-sm group-hover:bg-[#3f4e41] group-hover:text-white
                `}
                  >
                    {t("pricing.buyPlan")}
                  </button>
                )}
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
    </Container>
  );
}

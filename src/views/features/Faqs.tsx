"use client";

import { NextIcon } from "@/assets/icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";

export default function FaqsSection() {
  const { t } = useTranslation();

  const whizmsgFAQs = [
    {
      question: t("whizmsgFAQs.1.question"),
      description: t("whizmsgFAQs.1.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.2.question"),
      description: t("whizmsgFAQs.2.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.3.question"),
      description: t("whizmsgFAQs.3.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.4.question"),
      description: t("whizmsgFAQs.4.description"),
      type: "Account",
    },
    {
      question: t("whizmsgFAQs.5.question"),
      description: t("whizmsgFAQs.5.description"),
      type: "Others",
    },
  ];

  return (
    <div className="bg-white">
      <div data-aos="fade-right" className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-secondary font-plus font-semibold xl:leading-[60px] text-2xl md:text-3xl xl:text-4xl my-2 mb-5">
            {t("faqSection.title")}
          </h2>
          <p className="font-poppins font-medium leading-7 text-sm text-secondary">
            {t("faqSection.description")}{" "}
            <a
              href="#"
              className="font-semibold text-base xl:text-lg text-[#02914c]"
            >
              {t("faqSection.customerSupport")}
            </a>
            .
          </p>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className=" space-y-6 divide-y divide-gray-900/10">
            {whizmsgFAQs?.map(
              (faq: { question: string; description: string }, i) =>
                i < 6 && (
                  <Disclosure
                    data-aos="fade-left"
                    key={faq.question}
                    as="div"
                    className="pt-6"
                  >
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-secondary">
                        <span className="text-base/7 font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <div className="size-6 group-data-[open]:hidden">
                            <NextIcon />
                          </div>
                          <div className="size-6 group-[&:not([data-open])]:hidden transform rotate-90 transition-transform duration-300 ease-in-out">
                            <NextIcon />
                          </div>
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-sm sm:text-base text-secondary">
                        {faq.description}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                )
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}

"use client";

import { NextIcon } from "@/assets/icons";
import Container from "@/components/UI/Container";
import { whizMsgFAQType } from "@/mock/faq";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const [faqType, setFaqsType] = useState("All");

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
    {
      question: t("whizmsgFAQs.6.question"),
      description: t("whizmsgFAQs.6.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.7.question"),
      description: t("whizmsgFAQs.7.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.8.question"),
      description: t("whizmsgFAQs.8.description"),
      type: "Broadcasting",
    },
    {
      question: t("whizmsgFAQs.9.question"),
      description: t("whizmsgFAQs.9.description"),
      type: "Broadcasting",
    },
    {
      question: t("whizmsgFAQs.10.question"),
      description: t("whizmsgFAQs.10.description"),
      type: "Account",
    },
    {
      question: t("whizmsgFAQs.11.question"),
      description: t("whizmsgFAQs.11.description"),
      type: "Broadcasting",
    },
    {
      question: t("whizmsgFAQs.12.question"),
      description: t("whizmsgFAQs.12.description"),
      type: "Account",
    },
    {
      question: t("whizmsgFAQs.13.question"),
      description: t("whizmsgFAQs.13.description"),
      type: "Account",
    },
    {
      question: t("whizmsgFAQs.14.question"),
      description: t("whizmsgFAQs.14.description"),
      type: "Payments",
    },
    {
      question: t("whizmsgFAQs.15.question"),
      description: t("whizmsgFAQs.15.description"),
      type: "Payments",
    },
    {
      question: t("whizmsgFAQs.16.question"),
      description: t("whizmsgFAQs.16.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.17.question"),
      description: t("whizmsgFAQs.17.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.18.question"),
      description: t("whizmsgFAQs.18.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.19.question"),
      description: t("whizmsgFAQs.19.description"),
      type: "Account",
    },
    {
      question: t("whizmsgFAQs.20.question"),
      description: t("whizmsgFAQs.20.description"),
      type: "Returns",
    },
    {
      question: t("whizmsgFAQs.21.question"),
      description: t("whizmsgFAQs.21.description"),
      type: "Broadcasting",
    },
    {
      question: t("whizmsgFAQs.22.question"),
      description: t("whizmsgFAQs.22.description"),
      type: "Others",
    },
    {
      question: t("whizmsgFAQs.23.question"),
      description: t("whizmsgFAQs.23.description"),
      type: "Returns",
    },
    {
      question: t("whizmsgFAQs.24.question"),
      description: t("whizmsgFAQs.24.description"),
      type: "Others",
    },
  ];

  const filteredFaqs = whizmsgFAQs?.filter((elm) => {
    if (faqType === "All") {
      return whizmsgFAQs;
    } else {
      return elm?.type.toLowerCase() === faqType.toLowerCase();
    }
  });

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-primary-light py-14 sm:py-20 px-3">
        <div data-aos="zoom-in" className="mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-secondary xl:text-7xl">
            {t("helpSection.title")}
          </h2>
          <p className="mt-4 md:mt-6 xl:mt-8 font-medium text-balance text-sm sm:text-base">
            {t("helpSection.description")}
          </p>
          <div className="mt-5 grid grid-cols-1 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder={t("helpSection.placeholder")}
              className="rounded-md outline-none bg-white w-full py-2 pr-3 text-base text-gray-900 placeholder:text-gray-400 pl-4 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <Container>
        <div
          data-aos="fade-up"
          className="flex flex-wrap gap-5 justify-center mx-auto my-5 md:my-7 xl:my-10 max-w-[500px]"
        >
          {whizMsgFAQType.map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setFaqsType(tab)}
                className={`rounded-md px-3 py-2 text-lg  font-medium ${
                  faqType === tab ? "text-primary" : ""
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="max-w-[800px] mx-auto">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {filteredFaqs?.map(
              (faq: { question: string; description: string }) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  <dt data-aos="zoom-in-up">
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
      </Container>
    </div>
  );
}

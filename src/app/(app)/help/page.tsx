"use client";

import { NextIcon } from "@/assets/icons";
import Container from "@/components/UI/Container";
import { whizmsgFAQs, whizMsgFAQType } from "@/mock/faq";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";

export default function HomePage() {
  const [faqType, setFaqsType] = useState("All");

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
        <div data-aos="zoom-in" className="mx-auto  text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-secondary xl:text-7xl">
            Help
          </h2>
          <p className="mt-4 md:mt-6 xl:mt-8 font-medium text-balance text-sm sm:text-base">
            Have any questions? We’re here to assist you.
          </p>
          <div className="mt-5 grid grid-cols-1 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search"
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

"use client";

import React, { useState } from "react";
import { pricing, tableSections, tiers } from "../../../mock/pricing";
import { CheckIcon } from "@/assets/icons";
import Container from "@/components/UI/Container";
import { Radio, RadioGroup } from "@headlessui/react";

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);
  return (
    <Container>
      <div className="mt-10 px-6 sm:mt-16 lg:px-8">
        <div className=" text-center">
          <h1 className="text-base/7 font-semibold text-secondary">
            #Best WhatsApp Chrome Extension
          </h1>
          <p className="mt-2 text-secondary text-5xl font-semibold tracking-tight text-secondary sm:text-6xl">
            Perfect plans for your{" "}
            <span className="text-primary">Business</span>
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-primary sm:text-xl/8">
          Find the subscription that makes the most sense for you or your team
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-3 gap-4 rounded-full p-1  text-center font-semibold ring-1 ring-inset ring-[#3f4e41] transition-all duration-300"
            >
              {pricing.frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-4 py-2  text-secondary transition-all duration-300 ease-in-out transform hover:scale-105 data-[checked]:bg-[#3f4e41] data-[checked]:text-white data-[checked]:shadow-md"
                >
                  <span className="text-lg">{option.label}</span>
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`group shadow-lg rounded-3xl p-8 transition-all duration-300 ring-2 ring-[#3f4e41] hover:ring-[#02914c] hover:bg-[#02914c] hover:scale-105 hover:text-white`}
            >
              <h2
                id={tier.id}
                className={`text-2xl font-semibold group-hover:text-white text-gray-900`}
              >
                {tier.name}
              </h2>
              <p className="mt-4 text-sm/6 group-hover:text-white text-gray-600">
                {tier.description}
              </p>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            border border-[#3f4e41] text-[#3f4e41] shadow-sm group-hover:bg-[#3f4e41] group-hover:text-white
        `}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 group-hover:text-white text-gray-600"
              >
                {tier.features.map((feature) => (
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
      <div className="-mt-6 space-y-16">
        {tableSections.map((section) => (
          <div key={section.name} className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {section.name}
            </h3>
            <div className="relative -mx-8 mt-10">
              {/* Fake card backgrounds */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
              >
                {tiers.map((_, index) => (
                  <div
                    key={index}
                    className="size-full rounded-lg bg-white shadow-sm"
                  />
                ))}
              </div>

              <table className="relative w-full border-separate border-spacing-x-8">
                <thead>
                  <tr className="text-left border-b-2 border-gray-300">
                    <th scope="col">
                      <span className="sr-only">Feature</span>
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.id}
                        scope="col"
                        className="text-sm font-semibold text-gray-600"
                      >
                        <span className="block mt-2">{tier.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {section.features.map((feature, featureIdx) => (
                    <tr key={feature.name} className="hover:bg-gray-50">
                      <th
                        scope="row"
                        className="w-1/4 py-3 pr-4 text-left text-sm font-normal text-gray-900"
                      >
                        {feature.name}
                        {featureIdx !== section.features.length - 1 ? (
                          <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                        ) : null}
                      </th>
                      {tiers.map((tier) => (
                        <td
                          key={tier.id}
                          className="relative w-1/4 px-4 py-0 text-center"
                        >
                          <span className="relative size-full py-3">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span
                                className={`${
                                  tier.featured
                                    ? "font-semibold text-indigo-600"
                                    : "text-gray-900"
                                } text-sm`}
                              >
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-indigo-600"
                                  />
                                ) : (
                                  <span className="text-gray-400">✘</span>
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Fake card borders */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
              >
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="ring-1 ring-gray-900/10 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

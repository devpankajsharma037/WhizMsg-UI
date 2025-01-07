"use client";

import Container from "@/components/UI/Container";
import { useTranslation } from "react-i18next";

export default function WhyWhizMsg() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-primary-light py-14 sm:py-20 px-3">
        <div data-aos="zoom-in" className="mx-auto  text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-secondary xl:text-7xl">
            {t("whyWhizMsg.title")}
          </h2>
          <p className="mt-4 md:mt-6 xl:mt-8 font-medium text-balance text-sm sm:text-base">
            {t("whyWhizMsg.description")}
          </p>
        </div>
      </div>
      <Container>
        <div className="py-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 justify-between">
            <div className="lg:col-span-5">
              <h2 className="text-pretty text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-5xl">
                <p className="mb-3 bg-gradient-to-r from-[#c4f2b7] max-w-fit  rounded-md p-2">
                  {t("whyWhizMsg.reasons.title")}
                </p>
                {t("whyWhizMsg.reasons.secondTitle")}
              </h2>
              <p className="mt-4 text-pretty text-base/7 text-gray-600">
                {t("whyWhizMsg.reasons.description")}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  customer support
                </a>
              </p>
            </div>
            <div className="mt-10 lg:col-start-6 col-end-13 lg:mt-0">
              <div className="flex flex-col gap-16">
                <div className="mb-12">
                  <div className="lg:w-[70%]">
                    <p className="text-secondary max-w-fit p-2 rounded-md font-semibold text-[40px] font-poppins  bg-gradient-to-r from-[#c4f2b7]">
                      01
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-secondary leading-normal sm:leading-normal lg:leading-normal font-poppins font-medium">
                      {t("whyWhizMsg.reasons.1.title")}
                    </h2>
                    <p className="mt-4 text-secondary font-poppins text-base sm:text-xl leading-loose font-normal">
                      {t("whyWhizMsg.reasons.1.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

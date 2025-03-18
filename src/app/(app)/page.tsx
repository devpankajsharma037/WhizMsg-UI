"use client";

// custom imports
import Container from "@/components/UI/Container";
import BannerSection from "@/views/features/BannerSection";
import CustomerReview from "@/views/features/CustomerReview";
import FaqsSection from "@/views/features/Faqs";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: t("features.1.title"),
      status: t("features.1.status"),
      icon: "⚡",
      description: t("features.1.description"),
    },
    {
      id: 2,
      title: t("features.2.title"),
      status: t("features.2.status"),
      icon: "👌",
      description: t("features.2.description"),
    },
    {
      id: 3,
      title: t("features.3.title"),
      status: t("features.3.status"),
      icon: "🔒",
      description: t("features.3.description"),
    },
    {
      id: 4,
      title: t("features.4.title"),
      status: t("features.4.status"),
      icon: "⏳",
      description: t("features.4.description"),
    },
    {
      id: 5,
      title: t("features.5.title"),
      status: t("features.5.status"),
      icon: "📋",
      description: t("features.5.description"),
    },
    {
      id: 6,
      title: t("features.6.title"),
      status: t("features.6.status"),
      icon: "📣",
      description: t("features.6.description"),
    },
    {
      id: 7,
      title: t("features.7.title"),
      status: t("features.7.status"),
      icon: "⚡",
      description: t("features.7.description"),
    },
    {
      id: 8,
      title: t("features.8.title"),
      status: t("features.8.status"),
      icon: "📂",
      description: t("features.8.description"),
    },
  ];

  return (
    <div className="">
      <BannerSection />
      {/* <div className=" py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-secondary">
            Deploy faster
          </h2>
          <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-secondary sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-[#f5f5f5] ring-1 w-full ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <div className="p-10">
                  <h3 className="text-secondary font-semibold text-2xl font-plus mb-2">
                    Workflows
                  </h3>
                  <p className="text-third text-sm font-medium text-secondary mb-4">
                    Automate your WhatsApp chats with workflow automation,
                    enabling automatic replies, labeling, and other enhancements
                    for better customer interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg w-full bg-[#f5f5f5] ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Integrations
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Connect your favorite tools
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Curabitur auctor, ex quis auctor venenatis, eros arcu
                    rhoncus massa.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden w-full rounded-lg bg-[#f5f5f5] ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Security
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Advanced access control
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden w-full rounded-lg bg-[#f5f5f5] ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Performance
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Lightning-fast builds
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Sed congue eros non finibus molestie. Vestibulum euismod
                    augue vel commodo vulputate. Maecenas at augue sed elit
                    dictum vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        data-aos="fade-up"
        className="flex justify-center items-center bg-[#F5F5F5]"
      >
        <Container>
          <section className="pt-10 md:pt-14 px-3">
            <div className="mx-auto text-center">
              <p className="text-primary font-medium text-left font-poppins">
                {t("bannerSection.newContent.introTagline")}
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-secondary font-plus font-semibold xl:leading-[60px] text-2xl md:text-3xl xl:text-4xl mt-2 mb-1">
              {t("bannerSection.newContent.introHeading")}
            </h2>
          </section>
          <section>
            <p className="font-poppins font-medium leading-7 text-sm text-secondary">
              {t("bannerSection.newContent.introDescription")}
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 my-10 sm:my-12 gap-5">
            {features?.map((elm) => {
              return (
                <div
                  className="group transition-all"
                  key={elm?.id}
                  data-aos="zoom-in" // Add AOS animation here
                >
                  <div className="w-full bg-white rounded-[20px] px-3 hover:shadow-[6px_4px_14px_1px_#dcdcdc] scale-1 hover:scale-[1.025] overflow-hidden group-hover:bg-[#02914c] group-hover:text-white">
                    <button
                      type="button"
                      className="items-center w-full py-4 border-b-blue-gray-100 text-left select-none text-secondary border-b-0 flex flex-row justify-start text-lg font-bold pb-2 leading-9"
                    >
                      <h3 className="flex flex-col sm:flex-row sm:items-center group-hover:text-white text-base md:text-xl">
                        <p className="whitespace-nowrap font-bold mr-1">
                          {elm?.id}
                        </p>
                        <div className="flex items-center">
                          <p className="font-extrabold">{elm?.title}</p>
                          <span className="font-normal text-primary items-center text-xs sm:text-sm ml-2 group-hover:text-white">
                            {elm?.status}
                          </span>
                          <span className="text-secondary text-base sm:text-lg block xs:inline font-medium ml-1">
                            {elm?.icon}
                          </span>
                        </div>
                      </h3>
                    </button>
                    <div
                      className="overflow-hidden group-hover:bg-[#02914c] group-hover:text-white"
                      style={{ height: "auto" }}
                    >
                      <div className="block w-full py-4 text-secondary font-sans text-sm font-medium pl-10 pt-0 pb-4 pr-3 group-hover:text-white">
                        {elm?.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </Container>
      </div>
      <Container>
        <div id="testimonials" className="my-8 sm:my-10">
          <CustomerReview />
        </div>
        <div className="my-8 sm:my-10">
          <FaqsSection />
        </div>
      </Container>
    </div>
  );
}

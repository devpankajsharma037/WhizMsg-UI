"use client";

import { useTranslation } from "react-i18next";
import { ArrowUpRight, ChargeIcon } from "@/assets/icons";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/UI/Container";

const BannerSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary-light">
      <Container>
        <div className="py-14 sm:py-20 px-3">
          <div className="mx-auto text-center">
            <div data-aos="fade-up">
              <p className="text-secondary font-medium text-center font-poppins">
                {t("bannerSection.tagline")}
              </p>

              <h2 className="text-[26px] sm:text-[35px] md:text-[40px] xl:text-[52px] font-bold sm:font-semibold font-plus text-center mb-4 text-black">
                {t("bannerSection.heading")}
              </h2>
              <p className="max-w-[960px] mx-auto text-secondary mt-6 text-indigo-200">
                {t("bannerSection.description")}
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="flex items-center justify-center flex-col sm:flex-row gap-5 pt-8"
            >
              <PrimaryButton extraCss="px-5 flex items-center gap-2 font-semibold">
                <ChargeIcon />
                {t("bannerSection.installButton.label")}
              </PrimaryButton>
              <button className="font-medium flex items-center gap-2 py-3 px-6 rounded-[8px] font-poppins h-fit scale-1 hover:scale-[1.025] transition-all duration-300 text-primary bg-white bg-opacity-60 hover:bg-[#02914c] hover:text-white">
                {t("bannerSection.seeAllFeaturesButton.label")} <ArrowUpRight />
              </button>
            </div>
            {/* Uncomment and refactor as needed */}
            {/* <div className="flex md:justify-end items-center md:items-start flex-col md:flex-row w-full gap-4 pb-8">
              <section>
                <div style={{ transform: "none", height: "100%" }}>
                  <div className="bg-white bg-opacity-70 rounded-[30px] py-4 px-8 mx-3 w-fit">
                    <p className="font-medium text-xl text-primary font-plus">
                      {t("bannerSection.exportSection.heading")}
                    </p>
                    <div className="pl-3">
                      <div className="flex gap-2 items-center mt-2 font-plus cursor-pointer">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          style={{
                            color: "transparent",
                            width: "20px",
                            height: "20px",
                          }}
                          src="/assets/chat.svg"
                        />
                        <p className="text-lg font-medium text-primary hover:text-secondary">
                          {t("bannerSection.exportSection.options.fromChats")}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2 font-plus cursor-pointer">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          style={{
                            color: "transparent",
                            width: "20px",
                            height: "20px",
                          }}
                          src="/assets/group.svg"
                        />
                        <p className="text-lg font-medium text-primary hover:text-secondary">
                          {t("bannerSection.exportSection.options.fromGroups")}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2 font-plus cursor-pointer">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          style={{
                            color: "transparent",
                            width: "20px",
                            height: "20px",
                          }}
                          src="/assets/label.svg"
                        />
                        <p className="text-lg font-medium text-primary hover:text-secondary">
                          {t("bannerSection.exportSection.options.fromLabels")}
                        </p>
                      </div>
                      <div className="mt-2 font-plus text-primary text-lg">
                        {t("bannerSection.exportSection.options.allSavedAndUnsaved")}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="max-w-[400px] px-3 sm:p-0">
                <div className="flex flex-wrap gap-2">
                  {t("bannerSection.features", { returnObjects: true }).map((text: string) => (
                    <section key={text}>
                      <div style={{ transform: "none", height: "100%" }}>
                        <CustomButton text={text} />
                      </div>
                    </section>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {t("bannerSection.integrations", { returnObjects: true }).map(
                    ({ label, icon }: { label: string; icon: string | null }) => (
                      <section key={label}>
                        <div style={{ transform: "none", height: "100%" }}>
                          <div className="flex items-center gap-2 bg-white py-1 px-2 rounded-md scale-1 hover:scale-[1.025] cursor-pointer transition-all">
                            {icon && (
                              <img
                                alt="logo"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                style={{
                                  color: "transparent",
                                  width: "16px",
                                  height: "16px",
                                }}
                                src={icon}
                              />
                            )}
                            <p className="text-[#1D1D21] hover:text-secondary font-semibold font-plus">
                              {label}
                            </p>
                          </div>
                        </div>
                      </section>
                    )
                  )}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;

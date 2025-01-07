"use client";

import React from "react";
import { StarIcon } from "@/assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const CustomerReview = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      rating: 5,
      content: t("reviews.1.content"),
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: t("reviews.1.author"),
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: t("reviews.2.content"),
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: t("reviews.2.author"),
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 3,
      rating: 5,
      content: t("reviews.3.content"),
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: t("reviews.3.author"),
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 4,
      rating: 5,
      content: t("reviews.4.content"),
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: t("reviews.4.author"),
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ];
  return (
    <div data-aos="fade-up" className="">
      <h2 className="text-secondary font-plus font-semibold xl:leading-[60px] text-2xl md:text-3xl xl:text-4xl my-2 mb-5">
        What our Clients say
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-full">
            <div className="flex flex-col justify-between bg-[#DCF6D4] h-[150px] md:min-h-full rounded-md p-4 hover:shadow-[6px_4px_14px_1px_#dcdcdc] scale-1 hover:scale-[1.025] transition-all">
              <div className="flex space-x-4 text-sm">
                <div className="flex-none">
                  <img
                    alt=""
                    src={review.avatarSrc}
                    className="size-10 rounded-full bg-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>
                </div>
                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon key={rating} />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: review.content }}
                className="mt-4 text-sm/6 text-gray-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;

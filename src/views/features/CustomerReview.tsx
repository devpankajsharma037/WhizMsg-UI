"use client";

import React from "react";
import { StarIcon } from "@/assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviews } from "@/mock/home";
import { Autoplay } from "swiper/modules";

const CustomerReview = () => {
  return (
    <div className="">
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
            <div className="flex flex-col bg-[#DCF6D4] h-[200px] md:min-h-full rounded-md p-4 hover:shadow-[6px_4px_14px_1px_#dcdcdc] scale-1 hover:scale-[1.025] transition-all">
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
                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon key={rating} />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>
                </div>
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

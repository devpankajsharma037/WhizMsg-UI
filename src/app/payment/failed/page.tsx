"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          className="crossmark addClass animateElement"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 55 55"
        >
          <circle
            className="crossmark__circle addClass animateElement"
            cx="27.5"
            cy="27.5"
            r="21"
            fill="none"
          />
          <path
            className="cross__path cross__path--right addClass animateElement"
            fill="none"
            d="M17,17 l20,20"
          />
          <path
            className="cross__path cross__path--left addClass animateElement"
            fill="none"
            d="M17,37 l20,-20"
          />
        </svg>
      </div>
      <div className="text-center">
        <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
          Payment Failed!
        </h3>
        <p className="secondary-text my-2">
          Oops! Something went wrong during payment. Please try again.
        </p>
        <div className="mx-auto max-w-fit py-10">
          <PrimaryButton>
            <Link href={"/"}>Go Back</Link>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

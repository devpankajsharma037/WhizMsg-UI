"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <div className="checkbox-wrapper animate min-w-fit">
          <input type="checkbox" />
          <svg viewBox="0 0 35.6 35.6">
            <circle
              className="background"
              cx="17.8"
              cy="17.8"
              r="17.8"
            ></circle>
            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
            <polyline
              className="check"
              points="11.78 18.12 15.55 22.23 25.17 12.87"
            ></polyline>
          </svg>
        </div>

        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            {`You're In!`} 🎉
          </h3>
          <p className="secondary-text my-2">
            Your free trial is live, and your login details are being sent to
            your inbox. 🚀
          </p>
          <div className="mx-auto max-w-fit py-10">
            <PrimaryButton>
              <Link href={"/"}>Go To Dashboard</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

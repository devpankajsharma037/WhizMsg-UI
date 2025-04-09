"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/UI/Loader";

export default function PaymentSuccess() {
  const { user } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const data: Record<string, string> = {};

    params.forEach((value, key) => {
      data[key] = value;
    });

    const sendCallback = async () => {
      if (!user?.accessToken) {
        console.warn("No auth token found.");
        return;
      }

      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/v4/callback/`,
          data,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Callback successful:", response.data);
        setLoading(false);
      } catch (error: any) {
        router.push("/payment/failed");
        return;
      } finally {
        setLoading(false);
      }
    };

    if (Object.keys(data).length && user?.accessToken) {
      sendCallback();
    }
  }, [user?.accessToken]);

  return (
    <div className="h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="bg-white p-6 md:mx-auto">
          <div className="checkbox-wrapper animate min-w-fit">
            <input type="checkbox" />
            <svg viewBox="0 0 35.6 35.6">
              <circle className="background" cx="17.8" cy="17.8" r="17.8" />
              <circle className="stroke" cx="17.8" cy="17.8" r="14.37" />
              <polyline
                className="check"
                points="11.78 18.12 15.55 22.23 25.17 12.87"
              />
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
      )}
    </div>
  );
}

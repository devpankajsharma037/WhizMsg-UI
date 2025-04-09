import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CreditCard, Calendar, CheckCircle2 } from "lucide-react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Loader } from "./Loader";

interface SubscriptionFormProps {
  onSubmit: (formData: {
    name: string;
    mobile: string;
    paymentMethod: string;
    duration: string;
  }) => void;
  onClose: () => void;
  loading: boolean;
}

const SubscriptionForm = ({
  onSubmit,
  onClose,
  loading,
}: SubscriptionFormProps) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("debit");
  const [duration, setDuration] = useState("90");
  const [errors, setErrors] = useState({ name: "", mobile: "" });

  const validateForm = () => {
    const newErrors = { name: "", mobile: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, mobile, paymentMethod, duration });
    }
  };

  const paymentMethods = [
    {
      value: "debit",
      label: "Debit Card",
      icon: <CreditCard className="h-4 w-4 mr-2 text-[#02914c]" />,
    },
    {
      value: "credit",
      label: "Credit Card",
      icon: <CreditCard className="h-4 w-4 mr-2 text-[#02914c]" />,
    },
  ];

  const durations = [
    {
      value: "90",
      label: "3 Months",
      price: "14.900 KWD/Monthly",
      icon: <Calendar className="h-4 w-4 mr-2 text-[#02914c]" />,
      color: "text-[#02914c]",
    },
    {
      value: "365",
      label: "1 Year",
      price: "3.75 KWD/Monthly",
      icon: <Calendar className="h-4 w-4 mr-2 text-[#02914c]" />,
      color: "text-[#02914c]",
    },
  ];

  return (
    <div className="w-full max-w-[500px] mx-auto bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Subscribe Now</h2>
        <p className="text-secondary text-sm">Complete your details below</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-secondary">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              errors.name
                ? "border-red-500 ring-red-200"
                : "border-gray-300 focus:ring-indigo-200"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="mobile"
            className="text-sm font-medium text-secondary"
          >
            Mobile Number
          </label>
          <input
            id="mobile"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your 10-digit mobile number"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              errors.mobile
                ? "border-red-500 ring-red-200"
                : "border-gray-300 focus:ring-indigo-200"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-secondary">
            Payment Method
          </label>
          <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <RadioGroup.Option
                  key={method.value}
                  value={method.value}
                  className={({ checked }) =>
                    `flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                      checked
                        ? "bg-slate-100 border-[#c4f2b7]"
                        : "hover:bg-slate-50"
                    }`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex items-center">
                        {method.icon}
                        <span>{method.label}</span>
                      </div>
                      {checked && (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-secondary">
            Subscription Duration
          </label>
          <RadioGroup value={duration} onChange={setDuration}>
            <div className="space-y-2">
              {durations.map((d) => (
                <RadioGroup.Option
                  key={d.value}
                  value={d.value}
                  className={({ checked }) =>
                    `flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                      checked
                        ? "bg-slate-100 border-[#c4f2b7]"
                        : "hover:bg-slate-50"
                    }`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex items-center">
                        {d.icon}
                        <span>{d.label}</span>
                      </div>
                      <span className={`text-sm font-medium ${d.color}`}>
                        {d.price}
                      </span>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <PrimaryButton
          disabled={loading}
          type="submit"
          extraCss="w-full text-center"
        >
          {loading ? (
            <span className="flex justify-center">
              <Loader />
            </span>
          ) : (
            "Subscribe"
          )}
        </PrimaryButton>
      </form>
    </div>
  );
};

export default SubscriptionForm;

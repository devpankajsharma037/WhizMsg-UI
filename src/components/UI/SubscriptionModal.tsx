import React, { useState } from "react";
import SubscriptionForm from "./SubscriptionForm";
import CustomModal from "./CustomModal";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { showErrorToast } from "@/utils/toast";

interface SubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SubscriptionModal = ({ open, onOpenChange }: SubscriptionModalProps) => {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: {
    name: string;
    mobile: string;
    paymentMethod: string;
    duration: string;
  }) => {
    const token = user?.accessToken;

    if (!token) {
      showErrorToast("Please login first!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v4/checkout/`,
        {
          cust_name: formData.name,
          cust_mobile: formData.mobile,
          payment_type: formData.paymentMethod,
          days: Number.parseInt(formData.duration),
          amount: formData.duration === "90" ? "4.99" : "3.75",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = response?.data?.checkout_url;
      setLoading(false);
    } catch (error: any) {
      console.error("Checkout failed:", error.response.data.message);
      showErrorToast(
        error?.response?.data?.message ||
          "OOPS! Something went wrong while purchasing plan"
      );
      setLoading(false);
    }
  };

  return (
    <CustomModal open={open} setOpen={onOpenChange}>
      <SubscriptionForm
        onSubmit={handleSubmit}
        onClose={() => onOpenChange(false)}
        loading={loading}
      />
    </CustomModal>
  );
};

export default SubscriptionModal;

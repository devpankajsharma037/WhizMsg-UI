import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import PrimaryButton from "../buttons/PrimaryButton";
import CustomModal from "../UI/CustomModal";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

type SignUpProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setLoginOpen: (open: boolean) => void;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;

const SignUp = ({ open, setOpen, setLoginOpen }: SignUpProps) => {
  const { setUser } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signup/`,
        data
      );

      const { access, refresh } = response?.data?.token;
      const { email } = response?.data;

      setUser({ accessToken: access, refreshToken: refresh, email });

      setOpen(false);
      setLoginOpen(false);
      showSuccessToast("Account Created");
    } catch (err: any) {
      showErrorToast(
        err?.response?.data?.message?.email[0] ||
          "Error While Login! Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-secondary">
        Sign up to account
      </h2>
      <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="off"
                {...register("email")}
                className="block w-full rounded-md border px-3 py-1.5 text-secondary shadow-sm placeholder:text-gray-400"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="off"
                {...register("password")}
                className="block w-full rounded-md border px-3 py-1.5 text-secondary shadow-sm placeholder:text-gray-400"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <PrimaryButton type="submit" extraCss="w-full" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </PrimaryButton>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-secondary">
          Already a member?{" "}
          <span
            onClick={() => {
              setLoginOpen(true);
              setOpen(false);
            }}
            className="font-medium leading-6 text-primary cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </CustomModal>
  );
};

export default SignUp;

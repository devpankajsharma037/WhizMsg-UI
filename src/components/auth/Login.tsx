import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PrimaryButton from "../buttons/PrimaryButton";
import CustomModal from "../UI/CustomModal";
import SignUp from "./Signup";
import { useAuthStore } from "@/store/useAuthStore";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

type LoginProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = ({ open, setOpen }: LoginProps) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signin/`,
        data
      );
      const { access, refresh } = response.data.token;
      const { email } = response.data.info;
      setUser({ accessToken: access, refreshToken: refresh, email });
      setOpen(false);
      reset();
      showSuccessToast("Login successful");
    } catch (err: any) {
      showErrorToast(
        err?.response?.data?.message?.non_field_errors[0] ||
          "Error While Login! Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomModal open={open} setOpen={setOpen}>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-secondary">
          Login to your account
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
                  className={`block w-full rounded-md border px-3 py-1.5 text-secondary shadow-sm placeholder:text-gray-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="text-primary">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  {...register("password")}
                  className={`block w-full rounded-md border px-3 py-1.5 text-secondary shadow-sm placeholder:text-gray-400 ${
                    errors.password ? "border-red-500" : ""
                  }`}
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
                {loading ? "Logging in..." : "Login"}
              </PrimaryButton>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-secondary">
            Not a member?{" "}
            <span
              onClick={() => {
                setSignUpModal(true);
                setOpen(false);
              }}
              className="font-medium leading-6 text-primary cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </CustomModal>

      <SignUp
        open={signUpModal}
        setOpen={setSignUpModal}
        setLoginOpen={setOpen}
      />
    </>
  );
};

export default Login;

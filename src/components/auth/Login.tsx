import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import PrimaryButton from "../buttons/PrimaryButton";
import CustomModal from "../UI/CustomModal";
import SignUp from "./Signup";

type LoginProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setIsLoggedIn: any;
};

const Login = ({ open, setOpen, setIsLoggedIn }: LoginProps) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signin/`,
        formData
      );
      const { access, refresh } = response.data.token;
      const { email } = response.data.info;
      Cookies.set("access_token", access, { secure: true, sameSite: "Strict" });
      Cookies.set("refresh_token", refresh, {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user_email", email, { secure: true, sameSite: "Strict" });
      setOpen(false);
      setIsLoggedIn(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border px-3 py-1.5 text-secondary shadow-sm placeholder:text-gray-400"
                />
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border px-3 py-1.5 text-secondary shadow-sm placeholder:text-gray-400"
                />
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
        setIsLoggedIn={setIsLoggedIn}
      />
    </>
  );
};

export default Login;

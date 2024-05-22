import clsx from "clsx";
import * as Yup from "yup";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../services/AuthService";
import { FacebookIcon, GoogleIcon, LinkedIcon } from "../../assets";

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required Email"),
    password: Yup.string()
      .min(8, "Too short!")
      .required("Required Password")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  });
  const notify = () => toast("OTP code has been sent!");
  const handleSignIn = async (email, password, setFieldError) => {
    setIsLoading(true);
    try {
      await AuthService.verifyCredentials({
        email: email,
        password: password,
      });
      notify();
      setTimeout(() => {
        navigate("/otp");
      }, 2000);
    } catch (error) {
      console.log("Error");
      if (error.response && error.response.status === 400) {
        setFieldError("email", "There is no associated user for this email");
      } else if (error.response && error.response.status === 401) {
        setFieldError("password", "Password is incorrect");
      }
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values, { setFieldError, setSubmitting }) => {
    const { email, password } = values;

    try {
      await SignInSchema.validate(values, { abortEarly: false });
    } catch (validationErrors) {
      validationErrors.inner.forEach((error) => {
        setFieldError(error.path, error.message);
      });
      setSubmitting(false);
      return;
    }

    handleSignIn(email, password, setFieldError);
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="relative flex flex-col w-full space-y-4 mb-8 ">
            <Field
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  w-full p-2.5 focus:bg-white",
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              type="email"
              placeholder={t("labels.username")}
              name="email"
              id="email"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  w-full p-2.5 focus:bg-white",
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              type="password"
              placeholder={t("labels.password")}
              name="password"
              id="password"
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <button disabled={isLoading}>
              {!isLoading ? (
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "#5F5F5F",
                    textDecoration: "none",
                  }}
                  to="/forgot-password"
                >
                  {t("login.forgot-password")}
                </Link>
              ) : (
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "grey",
                    pointerEvents: "none",
                    textDecoration: "none",
                  }}
                >
                  {t("login.forgot-password")}
                </span>
              )}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={clsx(
                "border  rounded-xl  w-full p-2.5 text-white font-medium",
                isLoading ? "bg-grey-300" : "bg-regal-green"
              )}
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-400 animate-spin dark:text-gray-400 fill-white dark:fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                t("labels.sign-in")
              )}
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex flex-row justify-center items-center mb-4">
        <div className="bg-grey-100 h-1 w-1/3"></div>
        <div className="color-primary-grey mx-2">{t("labels.or")}</div>
        <div className="bg-grey-100 h-1 w-1/3"></div>
      </div>

      <div className="flex justify-center">
        <GoogleIcon />
        <FacebookIcon />
        <LinkedIcon />
      </div>
      <div className="text-center mt-auto pt-16">
        {t("login.create-account")}
        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              style={{
                marginLeft: "4px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "#5F5F5F",
                textDecoration: "underline",
              }}
              to="/sign-up"
            >
              {t("labels.sign-up")}
            </Link>
          ) : (
            <span
              style={{
                marginLeft: "4px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "grey",
                pointerEvents: "none",
                textDecoration: "underline",
              }}
            >
              {t("labels.sign-up")}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
export default LoginForm;

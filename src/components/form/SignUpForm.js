import clsx from "clsx";
import * as Yup from "yup";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
const SignUpForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .test("emailExists", "Email already exists", async (value) => {
        if (!isEmailError) {
          return true;
        }
        return false;
      }),
    firstname: Yup.string()
      .required("Required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/),
    lastName: Yup.string()
      .required("Required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/),
    password: Yup.string()
      .min(8, "Too short!")
      .required("Required Password")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
    confirmPassword: Yup.string()
      .required("Please retype your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const handleSignUp = async (email, firstname, lastName, password) => {
    setIsLoading(true);
    try {
      const response = await AuthService.registerUser({
        email: email,
        firstname: firstname,
        lastname: lastName,
        password: password,
      });
      if (response.status === 201) {
        navigate("/submit");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setIsEmailError(true);
      }
      setIsLoading(false);
    }
  };
  const handleSubmit = (values) => {
    const { email, firstname, lastName, password } = values;
    console.log(values);
    handleSignUp(email, firstname, lastName, password);
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          firstname: "",
          lastName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="">
            <Field
              name="email"
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white",
                (errors.email && touched.email) || isEmailError
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              type="text"
              placeholder={t("labels.email")}
            />
            {(errors.email && touched.email) || isEmailError ? (
              <div>{errors.email}</div>
            ) : null}
            <div className="flex gap-x-2">
              <Field
                name="firstname"
                className={clsx(
                  "border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white",
                  errors.firstname && touched.firstname
                    ? "border-red-500"
                    : "border-gray-100"
                )}
                type="text"
                placeholder={t("labels.first-name")}
              />
              {errors.firstname && touched.firstname ? (
                <div>{errors.firstname}</div>
              ) : null}
              <Field
                name="lastName"
                className={clsx(
                  "border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white",
                  errors.lastName && touched.lastName
                    ? "border-red-500"
                    : "border-gray-100"
                )}
                type="text"
                placeholder={t("labels.last-name")}
              />
            </div>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}

            <Field
              name="password"
              type="password"
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white",
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              placeholder={t("labels.password")}
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <Field
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white",
                errors.confirmPassword && touched.confirmPassword
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              name="confirmPassword"
              type="password"
              placeholder={t("labels.confirm-password")}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}

            <button
              disabled={isLoading}
              type="submit"
              className={clsx(
                " border  rounded-xl  w-full p-2.5 text-white font-medium",
                isLoading ? "bg-grey-300" : "bg-regal-green"
              )}
            >
              <Link to="/otp" />
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
                t("labels.next")
              )}
            </button>
          </Form>
        )}
      </Formik>

      <div className="text-center pt-12 mt-auto">
        {t("sign-up.existing-account")}
        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              to="/login"
              style={{ color: "#22577A", textDecoration: "underline" }}
            >
              {t("labels.sign-in")}
            </Link>
          ) : (
            <span
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "grey",
                pointerEvents: "none",
                textDecoration: "underline",
              }}
            >
              {" "}
              {t("labels.sign-in")}
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default SignUpForm;

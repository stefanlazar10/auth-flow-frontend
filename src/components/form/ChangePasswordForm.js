import clsx from "clsx";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const notify = () => toast("Password changed succesfully");
  const { t } = useTranslation();
  const ChangeSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Required Password"),
    newPassword: Yup.string()
      .min(8, "Too short!")
      .required("Required Password")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
    confirmPassword: Yup.string(),
    //required("Confirm Password is required"),
    // .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });

  const handleRecover = async (newPassword) => {
    try {
      notify();
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.log("Error");
    }
  };

  const handleSubmit = (values) => {
    const { newPassword } = values;

    handleRecover(newPassword);
  };

  return (
    <>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={ChangeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="relative flex flex-col w-full space-y-4 mb-8">
            <Field
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  w-full p-2.5 focus:bg-white",
                errors.currentPassword && touched.currentPassword
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              type="password"
              placeholder={t("labels.password")}
              name="currentPassword"
              id="currentPassword"
            />
            {errors.currentPassword && touched.currentPassword ? (
              <div>{errors.currentPassword}</div>
            ) : null}
            <Field
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  w-full p-2.5 focus:bg-white",
                errors.newPassword && touched.newPassword
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              type="password"
              placeholder={t("labels.new-password")}
              name="newPassword"
              id="Password"
            />
            {errors.newPassword && touched.newPassword ? (
              <div>{errors.newPassword}</div>
            ) : null}
            <Field
              className={clsx(
                "border bg-grey-100 text-sm rounded-xl  w-full p-2.5 focus:bg-white",
                errors.confirmNewPassword && touched.confirmNewPassword
                  ? "border-red-500"
                  : "border-gray-100"
              )}
              type="password"
              placeholder={t("labels.confirm-new-password")}
              name="confirmNewPassword"
              id="confirmNewPassword"
            />
            {errors.confirmNewPassword && touched.confirmNewPassword ? (
              <div>{errors.confirmNewPassword}</div>
            ) : null}
            <button
              type="submit"
              className={
                "border  rounded-xl  w-full p-2.5 text-white font-medium bg-regal-green"
              }
            >
              Submit
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePasswordForm;

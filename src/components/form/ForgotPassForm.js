import clsx from "clsx";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../services/AuthService";

const ForgotPassForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const RecoverSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required Email"),
  });

  const notify = () => toast("Email sent!");
  const handleRecover = async (email) => {
    try {
      await AuthService.recoverPass({
        email: email,
      });
      notify();
      setTimeout(() => {
        navigate("/change-password");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (values) => {
    const { email } = values;
    handleRecover(email);
  };

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={RecoverSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="relative flex flex-col w-full space-y-4 mb-8">
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
            />{" "}
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
              hideProgressBar={false}
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

export default ForgotPassForm;

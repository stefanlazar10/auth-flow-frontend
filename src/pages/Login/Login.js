import Navbar from "../Navbar/Navbar";
import { IconAvatar } from "../../assets";
import { useTranslation } from "react-i18next";
import LoginForm from "../../components/form/LoginForm";
const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className=" relative h-full">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />
        <div className="z-10 sticky top-0">
          <Navbar />
        </div>
        <div className="px-12 pt-36 pb-24 h-full">
          {/* <div className="z-10 absolute">
            {Object.keys(lngs).map((lng) => (
              <button
                className="w-8 h-8 border bg-white text-sm color-black"
                type="submit"
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
              >
                {lng}
              </button>
            ))}
          </div> */}
          <IconAvatar className="relative z-10 mx-auto mb-4" />
          <div className="text-3xl text-center font-bold mb-8">
            {t("labels.sign-in")}{" "}
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;

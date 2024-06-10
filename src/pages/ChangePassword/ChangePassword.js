import { useTranslation } from "react-i18next";
import ChangePasswordForm from "../../components/form/ChangePasswordForm";

const ChangePassword = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-full relative">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />
        <div className="relative z-10 px-12 pt-72 pb-24 h-full">
          <div className="text-3xl text-center font-bold mb-8">
            {t("labels.change-password")}
          </div>
          <ChangePasswordForm />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

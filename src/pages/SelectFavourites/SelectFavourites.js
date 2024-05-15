import { useTranslation } from "react-i18next";
import SelectForm from "../../components/form/SelectFavouritesForm";

const SelectFavourites = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" relative h-full">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />
        <div className="relative z-10 pt-44 px-12  pb-24 h-full">
          <div className="text-3xl color-black text-center font-bold mb-8">
            {t("select-favourites.title")}
          </div>
          <SelectForm />
        </div>
      </div>
    </>
  );
};
export default SelectFavourites;

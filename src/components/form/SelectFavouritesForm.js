import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
const SelectForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState();
  const handlePostCategories = async () => {
    setIsLoading(true);
    const selectedCategories = [];
    for (let i = 0; i < active.length; i++) {
      if (active[i] === true) selectedCategories.push(categories[i]);
    }
    console.log(selectedCategories);
    try {
      const response = await AuthService.postFavouriteCategories(
        selectedCategories
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await AuthService.getCategories();
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    if (categories) {
      const cat = [];
      for (let i = 0; i < categories.length; i++) {
        cat.push(false);
      }
      setActive(cat);
    }
  }, [categories]);

  const [active, setActive] = useState(null);
  const handleCategoryClick = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-5">
        {categories?.map((category, index) => {
          return (
            <button
              name="categories"
              key={`category-${index}`}
              className={clsx(
                "border rounded-3xl text-sm w-fit py-2 px-4",
                active && active[index] ? "bg-orange-300" : "bg-grey-200"
              )}
              id="btn-1"
              onClick={() => {
                handleCategoryClick(index);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <button
        name="categories"
        onClick={handlePostCategories}
        disabled={isLoading}
        className={clsx(
          "mt-auto mb-20 text-center border  rounded-3xl  w-full p-2.5 text-white font-medium",
          isLoading ? "bg-grey-300" : "bg-regal-green"
        )}
        type="submit"
      >
        Confirm
      </button>
      <div className="text-center pt-20 mt-auto">
        Already have an account?{" "}
        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              to="/login"
              style={{ color: "#22577A", textDecoration: "underline" }}
            >
              Login
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
              Login
            </span>
          )}
        </button>
      </div>
    </>
  );
};
export default SelectForm;

import SignUpForm from "../../components/form/SignUpForm";
const SignUp = () => {
  return (
    <>
      <div className=" relative h-full">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />

        <div className="relative z-10 px-12 pt-72 pb-24 h-full">
          <div className="text-3xl color-black text-center font-bold mb-8">
            Sign Up
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;

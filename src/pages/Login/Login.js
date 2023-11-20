import { IconAvatar } from "../../assets";
import LoginForm from "../../components/form/LoginForm";
const Login = () => {
  return (
    <>
      <div className=" relative h-full">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />
        <div className="px-12 pt-36 pb-24 h-full">
          <IconAvatar className="relative z-10 mx-auto mb-4" />
          <div className="text-3xl text-center font-bold mb-8">Sign In</div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;

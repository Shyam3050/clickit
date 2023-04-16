// import { OtpVerifier, LoginForm } from "../component";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/login";
import { motion } from "framer-motion";
const Login = () => {
  const dispatch = useDispatch();
  function loginHandler() {
    dispatch(login());
  }
  return (
    <div>
      <div className="h-screen py-20 -mx-2 px-3 flex justify-center items-center">
        <motion.button
          className=" flex justify-center items-center gap-5 bg-gray-200 hover:bg-gray-300 border px-7 py-3 rounded-full font-bold"
          onClick={loginHandler}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
            alt="google logo"
            className="w-7 h-7"
          />
          Continue with Google
        </motion.button>
      </div>
    </div>
  );
};

export default Login;

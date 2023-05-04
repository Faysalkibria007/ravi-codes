import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (app) {
      onAuthStateChanged(auth, (user) => {
        console.log(user);
      });
    }
  }, [app]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate(from, { replace: true });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast(errorMessage);
        });
    } else {
      toast("Please Fill Email Field And Password");
      return;
    }
  };

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                placeholder="********"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white rounded-md py-2 font-bold"
            >
              Log in
            </button>
          </div>
        </form>
        <div>
          <button
            className="w-full bg-gray-900 text-white rounded-md py-2 font-bold"
            onClick={() => googleLogin()}
          >
            Google Sign-in
          </button>
        </div>

        <div className="mt-5">
          <button
            className="w-full bg-gray-900 text-white rounded-md py-2 font-bold"
            onClick={() => gitHubLogin()}
          >
            GitHub Sign-in
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              to="/register"
              className="font-medium text-gray-900 hover:text-gray-700"
            >
              Create an account
            </Link>
          </div>

          <Link
            to="/forgot-password"
            className="
            font-medium text-gray-900 hover:text-gray-700"
          >
            Forgot Password
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;

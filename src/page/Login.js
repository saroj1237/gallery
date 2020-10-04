import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";

function Login() {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setform] = useState({ email: "", password: "" });
  // const [isLoggedIn, setisLoggedIn] = useState(false)
  const history = useHistory();

  function handleForm(e) {
    if (isLoading) return;
    setisLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setError("");
        setisLoading(false);
        history.replace("/");
        // setisLoggedIn(true)
      })
      .catch((e) => {
        setError(e.message);
        setisLoading(false);
      });
  }

  function handleInput(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  // if(isLoggedIn) return <Redirect to="/"/>

  return (
    <div className="flex h-screen bg-yellow-500">
      <form
        className="bg-gray-600 p-10 rounded-lg m-auto w-full max-w-sm"
        onSubmit={handleForm}
      >
        {error}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="email"
              type="text"
              value={form.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="password"
              type="password"
              placeholder="******************"
              value={form.password}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {isLoading ? (
                <i className="fas fa-circle-notch fa-spin "></i>
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

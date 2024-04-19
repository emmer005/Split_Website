import React from "react";
import Image from "next/image";
import loginImg from "../../../public/Img/Login.jpg";

const Login = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1">
      <div className="flex md:hidden">
        <Image className="object-cover" src={loginImg} alt="" />
      </div>
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <h1 className="text-4xl font-bold">Login now!!</h1>
        <div className="card shrink-0  w-full h-fit max-w-sm shadow-2xl bg-base-100">
          <form autoComplete="" className="card-body">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

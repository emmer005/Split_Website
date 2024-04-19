import React from "react";
import Image from "next/image";
import Security from "../../../public/Img/signUp.svg";
import google from "../../../public/Img/google.svg";
import facebook from "../../../public/Img/facebook.svg";
import Link from "next/link";
import Button from "@/app/components/Button/Button";

const GetStarted = () => {
  return (
    <div className="grid grid-cols-2">
      <Image src={Security} alt="Security" />
      <div className=" flex justify-center  items-center">
        <div className="flex gap-8 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className=" font-bold text-3xl">Get's started.</h1>
            <h4>
              Already have an account?{" "}
              <Link className=" text-pink-400" href="/user/Login">
                Log in
              </Link>
            </h4>
          </div>
          <div className=" flex gap-10 font-bold">
            <button className=" border p-2 rounded-md flex items-center justify-center gap-4">
              <Image width={30} height={30} src={google} alt="Google Image" />
              Sign up with Google
            </button>
            <button className="border p-2 rounded-md bg-blue-700 text-white flex items-center justify-center gap-4">
              <Image
                width={30}
                height={30}
                src={facebook}
                alt="Facebook Image"
              />
              Sign up with Facebook
            </button>
          </div>
          <div className="flex flex-col gap-4 h-full items-center justify-center">
            <div className="card shrink-0  w-full h-fit ">
              <form className="">
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    autoComplete="on"
                    id="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="password">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    autoComplete="on"
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
      </div>
    </div>
  );
};

export default GetStarted;

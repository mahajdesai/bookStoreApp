import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="md:w-[600px] shadow-md p-5 md:p-8 rounded-md dark:border-[0.4px]">
          <div className="modal-open">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-10 top-33 md:absolute md:right-120 md:top-45"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className="mt-4">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  className="md:w-100 w-80 border mt-3 rounded-md px-3 py-1 outline-none"
                  placeholder="Enter your fullname"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  className="md:w-100 w-80 border mt-3 rounded-md px-3 py-1 outline-none"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  className="md:w-100 w-80 border mt-3 rounded-md px-3 py-1 outline-none"
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md cursor-pointer px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <div className="text-xl">
                  Have account?{" "}
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </a>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

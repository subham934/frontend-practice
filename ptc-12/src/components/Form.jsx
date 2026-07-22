import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset,  formState: { errors }, } = useForm();

  console.log(errors)
  const handleFormSubmit = (e) => {
    console.log(e);
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-xl bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        <div className="px-6 py-3 sm:px-10 border-b border-slate-800 bg-linear-to-r from-indigo-900/40 via-purple-900/20 to-slate-900/40 flex justify-center">
          <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-2xl font-semibold rounded-full border border-indigo-500/20">
            Contact Us
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="px-6 py-8 sm:px-10 space-y-5"
        >
          <div>
            <label
              className="block text-xs font-medium text-slate-300 mb-1.5"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              {...register("fullName", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength:{
                  value: 17,
                  message: "name must not contain more than 17 characters",
                }
              })}
              type="text"
              id="fullName"
              placeholder="John Doe"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
            outline-none
            transition-all duration-200"
            />

            {
              errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )
            }
          </div>

          <div>
            <label
              className="block text-xs font-medium text-slate-300 mb-1.5"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email format",
                },
              })}
              // type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
              outline-none
              transition-all duration-200"
            />

            {
              errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )
            }
          </div>
          <div>
            <label
              className="block text-xs font-medium text-slate-300 mb-1.5"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number format",
                },
                // When you already have a regex pattern matching exactly 10 digits (/^[0-9]{10}$/), you don't need minLength or maxLength at all. The pattern handles length and character types together.
                // minLength: {
                //   value: 10,
                //   message: "Phone number must be at least 10 digits",
                // },
                // maxLength: {
                //   value: 10,
                //   message: "Phone number must be at most 10 digits",
                // },
              })}
              type="tel"
              id="phone"
              placeholder="+91 1234567890"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
            outline-none
            transition-all duration-200"
            />

            {
              errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )
            }
          </div>
          <div>
            <label
              className="block text-xs font-medium text-slate-300 mb-1.5"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                }, 
                 maxLength: {
                    value: 1000,
                    message: "Maximum 1000 characters are allowed",
                  },
              })}
              type="text"
              id="message"
              rows={4}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
            outline-none
            transition-all duration-200 resize-none"
            />

            {
              errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )
            }
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="block w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

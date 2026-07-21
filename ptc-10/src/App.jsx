import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const handleFormSubmit = (e) => {
    // console.log(e);
    reset();
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
        <div className="w-full max-w-xl bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-3 sm:px-10 border-b border-slate-800 bg-linear-to-r from-indigo-900/40 via-purple-900/20 to-slate-900/40 flex justify-center">
            <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-2xl font-semibold rounded-full border border-indigo-500/20">
              Contact Us
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="px-6 py-8 sm:px-10 space-y-5"
          >
            {/* Full Name */}
            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-1.5"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "name must contain atleat 3 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "name must not contain more than 16 characters",
                  },
                })}
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
              outline-none
              transition-all duration-200"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "invalid email format",
                  },
                })}
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-1.5"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 digits are required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 digits are allowed",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phone number",
                  },
                })}
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-1.5"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                {...register("message" , {
                  required: "message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters are required",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Maximum 1000 characters are allowed",
                  },
                })}
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="block mx-auto py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;

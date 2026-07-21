import React, { useRef } from "react";

const App = () => {
  console.log("App Rendering");

  const inputRef = useRef({});
  console.log(inputRef);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(inputRef.current.name.value);
    console.log(inputRef.current.email.value);
    console.log(inputRef.current.phone.value);
    console.log(inputRef.current.message.value);

    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-xl bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-3 sm:px-10 border-b border-slate-800 bg-linear-to-r from-indigo-900/40 via-purple-900/20 to-slate-900/40 flex justify-center">
          <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-2xl font-semibold rounded-full border border-indigo-500/20">
            Contact Us
          </div>
        </div>

        {/* Form */}
        <form className="px-6 py-8 sm:px-10 space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              className="block text-sm font-medium text-slate-300 mb-1.5"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              ref={(e) => {
                inputRef.current.name = e;
              }}
              type="text"
              id="fullName"
              placeholder="John Doe"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
              outline-none
              transition-all duration-200"
            />
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
              ref={(e) => {
                inputRef.current.email = e;
              }}
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
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
              ref={(e) => {
                inputRef.current.phone = e;
              }}
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
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
              id="message"
              ref={(e) => {
                inputRef.current.message = e;
              }}
              rows={4}
              placeholder="How can we help you?"
              className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
            />
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
  );
};

export default App;

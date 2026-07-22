// import React from 'react'
// import { Link, Outlet } from 'react-router'

// const Service = () => {
//   return (
//     <div className="flex gap-3 items-center mt-20 justify-center">
//         <Link to="/service/mobile" className='underline'>Mobile</Link> <br />
//         <Link to="/service/lappy" className='underline'>Laptop</Link> <br />

//         <Outlet/>
//     </div>
//   )
// }

// export default Service

import React from "react";
import { Link, Outlet, useLocation } from "react-router";

const Service = () => {
  const location = useLocation();

  // Check if we are at the root service path
  const isExactServicePath =
    location.pathname === "/service" || location.pathname === "/service/";

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      {/* Show navigation links ONLY on /service */}
      {isExactServicePath && (
        <div className="flex gap-3 items-center">
          <Link to="/service/mobile" className="underline">
            Mobile
          </Link>
          <Link to="/service/lappy" className="underline">
            Laptop
          </Link>
        </div>
      )}

      {/* Renders Mobile or Laptop sub-component when on child routes */}
      <Outlet />
    </div>
  );
};

export default Service;

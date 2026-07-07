import React from "react";
import { Link } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  {to: "/product", label: "Product"},
  {to: "/courses", label: "Courses"},
];
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">havells</div>
        <div className="navlinks">
          {links.map((link, idx) => {
            return (
              <div key={idx} style={{ fontSize: "2rem" }}>
                <Link to={link.to}>{link.label}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;

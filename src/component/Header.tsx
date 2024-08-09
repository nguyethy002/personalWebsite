import { Logo } from "../asset";
import { NavLink } from "react-router-dom";

import "../styles/component/Header.sass";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                [isActive ? "selected" : ""].join(" ")
              }
            >
              Home
            </NavLink>
          </li>
          <div className="line">❀</div>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                [isActive ? "selected" : ""].join(" ")
              }
            >
              About
            </NavLink>
          </li>
          <div className="line">❀</div>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                [isActive ? "selected" : ""].join(" ")
              }
            >
              Project
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;

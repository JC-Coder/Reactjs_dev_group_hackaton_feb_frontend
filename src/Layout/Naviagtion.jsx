import { NavLink } from "react-router-dom";

function Naviagtion() {
  return (
    <nav>
      <ul>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "border-b-red-500 border-b" : ""
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/dj"
          className={({ isActive }) =>
            isActive ? "border-b-red-500 border-b " : ""
          }
        >
          DJ
        </NavLink>
      </ul>
    </nav>
  );
}

export default Naviagtion;

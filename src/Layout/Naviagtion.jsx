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
      </ul>
    </nav>
  );
}

export default Naviagtion;

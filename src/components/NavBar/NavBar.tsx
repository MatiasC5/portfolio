import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex  gap-20 text-xl font-bold h-96 items-center justify-center">
      <NavLink to="/work">My Work</NavLink>
      <NavLink to="https://github.com/MatiasC5" target="_blank">
        GitHub
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/matias-cardoso5/"
        target="_blank"
      >
        LinkedIn
      </NavLink>
    </nav>
  );
};

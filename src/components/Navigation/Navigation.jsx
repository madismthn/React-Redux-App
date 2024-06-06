import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/contact">Contact</NavLink>

      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
}

import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { CustomLink } from "../components/CustomLinks";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />

            <ul>
              <li>
                <CustomLink
                  to="/"
                >
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/about"
                >
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to="/users"
                >
                  Users
                </CustomLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="about" element={<h1>About Page</h1>} />
            <Route path="users" element={<h1>User Page</h1>} />
            <Route path="/" element={<h1>Home Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
      ,
    </>
  );
};

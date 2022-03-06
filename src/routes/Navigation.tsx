import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import { CustomLink } from "../components/CustomLinks";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />

            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <CustomLink to={to}> {name}</CustomLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              >
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((child) => {
                    console.log(child)
                    return (
                    <Route key={child.path} path={route.path} element={<child.Component/>} ></Route>
                  )})}
              </Route>
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

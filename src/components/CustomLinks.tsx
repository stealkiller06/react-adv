import { LinkProps,useResolvedPath,useMatch, NavLink } from "react-router-dom";

export function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <NavLink
          style={{ textDecoration: match ? "underline" : "none" }}
          className={match?'nav-active':''}
          to={to}
          {...props}
        >
          {children}
        </NavLink>
      </div>
    );
  }
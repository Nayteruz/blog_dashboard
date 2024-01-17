import { useLinkClickHandler, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

export interface AppNavLinkProps {
  to: string;
  text: string;
}

export default function AppNavLink({ to, text }: AppNavLinkProps) {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(to);

  return (
    <span onClick={clickHandler}>
      <Navbar.Link href={to} active={location.pathname === to}>
        {text}
      </Navbar.Link>
    </span>
  );
}

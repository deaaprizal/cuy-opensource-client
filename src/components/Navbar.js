import React from "react";
import {
  NavContainer,
  NavGroup,
  NavGroupRight,
  NavLink,
} from "styled/navStyle";
import { getPathName } from "../libs/urlScraping";

import { useRouter } from "next/router";

export default function Navbar({ navigationData }) {
  const router = useRouter();

  return (
    <NavContainer>
      <NavGroup>
        {navigationData.map((nav, i) => {
          return (
            <NavLink key={i}>
              <a
                href={getPathName(nav.url)}
                className={
                  router.pathname == getPathName(nav.url) ? "active" : ""
                }
              >
                {nav.label}
              </a>
            </NavLink>
          );
        })}
      </NavGroup>
      <NavGroupRight>
        <NavLink>
          <a href="/course">course</a>
        </NavLink>
        <NavLink>
          <a href="/dashboard">dashboard</a>
        </NavLink>
      </NavGroupRight>
    </NavContainer>
  );
}

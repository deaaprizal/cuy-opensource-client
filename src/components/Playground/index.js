import React, { useState, useEffect } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Wrapper } from "../../styled/global";
import { App, SigninButton, RegisterButton } from "./staticFile";
import NavbarBack from "../NavbarBack";
import GoToHome from "../GoToHome";

export default function Playground(props) {
  return (
    <Wrapper>
      { props.dashboard ? null : 
        <>
          <NavbarBack />
          <h1 style={{ marginTop: -3, textAlign: "center" }}>
            <a
              href="/playground"
              style={{ textDecoration: "none", color: "black" }}
            >
              PLAYGROUND
            </a>
          </h1>
        </>
      }
      <div id={9507}>
        <Sandpack
          template="react"
          files={{
            "/RegisterButton.js": RegisterButton,
            "/SigninButton.js": SigninButton,
            "/App.js": App,
          }}
          theme="monokai-pro"
          options={{
            openPaths: ["/App.js", "/SigninButton.js", "/RegisterButton.js"],
            activePath: "/App.js",
            showNavigator: true,
          }}
        />
      </div>
      { props.dashboard ? null : <GoToHome /> }
    </Wrapper>
  );
}

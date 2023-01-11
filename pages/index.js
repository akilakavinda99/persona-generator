import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AlertBox from "../components/Alert";
import { NavBar } from "../components/NavBar";
import NotSupported from "../components/NotSupported";
import styles from "../styles/Home.module.css";
var mobile = require("is-mobile");

export default function Home() {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  var isMobile = mobile();
  return (
    <>
      <NavBar />
      {isMobile || windowWidth < 1000 ? (
        <>
          <NotSupported />
        </>
      ) : (
        <>
          <h1>{windowWidth}</h1>
        </>
      )}
    </>
  );
}

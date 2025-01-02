"use client";

import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LayoutWrapper({
  children,
}: React.PropsWithChildren<{}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

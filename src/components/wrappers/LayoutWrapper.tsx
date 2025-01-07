"use client";

import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utils/i18";

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
    <I18nextProvider i18n={i18n}>
      <Header />
      {children}
      <Footer />
    </I18nextProvider>
  );
}

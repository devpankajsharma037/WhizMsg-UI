import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function LayoutWrapper({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

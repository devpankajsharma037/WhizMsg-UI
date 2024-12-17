import React, { ReactNode } from "react";
import Footer from "../layout/Footer";

export default function LayoutWrapper({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

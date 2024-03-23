import React from "react";

import { Outlet } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Layout() {
  return (
    <div className="page-content">
      <SiteHeader />
        <Outlet />
      {/* <SiteFooter /> */}
    </div>
  );
}

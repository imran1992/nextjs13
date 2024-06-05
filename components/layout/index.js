import { Fragment } from "react";
import MainNavigation from "./main-navigation";
const Layout = ({ children }) => (
  <Fragment>
    <MainNavigation />
    <main>{children}</main>
  </Fragment>
);

export default Layout;

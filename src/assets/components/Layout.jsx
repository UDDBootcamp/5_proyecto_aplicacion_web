import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { ErrorBoundary } from "../ErrorBoundary";

const Layout = () => {
const location = useLocation();

  return (
    <>
      <Header />
      <main className="container py-5">
        <ErrorBoundary key={location.key}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default Layout;

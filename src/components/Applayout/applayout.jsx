import { Outlet } from "react-router-dom";
import Footer from "../UI/footer";
import Headers from "../UI/header";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;

import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ImageKitProvider } from "@imagekit/react";
const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <ImageKitProvider
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      >
        <Navbar />
        <Outlet />
      </ImageKitProvider>
    </div>
  );
};

export default MainLayout;

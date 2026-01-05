import Navbar from "./components/Navbar";
import { ImageKitProvider, Image } from "@imagekit/react";

const App = () => {
  // console.log("IK:", import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT);

  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <ImageKitProvider
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* BREADCRUMB */}
        {/* INTRODUCTION  */}
        {/* FEATURE POSTS */}
        {/* POST LIST */}
      </ImageKitProvider>
    </div>
  );
};

export default App;

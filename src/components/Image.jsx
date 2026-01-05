import { Image as IKImage } from "@imagekit/react";

const AppImage = ({ src, className = "", width, height, alt = "" }) => {
  return (
    <IKImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default AppImage;

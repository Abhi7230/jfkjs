import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./Glassmorphism.module.css";

const Glassmorphism: FunctionComponent = () => {
  return (
    <div className={styles.glassmorphism}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img
        className={styles.greenBlueModernPhotoNature}
        loading="lazy"
        alt=""
        src="/green-blue-modern-photo-nature-photo-collage-1@2x.png"
      />
      <div className={styles.glassmorphismInner}>
        <FrameComponent />
      </div>
    </div>
  );
};

export default Glassmorphism;

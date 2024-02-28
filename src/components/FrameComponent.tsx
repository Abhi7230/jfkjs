import { FunctionComponent } from "react";
import UsernameFrame from "./UsernameFrame";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <form className={styles.cardParent}>
      <div className={styles.card} />
      <div className={styles.loginParent}>
        <h1 className={styles.login}>Login</h1>
        <div className={styles.welcomeText}>
          <div className={styles.depthFrame} />
          <div className={styles.welcomeOnboardWith}>
            Welcome onboard with us!
          </div>
        </div>
      </div>
      <UsernameFrame
        username="Username"
        enterYourUsernamePlacehol="Enter your username"
      />
      <div className={styles.forgotPassLink}>
        <UsernameFrame
          username="Password"
          enterYourUsernamePlacehol="Enter your password"
          propPadding="unset"
          propWidth="153px"
        />
        <div className={styles.forgotPassword}>Forgot Password?</div>
      </div>
      <div className={styles.loginButtonFrame}>
        <button className={styles.welcomeFrame}>
          <div className={styles.card1} />
          <div className={styles.login1}>LOGIN</div>
        </button>
        <div className={styles.newToLogoContainer}>
          <span className={styles.newToLogo}>{`New to Logo? `}</span>
          <b className={styles.register}>Register</b>
          <span className={styles.here}> Here</span>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./UsernameFrame.module.css";

export type UsernameFrameType = {
  username?: string;
  enterYourUsernamePlacehol?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const UsernameFrame: FunctionComponent<UsernameFrameType> = ({
  username,
  enterYourUsernamePlacehol,
  propPadding,
  propWidth,
}) => {
  const usernameFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const enterYourUsernameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.usernameFrame} style={usernameFrameStyle}>
      <div className={styles.username}>{username}</div>
      <div className={styles.cardParent}>
        <div className={styles.card} />
        <input
          className={styles.enterYourUsername}
          placeholder={enterYourUsernamePlacehol}
          type="text"
          style={enterYourUsernameStyle}
        />
      </div>
    </div>
  );
};

export default UsernameFrame;

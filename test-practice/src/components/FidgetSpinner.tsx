import React from "react";
import styles from "./FidgetSpinner.module.scss";

interface TailwindSpinnerProps {
  size?: number;
  color?: string;
}

const FidgetSpinner: React.FC<TailwindSpinnerProps> = ({
  size = 8,
  color = "border-current",
}) => {
  return (
    <div
      className={`${styles.spinner} ${styles[`size-${size}`]} ${styles[color]}`}
      role="status"
    >
      <span className={styles.hiddenText}>Loading...</span>
    </div>
  );
};

export default FidgetSpinner;

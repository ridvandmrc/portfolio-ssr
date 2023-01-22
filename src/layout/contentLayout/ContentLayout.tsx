import { About, InfoIndicator } from "@/components";

import styles from "./ContentLayout.module.css";

export const ContentLayout = () => {
  return (
    <div className={styles.contentWrapper}>
      <About />
      <div className={styles.divider}> </div>
      <InfoIndicator />
    </div>
  );
};

import { FC, ReactNode } from "react";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.mainLayout}>
    <div className={styles.mainContent}>{children}</div>
  </div>
);

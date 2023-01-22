import { About, InfoIndicator } from "@/components";

import styles from "./ContentLayout.module.css";

export const ContentLayout = () => {
  return (
    <div className="contentWrapper">
      <About />
      <div className="divider"> </div>
      <InfoIndicator />
    </div>
  );
};

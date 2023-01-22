import { FC, ReactNode } from "react";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mainLayout">
    <div className="mainContent">{children}</div>
  </div>
);

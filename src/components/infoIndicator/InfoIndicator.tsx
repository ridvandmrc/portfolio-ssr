import { FC, ReactNode } from "react";

import styles from "./InfoIndicator.module.css";

const IndicatorHelper: FC<{ title: string; value: ReactNode }> = ({
  title,
  value,
}) => (
  <div className="indicatorWrapper">
    <span className="indicatorKey">{title}:</span>
    <span className="indicatorValue">{value}</span>
  </div>
);

export const InfoIndicator = () => (
  <div className="infoIndicator">
    <IndicatorHelper title="Age" value={27} />
    <IndicatorHelper title="Bachelor" value="Gebze Teknical University" />
    <IndicatorHelper title="Address" value="Kocaeli, Gebze" />
    <IndicatorHelper
      title="E-mail"
      value={
        <a
          style={{ color: "#2e8b57", textDecoration: "none", fontWeight: 700 }}
          href="mailto:rdvndmrc@gmail.com"
        >
          rdvndmrc@gmail.com
        </a>
      }
    />
    <IndicatorHelper
      title="Hobbies"
      value="Football, Music, film and video Game"
    />
    <IndicatorHelper
      title="Note"
      value="If you need help something that I interested before, feel free to reach me !"
    />
  </div>
);

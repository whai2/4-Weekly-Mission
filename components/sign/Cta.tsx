import { ReactNode } from "react";

import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CtaProps = {
  children: ReactNode;
};

const Cta = ({ children }: CtaProps) => {
  return <div className={cx("container")}>{children}</div>;
};

export default Cta
import classNames from "classnames/bind";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

const signLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("items")}>
        {children}
      </div>
    </div>
  );
};

export default signLayout;

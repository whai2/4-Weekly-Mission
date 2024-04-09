import Image from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import LinkbraryIcon from "@/public/logo.svg";
import { ROUTE } from "@/lib/constant"

import classNames from "classnames/bind";
import styles from "./SignHeader.module.scss";

const cx = classNames.bind(styles);

type SignHeaderProps = {
  message: string;
  link: {
    href: Url;
    text: string;
  };
};

const SignHeader = ({ message, link }: SignHeaderProps) => {
  const { href, text } = link;

  return (
    <div className={cx("container")}>
      <Link href={ROUTE.랜딩}>
        <Image src={LinkbraryIcon} className={cx("logo")} alt="로고" />
      </Link>
      <p className={cx("message-box")}>
        <span className={cx("message")}>{message}</span>
        <Link className={cx("link")} href={href}>
          {text}
        </Link>
      </p>
    </div>
  )
}

export default SignHeader
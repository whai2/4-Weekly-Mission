'use client'

import Image from "next/image";

import { forwardRef, useMemo, useState } from "react";

import EyeOnIcon from "@/public/eye-on.svg";
import EyeOffIcon from "@/public/eye-off.svg";

import Input, { InputProps } from "./Input";

import classNames from "classnames/bind";
import styles from "./PasswordInput.module.scss";

const cx = classNames.bind(styles);

type PasswordInputProps = {
  hasEyeIcon?: boolean;
} & Omit<InputProps, "type">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { hasEyeIcon = false, value, placeholder, hasError = false, helperText, onChange, onBlur },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const inputType = useMemo(() => (isPasswordVisible ? "text" : "password"), [isPasswordVisible]);
    const EyeIcon = useMemo(
      () => (
        <button
          type="button"
          className={cx("button")}
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <Image src={EyeOnIcon} alt="켜짐" /> : <Image src={EyeOffIcon} alt="꺼짐" />}
        </button>
      ),
      [isPasswordVisible]
    );

    return (
      <div className={cx("container")}>
        <Input
          ref={ref}
          value={value}
          placeholder={placeholder}
          type={inputType}
          hasError={hasError}
          helperText={helperText}
          onChange={onChange}
          onBlur={onBlur}
        />
        {hasEyeIcon && EyeIcon}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput
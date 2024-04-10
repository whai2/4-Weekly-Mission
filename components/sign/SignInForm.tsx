"use client";

import { Controller, useForm } from "react-hook-form";

import { PLACEHOLDER, ERROR_MESSAGE } from "@/lib/constant";

import Input from "./form/Input";
import PasswordInput from "./form/PasswordInput";
import Cta from "./Cta";

import styles from "./SignInForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignInForm = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  return (
    <form
      className={cx("form")}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className={cx("input-box")}>
        <label className={cx("label")}>이메일</label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: ERROR_MESSAGE.signin.emailRequired,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: ERROR_MESSAGE.signin.emailInvalid,
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={PLACEHOLDER.signin.email}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx("input-box")}>
        <label className={cx("label")}>비밀번호</label>
        <Controller
          control={control}
          name="password"
          rules={{ required: ERROR_MESSAGE.signin.passwordRequired }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              hasEyeIcon
              placeholder={PLACEHOLDER.signin.password}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <button className={cx("button")} type="submit">
        <Cta>로그인</Cta>
      </button>
    </form>
  );
};

export default SignInForm;

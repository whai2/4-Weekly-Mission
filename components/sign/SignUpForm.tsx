"use client";

import { Controller, useForm } from "react-hook-form";

import { PLACEHOLDER, ERROR_MESSAGE } from "@/lib/constant";
import { duplicationCheck } from "@/apis/api";

import Input from "./form/Input";
import PasswordInput from "./form/PasswordInput";
import Cta from "./Cta";

import styles from "./SignUpForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
}

const SignUpForm = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: "", password: "", confirmedPassword: "" },
    mode: "onBlur",
    reValidateMode: "onBlur",
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
            required: ERROR_MESSAGE.signup.emailRequired,
            pattern: {
              value: REGEX.EMAIL,
              message: ERROR_MESSAGE.signup.emailInvalid,
            },
            validate: {
              alreadyExist: async () => {
                try {
                  const response = await duplicationCheck(watch("email"));
                  return true;
                } catch (err) {
                  return ERROR_MESSAGE.signup.emailAlreadyExist;
                }
              },
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={PLACEHOLDER.signup.email}
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
          rules={{
            required: ERROR_MESSAGE.signup.passwordInvalid,
            pattern: {
              value: REGEX.PASSWORD,
              message: ERROR_MESSAGE.signup.passwordInvalid,
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              hasEyeIcon
              placeholder={PLACEHOLDER.signup.password}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx("input-box")}>
        <label className={cx("label")}>비밀번호 확인</label>
        <Controller
          control={control}
          name="confirmedPassword"
          rules={{
            validate: {
              isMatch: (value) => {
                if (value !== watch("password")) {
                  return ERROR_MESSAGE.signup.confirmedPasswordNotMatch;
                }
                return true;
              },
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              hasEyeIcon
              placeholder={PLACEHOLDER.signup.confirmedPassword}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <button className={cx("button")} type="submit">
        <Cta>회원가입</Cta>
      </button>
    </form>
  );
};

export default SignUpForm

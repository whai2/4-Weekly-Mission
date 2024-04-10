"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { PLACEHOLDER, ERROR_MESSAGE, REGEX } from "@/lib/constant";
import { signIn } from "@/apis/api";

import Input from "./form/Input";
import PasswordInput from "./form/PasswordInput";
import Cta from "./Cta";

import styles from "./SignInForm.module.scss";
import classNames from "classnames/bind";
import { useTokenToRedirect } from "@/hooks/useTokenToRedirect";

const cx = classNames.bind(styles);

const SignInForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });
  const [token, setToken] = useState('');
  useTokenToRedirect(token);
  
  const onSubmitForSingIn = async (data: any) => {
    try {
      const loginResponse = await signIn(data?.email, data?.password);
      const json = await loginResponse.json();
      
      if (json?.data.accessToken) {
        localStorage.setItem("accessToken", json.data.accessToken);
      }
      
      setToken(json?.data.accessToken);
    } catch (err) {
      return false;
    }
  }
  

  return (
    <form
      className={cx("form")}
      onSubmit={handleSubmit(onSubmitForSingIn)}
    >
      <div className={cx("input-box")}>
        <label className={cx("label")}>이메일</label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: ERROR_MESSAGE.signin.emailRequired,
            pattern: {
              value: REGEX.EMAIL,
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

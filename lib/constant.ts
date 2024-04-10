export const ROUTE = {
  랜딩: "/",
  로그인: "/signin",
  회원가입: "/signup",
  폴더: "/folder",
  개인정보처리방침: "/privacy",
  FAQ: "/faq",
};

export const PLACEHOLDER = {
  signin: {
    email: "이메일을 입력해 주세요.",
    password: "비밀번호를 입력해 주세요.",
  },

  signup: {
    email: "이메일을 입력해 주세요.",
  password: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  confirmedPassword: "비밀번호와 일치하는 값을 입력해 주세요.",
  }
}

export const ERROR_MESSAGE = {
  signin: {
    emailRequired: "이메일을 입력해 주세요.",
    emailInvalid: "올바른 이메일 주소가 아닙니다.",
    emailCheck: "이메일을 확인해 주세요.",
    passwordRequired: "비밀번호를 입력해 주세요.",
    passwordCheck: "비밀번호를 확인해 주세요.",
  },

  signup: {
    emailRequired: "이메일을 입력해 주세요.",
    emailInvalid: "올바른 이메일 주소가 아닙니다.",
    emailAlreadyExist: "이미 사용 중인 이메일입니다.",
    passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    confirmedPasswordNotMatch: "비밀번호가 일치하지 않아요.",
  }
}

export const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
}

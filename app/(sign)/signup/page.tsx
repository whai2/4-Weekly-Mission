import { ROUTE } from "@/lib/constant";

import SignHeader from "@/components/sign/SignHeader";
import SignUpForm from "@/components/sign/SignUpForm";

const page = () => {
  return (
    <>
      <SignHeader
        message="이미 회원이신가요?"
        link={{ text: "로그인 하기", href: ROUTE.로그인 }}
      />
      <SignUpForm />
    </>
  );
};

export default page;

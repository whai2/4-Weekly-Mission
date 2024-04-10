import { ROUTE } from "@/lib/constant";

import SignHeader from "@/components/sign/SignHeader";
import SignInForm from "@/components/sign/SignInForm";

const page = () => {
  return (
    <>
      <SignHeader
        message="회원이 아니신가요?"
        link={{ text: "회원 가입하기", href: ROUTE.회원가입 }}
      />
      <SignInForm />
    </>
  );
};

export default page;

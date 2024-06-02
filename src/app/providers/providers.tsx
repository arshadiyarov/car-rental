import { PropsWithChildren } from "react";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

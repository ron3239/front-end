'use client'
import { Instruction, Loading, TermsModal } from "@/components";
import {
  About,
  Banner,
  BuySection,
  Footer,
  Header,
} from "@/components/layout";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

export function HomeMain() {
  const  status  = useSelector((state: RootState) => state.statePay.status);
  return (
    <main>
      <Header />
      <Loading  />
      <TermsModal />
      <Instruction />
      <div className={status!=''? "opacity-10" : ""}>
        <Banner />
        <BuySection />
        <About />
        <Footer />
      </div>
    </main>
  );
}

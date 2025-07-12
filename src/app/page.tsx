'use client'
import {
  About,
  Banner,
  BuySection,
  Footer,
  Header,
} from "@/components/layout";
import { Instruction } from "@/components/UX/Instruction/Instruction";

import { Loading } from "@/components/UX/Loading/Loading";
import TermsModal from "@/components/UX/TermsModal/TermsModal";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Home() {
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

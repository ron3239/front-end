'use client'
import {
  About,
  Banner,
  BuySection,
  Footer,
  Header,
} from "@/components/layout";
import { Loading } from "@/components/UX/Loading/Loading";
import TermsModal from "@/components/UX/TermsModal/TermsModal";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Home() {
  const  status  = useSelector((state: RootState) => state.status);
  return (
    <main>
      <Header />
      <Loading  />
      <TermsModal />
      <div className={status!=''? "opacity-10" : ""}>
        <Banner />
        {/* <HowItWorks /> */}
        {/* <Reviews /> */}
        <BuySection />
        <About />
        <Footer />
      </div>
    </main>
  );
}

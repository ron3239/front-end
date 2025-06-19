import {
  About,
  Banner,
  BuySection,
  Footer,
  Header,
  HowItWorks,
  Reviews,
} from "@/components/layout";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      {/* <HowItWorks /> */}
      <Reviews />

      <BuySection />
      <About />
      <Footer />
    </main>
  );
}

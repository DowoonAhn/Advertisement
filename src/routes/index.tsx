import { createFileRoute } from "@tanstack/react-router";
import { Apartment } from "@/components/site/apartment";
import { Commercial } from "@/components/site/commercial";
import { Cta } from "@/components/site/cta";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { InquiryDialog } from "@/components/site/inquiry-dialog";
import { Nav } from "@/components/site/nav";
import { Pricing } from "@/components/site/pricing";
import { Simulator } from "@/components/site/simulator";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Apartment />
        <Commercial />
        <Simulator />
        <HowItWorks />
        <Pricing />
        <Cta />
        <Faq />
      </main>
      <Footer />
      <InquiryDialog />
    </>
  );
}

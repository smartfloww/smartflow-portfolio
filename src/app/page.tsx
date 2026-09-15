import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Work } from "@/components/site/work";
import { Services } from "@/components/site/services";
import { FreeSample } from "@/components/site/free-sample";
import { WhyUs } from "@/components/site/why-us";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-paper text-ink">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Work />
        <Services />
        <FreeSample />
        <WhyUs />
      </main>
      <div className="mt-auto">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

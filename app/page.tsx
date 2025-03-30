import CaseStudies from "@/components/sections/case-studies";
import ContactUs from "@/components/sections/contact-us";
import Hero from "@/components/sections/hero";
import Processes from "@/components/sections/processes";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="grid place-items-center gap-[140px] ">
      <Hero />
      <Services />
      <CaseStudies />
      <Processes />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

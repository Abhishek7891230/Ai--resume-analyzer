import { Footer } from "../components/Footer";
import { GetStarted } from "../components/getstarted";
import { Navbar } from "../components/Navbar";
import { HowItWorks } from "../components/Working";

export function HomePage() {
  return (
    <>
      <Navbar />
      <GetStarted />
      <HowItWorks />
      <Footer />
    </>
  );
}

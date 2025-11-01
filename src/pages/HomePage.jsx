import { Footer } from "../components/Footer";
import { GetStarted } from "../components/getstarted";
import { Navbar } from "../components/Navbar";

export function HomePage() {
  return (
    <>
      <Navbar />
      <GetStarted />
      <Footer />
    </>
  );
}

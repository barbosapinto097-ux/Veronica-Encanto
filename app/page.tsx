import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Perfumes from "@/components/Perfumes";
import Joias from "@/components/Joias";
import Sublimacao from "@/components/Sublimacao";
import Manicure from "@/components/Manicure";
import Tupperware from "@/components/Tupperware";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div style={{
      height: 1,
      background: "linear-gradient(90deg, transparent, #f5d0d8, transparent)",
      margin: "0 5rem",
    }} />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Perfumes />
      <Divider />
      <Joias />
      <Sublimacao />
      <Divider />
      <Manicure />
      <Tupperware />
      <Contato />
      <Footer />
    </>
  );
}

import About from "@/components/About";
import ConsentBanner from "@/components/ConsentBanner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideProject from "@/components/SideProject";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <SideProject />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  );
}

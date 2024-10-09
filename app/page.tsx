import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";


export default function Home() {
  return (
    <main className="h-full">
      <Header/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

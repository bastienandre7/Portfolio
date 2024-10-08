import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";


export default function Home() {
  return (
    <main className="h-full">
      <Header/>
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

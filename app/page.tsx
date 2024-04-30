import Image from "next/image";
import Navbar from "./components/navbar";
import Accueil from "./components/accueil";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Accueil />
    </main>
  );
}

import Features from "./Features";
import Howitworks from "./Howitworks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar />
      <Features />
      <Howitworks />
      <Footer />
    </main>
  );
}

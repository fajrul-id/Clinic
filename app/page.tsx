import TopNavBar from "@/components/Layout/Header/TopNavBar";
import { useRouter } from "next/navigation";
import Home from "./home/page";
import Footer from "@/components/Layout/Footer/Footer";

export default function App() {
  return (
    <>
      <div className="">
        <header>
          <TopNavBar />
        </header>
        <Home />
      </div>
      <Footer />
    </>
  );
}

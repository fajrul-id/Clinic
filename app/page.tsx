import TopNavBar from "@/Components/Layout/Header/TopNavBar";
import { useRouter } from "next/navigation";
import Home from "./home/page";
import Footer from "@/Components/Layout/Footer/Footer";

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

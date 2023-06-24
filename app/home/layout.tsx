import Footer from "@/Components/Layout/Footer/Footer";
import TopNavBar from "@/Components/Layout/Header/TopNavBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <TopNavBar />
      </header>
      {children}
      <Footer />
    </>
  );
}

import Footer from "@/components/Layout/Footer/Footer";
import TopNavBar from "@/components/Layout/Header/TopNavBar";

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

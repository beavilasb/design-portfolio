import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlaceholderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
}

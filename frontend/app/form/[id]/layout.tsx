import Footer from "@/components/footer";
import FormTab from "@/components/form-tab";
import Navback from "@/components/nav-back";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navback />
      <main className="flex min-h-screen flex-col px-[135px] py-16 font-sans xl:px-[380px] mx-auto">
        <FormTab />
        {children}
      </main>

      <Footer />
    </div>
  );
}

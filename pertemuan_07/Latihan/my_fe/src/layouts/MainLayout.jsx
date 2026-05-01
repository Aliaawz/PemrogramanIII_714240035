import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children, activePage, setActivePage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let pageTitle = "Dashboard";
  if (activePage === "mahasiswa") pageTitle = "Data Mahasiswa";
  if (activePage === "datadiri") pageTitle = "Data Diri";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Sidebar
        activePage={activePage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectPage={(pageId) => {
          setActivePage(pageId);
          setIsSidebarOpen(false);
        }}
      />

      <div className="flex min-h-screen flex-col md:pl-72">
        <Header
          pageTitle={pageTitle}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 p-3 sm:p-4 md:p-6">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

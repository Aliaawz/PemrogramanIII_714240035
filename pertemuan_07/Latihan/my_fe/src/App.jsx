import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import MahasiswaPage from "./pages/MahasiswaPages";
import DashboardPage from "./pages/DashboardPages";
import DataDiriPage from "./pages/DataDiriPage";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "mahasiswa":
        return <MahasiswaPage />;
      case "datadiri":
        return <DataDiriPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <MainLayout activePage={activePage} setActivePage={setActivePage}>
      {renderContent()}
    </MainLayout>
  );
}
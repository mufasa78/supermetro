import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import RoutesPage from "@/react-app/pages/Routes";
import FleetPage from "@/react-app/pages/Fleet";
import SchedulesPage from "@/react-app/pages/Schedules";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

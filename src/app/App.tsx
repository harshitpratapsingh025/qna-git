import { Routes, Route } from "react-router-dom";
import { Users, Login } from "./pages";
import { Navbar } from "./components";
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Toaster />
      <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

// Import routing components
import { Routes, Route } from "react-router-dom";

// Import pages
import Profile from "./assets/components/profile";
import Details from "./assets/components/Details";

const App = () => {
  return (
    // Routes decides which component to show
    <Routes>
      {/* Home / Card page */}
      <Route path="/" element={<Profile />} />

      {/* Details page */}
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default App;

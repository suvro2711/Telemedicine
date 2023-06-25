import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
export default App;

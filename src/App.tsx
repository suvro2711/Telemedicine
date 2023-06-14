import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MaskGroup from "./pages/MaskGroup";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  return (
    <Routes>
      <Route path="/" element={<MaskGroup />} />
    </Routes>
  );
}
export default App;

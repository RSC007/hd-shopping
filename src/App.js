import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import { AppRoutes } from "./router";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

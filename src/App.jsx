import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import RoutesComponent from "./router/RoutesComponent";
import "./style.css";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <Router>
      <AppLayout>
        <RoutesComponent />
      </AppLayout>
    </Router>
  );
}

export default App;

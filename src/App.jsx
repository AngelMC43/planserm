import AppProvider from "./contexts/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import RoutesComponent from "./router/RoutesComponent";
import "./style.css";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <Router>
      <AppProvider>
        <AppLayout>
          <RoutesComponent />
        </AppLayout>
      </AppProvider>
    </Router>
  );
}

export default App;

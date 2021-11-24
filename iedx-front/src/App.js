import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { HashRouter, Switch, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AlertProvider from "./components/AlertProvider";

function App() {
  const token = localStorage.getItem("token");
  const isLogged = token !== null && token !== "";

  const Routes = isLogged ? AdminRoutes : PublicRoutes;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AlertProvider>
        <HashRouter>
          <Switch>
            <Routes />
          </Switch>
        </HashRouter>
      </AlertProvider>
    </LocalizationProvider>
  );
}

export default App;

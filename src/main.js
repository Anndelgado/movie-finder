import "./styles/main.css";

import {
  registerRoute,
  renderRoute
} from "./router/router";

import { loginPage } from "./pages/login";
import { registerPage } from "./pages/register";
import { dashboardPage } from "./pages/dashboard";
import { adminPage } from "./pages/admin";

registerRoute("/", loginPage);
registerRoute("/register", registerPage);
registerRoute("/dashboard", dashboardPage);
registerRoute("/admin", adminPage);

renderRoute();
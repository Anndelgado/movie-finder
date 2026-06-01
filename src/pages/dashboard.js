import { navbar } from "../components/navbar";
import { navigateTo } from "../router/router";
import { isAuthenticated } from "../utils/guards";

export const dashboardPage = () => {

  if (!isAuthenticated()) {
    navigateTo("/");
    return document.createElement("div");
  }

  const section = document.createElement("section");

  section.className =
    "min-h-screen bg-slate-950 text-white";

  section.appendChild(navbar());

  section.innerHTML += `
  
    <div class="p-8">

      <h2 class="text-4xl font-bold mb-4">
        Welcome to MovieHub
      </h2>

      <p class="text-slate-400">
        Search and discover movies
      </p>

    </div>

  `;

  return section;
};
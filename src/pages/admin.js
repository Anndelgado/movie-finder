import { navigateTo } from "../router/router";
import { isAdmin } from "../utils/guards";

export const adminPage = () => {

  if (!isAdmin()) {
    navigateTo("/dashboard");
    return document.createElement("div");
  }

  const section = document.createElement("section");

  section.innerHTML = `
  
  <div class="min-h-screen bg-slate-950 text-white">

    <h1 class="text-4xl p-8 text-red-500">
      Admin Panel
    </h1>

  </div>

  `;

  return section;
};
import { navigateTo } from "../router/router";
import { logout } from "../utils/guards";

export const navbar = () => {
  const nav = document.createElement("nav");

  nav.className =
    "bg-slate-900 border-b border-slate-800 px-8 py-4";

  nav.innerHTML = `
  
    <div class="flex justify-between items-center">

      <h1 class="text-2xl font-bold text-violet-500">
        🎬 Movie
      </h1>

      <button
        id="logout-btn"
        class="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>

  `;

  setTimeout(() => {
    document
      .querySelector("#logout-btn")
      .addEventListener("click", () => {

        logout();

        navigateTo("/");
      });
  });

  return nav;
};
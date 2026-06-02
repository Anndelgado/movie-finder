import { logout } from "../utils/guards";
import { navigateTo } from "../router/router";

export const navbar = () => {

  const nav = document.createElement("nav");

  nav.className =
    "bg-slate-900 border-b border-slate-800 px-8 py-4";

  nav.innerHTML = `
  
    <div class="flex justify-between items-center">

      <h1
        class="text-3xl font-bold text-violet-500"
      >
        🎬 MovieFinder
      </h1>

      <div class="flex gap-3">

        <button
          id="favorites-btn"
          class="bg-slate-800 px-4 py-2 rounded-lg"
        >
          ❤️ Favorites
        </button>

        <button
          id="logout-btn"
          class="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

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
import logo from "../assets/logo.png";
import { navigateTo } from "../router/router";

export const sidebar = () => {
  const aside = document.createElement("aside");

aside.className = `
  hidden
  lg:flex
  flex-col
  bg-slate-900
  border-r
  border-slate-800
  h-screen
  sticky
  top-0
  w-64
  shrink-0
`;

  aside.innerHTML = `
    
    <div
      class="
        p-6
        border-b
        border-slate-800
      "
    >

      <img
        src="${logo}"
        alt="MovieFinder"
        class="
          w-full
          max-w-[180px]
          mx-auto
        "
      >

    </div>

    <nav
      class="
        flex
        flex-col
        gap-2
        p-4
      "
    >

      <button
        id="home-btn"
        class="
          text-left
          px-4
          py-3
          rounded-lg
          bg-violet-600
          hover:bg-violet-700
          transition
        "
      >
        🏠 Home
      </button>

      <button
        id="movies-btn"
        class="
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
      >
        🎬 Movies
      </button>

      <button
        id="favorites-btn"
        class="
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
      >
        ❤️ Favorites
      </button>

      <button
        id="profile-btn"
        class="
          text-left
          px-4
          py-3
          rounded-lg
          hover:bg-slate-800
          transition
        "
      >
        👤 Profile
      </button>

    </nav>

    <div class="mt-auto p-4">

      <button
        id="logout-btn"
        class="
          w-full
          bg-red-500
          hover:bg-red-600
          py-3
          rounded-lg
          transition
        "
      >
        Logout
      </button>

    </div>

  `;

  setTimeout(() => {

    document
      .querySelector("#home-btn")
      ?.addEventListener("click", () => {
        navigateTo("/dashboard");
      });

    document
      .querySelector("#logout-btn")
      ?.addEventListener("click", () => {

        localStorage.removeItem("user");

        navigateTo("/");
      });

  });

  return aside;
};
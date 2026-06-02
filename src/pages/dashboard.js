import logo from "../assets/logo.png";

import { sidebar } from "../components/sidebar";
import { searchBar } from "../components/searchBar";
import { movieCard } from "../components/movieCard";

import {
  getPopularMovies,
  getTrendingMovies,
} from "../services/movieService";

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

  section.innerHTML = `
  
    <div class="flex min-h-screen">

      <div id="sidebar-container"></div>

      <main
        class="
          flex-1
          min-w-0
          p-4
          md:p-8
        "
      >

        <!-- Header móvil -->

        <div
          class="
            flex
            items-center
            justify-between
            lg:hidden
            mb-6
          "
        >

          <button
            id="menu-btn"
            class="
              text-3xl
              p-2
            "
          >
            ☰
          </button>

          <img
            src="${logo}"
            alt="MovieFinder"
            class="h-12"
          />

        </div>

<div
  class="
    flex
    flex-col
    lg:flex-row
    lg:items-center
    lg:justify-between
    gap-6
    mb-8
  "
>

  <div>

    <h1
      class="
        text-4xl
        font-bold
      "
    >
      Find your next
      <span class="text-violet-500">
        favorite movie
      </span>
    </h1>

  </div>

  <div
    class="
      flex
      items-center
      gap-4
    "
  >

    <button
      class="
        w-10
        h-10
        rounded-full
        bg-slate-800
        hover:bg-slate-700
      "
    >
      ☀
    </button>

    <button
      class="
        w-10
        h-10
        rounded-full
        bg-slate-800
        hover:bg-slate-700
      "
    >
      ❤️
    </button>

    <div
      class="
        flex
        items-center
        gap-2
      "
    >

      <img
        src="https://ui-avatars.com/api/?name=User"
        class="
          w-10
          h-10
          rounded-full
        "
      >

      <span>
        ${
          JSON.parse(
            localStorage.getItem("user")
          )?.name || "User"
        }
      </span>

    </div>

  </div>

</div>

${searchBar()}

       <!-- Featured Movie -->

        <div
          id="featured-movie"
          class="
            relative
            h-[350px]
            rounded-3xl
            overflow-hidden
            mb-10
            bg-slate-900
          "
        ></div>

        <!-- Popular Movies -->

        <h2
          class="
            text-2xl
            font-bold
            mb-6
          "
        >
          Popular Movies
        </h2>

        <div
          id="movies-grid"
          class="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-5
            gap-5
          "
        ></div>

      </main>

    </div>

  `;

  setTimeout(async () => {
    // Sidebar Desktop

    const sidebarContainer =
      document.querySelector("#sidebar-container");

    sidebarContainer.appendChild(
      sidebar()
    );

    // Menú móvil

    const menuBtn =
      document.querySelector("#menu-btn");

    menuBtn?.addEventListener("click", () => {
      const existingMenu =
        document.querySelector("#mobile-menu");

      if (existingMenu) {
        existingMenu.remove();
        return;
      }

      const menu =
        document.createElement("div");

      menu.id = "mobile-menu";

      menu.className = `
        fixed
        top-0
        left-0
        w-64
        h-screen
        bg-slate-900
        z-50
        p-5
        text-white
      `;

      menu.innerHTML = `
      
        <div
          class="
            flex
            justify-between
            items-center
            mb-8
          "
        >

          <img
            src="${logo}"
            class="h-12"
          >

          <button
            id="close-menu"
            class="text-2xl text-white"
          >
            ✕
          </button>

        </div>

        <div
          class="
            flex
            flex-col
            gap-3
            text-white
          "
        >

          <button
            class="
              text-left
              p-3
              rounded-lg
              hover:bg-slate-800
            "
          >
            🏠 Home
          </button>

          <button
            class="
              text-left
              p-3
              rounded-lg
              hover:bg-slate-800
            "
          >
            🎬 Movies
          </button>

          <button
            class="
              text-left
              p-3
              rounded-lg
              hover:bg-slate-800
            "
          >
            ❤️ Favorites
          </button>

          <button
            class="
              text-left
              p-3
              rounded-lg
              hover:bg-slate-800
            "
          >
            👤 Profile
          </button>

        </div>

      `;

      document.body.appendChild(menu);

      document
        .querySelector("#close-menu")
        ?.addEventListener("click", () => {
          menu.remove();
        });
    });

    // Featured Movie

    const trendingMovies =
      await getTrendingMovies();

    const featured =
      trendingMovies[0];

    const featuredContainer =
      document.querySelector("#featured-movie");

    featuredContainer.innerHTML = `
    
      <div
        class="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style="
          background-image:
          url('https://image.tmdb.org/t/p/original${featured.backdrop_path}')
        "
      ></div>

      <div
        class="
          absolute
          inset-0
          bg-black/70
        "
      ></div>

      <div
        class="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-center
          p-8
        "
      >

        <p class="text-violet-400 mb-2">
          ⭐ FEATURED MOVIE
        </p>

        <h2
          class="
            text-4xl
            font-bold
            mb-3
          "
        >
          ${featured.title}
        </h2>

        <p
          class="
            max-w-xl
            text-slate-300
            mb-5
          "
        >
          ${featured.overview.slice(0, 180)}...
        </p>

        <button
          class="
            bg-violet-600
            hover:bg-violet-700
            px-6
            py-3
            rounded-lg
            w-fit
          "
        >
          View Details
        </button>

      </div>

    `;

    // Películas populares

    const movies =
      await getPopularMovies();

    const grid =
      document.querySelector("#movies-grid");

    grid.innerHTML =
      movies
        .slice(0, 20)
        .map(movieCard)
        .join("");
  });

  return section;
};
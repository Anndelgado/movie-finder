const routes = {};

export const registerRoute = (path, page) => {
  routes[path] = page;
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  renderRoute();
};

export const renderRoute = () => {
  const app = document.querySelector("#app");

  const currentRoute = window.location.pathname;

  const page = routes[currentRoute];

  if (!page) {
    app.innerHTML = `
      <div class="min-h-screen flex items-center justify-center">
        <h1 class="text-4xl">404 - Página no encontrada</h1>
      </div>
    `;
    return;
  }

  app.innerHTML = "";
  app.appendChild(page());
};

window.addEventListener("popstate", renderRoute);
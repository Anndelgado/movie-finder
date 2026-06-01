import { navigateTo } from "../router/router";
import { loginUser } from "../services/authService";

export const loginPage = () => {
  const section = document.createElement("section");

  section.innerHTML = `
  
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4">

    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

      <div class="text-center mb-8">

        <h1 class="text-5xl font-bold mb-8">
          🎬 <span class="text-violet-500">MovieFinder</span>
        </h1>

        <h2 class="text-4xl font-bold text-white">
          Welcome <span class="text-violet-500">back!</span>
        </h2>

        <p class="text-slate-400 mt-2">
          Sign in to continue discovering great movies
        </p>

      </div>

      <form id="login-form" class="space-y-5">

        <div>
          <label class="block text-white mb-2">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          >
        </div>

        <div>
          <label class="block text-white mb-2">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          >
        </div>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-violet-600 to-purple-500 py-3 rounded-xl text-white font-semibold hover:scale-105 duration-300"
        >
          Sign In
        </button>

      </form>

      <p class="text-center text-slate-400 mt-6">

        Don't have an account?

        <button
          id="register-link"
          class="text-violet-500 font-semibold"
          type="button"
        >
          Sign up
        </button>

      </p>

    </div>

  </div>
  
  `;

  setTimeout(() => {
    const registerLink = document.querySelector("#register-link");

    registerLink.addEventListener("click", () => {
      navigateTo("/register");
    });

    const form = document.querySelector("#login-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email =
        document.querySelector("#email").value;

      const password =
        document.querySelector("#password").value;

      const user = await loginUser(
        email,
        password
      );

      if (!user) {
        alert("Credenciales incorrectas");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      if (user.role === "admin") {
        navigateTo("/admin");
      } else {
        navigateTo("/dashboard");
      }
    });
  });

  return section;
};
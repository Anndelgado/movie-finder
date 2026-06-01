import { navigateTo } from "../router/router";
import { registerUser } from "../services/authService";

export const registerPage = () => {
  const section = document.createElement("section");

  section.innerHTML = `
  
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4">

    <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

      <div class="text-center mb-8">

        <h1 class="text-5xl font-bold mb-8">
          🎬 <span class="text-violet-500">MovieFinder</span>
        </h1>

        <h2 class="text-4xl font-bold text-white">
          Create your
          <span class="text-violet-500">
            account
          </span>
        </h2>

        <p class="text-slate-400 mt-2">
          Join MovieFinder and start your journey
        </p>

      </div>

      <form id="register-form" class="space-y-5">

        <div>
          <label class="block text-white mb-2">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          >
        </div>

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
            placeholder="Create a password"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          >
        </div>

        <div>
          <label class="block text-white mb-2">
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          >
        </div>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-violet-600 to-purple-500 py-3 rounded-xl text-white font-semibold hover:scale-105 duration-300"
        >
          Sign Up
        </button>

      </form>

      <p class="text-center text-slate-400 mt-6">

        Already have an account?

        <button
          id="login-link"
          class="text-violet-500 font-semibold"
          type="button"
        >
          Sign In
        </button>

      </p>

    </div>

  </div>

  `;

  setTimeout(() => {
    const loginLink = document.querySelector("#login-link");

    loginLink.addEventListener("click", () => {
      navigateTo("/");
    });

    const form = document.querySelector("#register-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name =
        document.querySelector("#name").value;

      const email =
        document.querySelector("#email").value;

      const password =
        document.querySelector("#password").value;

      const confirmPassword =
        document.querySelector("#confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      await registerUser({
        name,
        email,
        password,
        role: "user",
      });

      alert("Usuario registrado correctamente");

      navigateTo("/");
    });
  });

  return section;
};
# Movie Finder🎬
A modern, modular, and responsive movie exploration application built with Vanilla JavaScript (ES6), Vite, and Tailwind CSS. It features an advanced Feature-Driven Architecture and native support for custom theme switching with state persistence.

# Key Features
⚡ Modular Architecture: Structured by independent feature modules that facilitate code scaling, readability, and seamless maintenance.

🌓 Light and Dark Mode: Native support utilizing Tailwind CSS dark variants and root document classes, with automatic persistence via localStorage.

📡 Centralized HTTP Client: A unified fetch abstraction layer to manage network requests cleanly and avoid code duplication.

🔍 Asynchronous Views: Dynamic component and screen rendering based on real-time API response states.

📱 Responsive Design: Adaptable layout optimized pixel-by-pixel for mobile devices, tablets, and desktop displays.

Project Structure The project is organized under the principles of Separation of Responsibilities (SoC) and Feature-Driven Design:
 ```bash
movie-spa/
├── public/                   # Public static assets (favicons, icons)
├── src/
│   ├── assets/               # Application-wide global resources
│   │   └── styles/
│   │       └── global.css    # Tailwind directives, resets, and base styles
│   ├── core/                 # The independent core business logic
│   │   ├── services/         # Configuration and abstraction of the global HTTP client
│   │   │   └── api.client.js
│   │   └── theme/            # Theme management logic for Light / Dark mode
│   │       └── theme.manager.js
│   ├── shared/               # Cross-cutting components reusable in any module
│   │   └── components/
│   │       ├── navbar.js     # Interactive navigation bar with theme toggler
│   │       ├── footer.js     # Footer section displaying core value features
│   │       └── movie-card.js # Reusable movie card with image, year, and score badge (★)
│   ├── modules/              # Functional feature modules
│   │   ├── auth/             # Authentication logic (Login / Register)
│   │   │   ├── services/     # Session requests and validations
│   │   │   └── views/        # "Welcome Back" and "Create Account" screens
│   │   ├── movies/           # Movie catalog logic
│   │   │   ├── components/   # Search bar and features-local elements
│   │   │   ├── services/     # Feature-specific API endpoints (billboards, search)
│   │   │   └── views/        # Main dashboard screen (Banner + Adaptive Grid)
│   │   └── favorites/        # Saved/liked user movies logic
│   │       ├── components/
│   │       └── views/        # Personal favorite movie list dashboard
│   ├── app.js                # Central SPA orchestrator and Hash Router
│   └── index.html            # Main HTML single-mount container
├── package.json              # Bootstrapping scripts and project dependencies
└── tailwind.config.js        # Extended color palette and class-based dark mode setup

--

How It Works
The application intelligently manages its state and configurations right within the browser:

Theme Persistence: Dark/Light mode preferences are stored in localStorage so that the UI preserves the user's chosen aesthetic even after closing or reloading the tab.

Session Persistence: Temporary states, active filters, and live search queries are handled via sessionStorage, wiping clean automatically once the browser tab is closed.

Installation
Follow these steps to clone and set up your local development environment:


Clone the repository:

Bash
git clone https://github.com/Omar-0419/movie-finder.git

2. **Navigate to the project folder:**
 ```bash
 cd movie-finder
Install all required dependencies:

Bash
npm install

---

## Running the Application

To launch the local development server provided by Vite, run the following command in your terminal:

npm run dev
Once started, open your browser and navigate to the local URL:
👉 http://localhost:5173

Development Team
Special thanks to the team responsible for designing, architecting, and developing this project:

Omar Vizcaino — Scrum Master & Architect

Yuliannis Delgado — Core Developer

Valeria — Frontend Developer

Kerlys Bello — Frontend Developer

License
This project has been developed for academic and personal purposes. It remains available for free and educational use.

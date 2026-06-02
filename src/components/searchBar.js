export const searchBar = () => {
  return `
  
    <div class="flex gap-3 mb-8">

      <input
        id="search-input"
        type="text"
        placeholder="Search movie..."
        class="
          flex-1
          bg-slate-800
          rounded-lg
          px-4
          py-3
          outline-none
        "
      >

      <button
        id="search-btn"
        class="
          bg-violet-600
          px-6
          rounded-lg
          hover:bg-violet-700
        "
      >
        Search
      </button>

    </div>

  `;
};
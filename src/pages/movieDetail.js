export const movieDetailPage = () => {

  const section =
    document.createElement("section");

  section.className =
    "min-h-screen bg-slate-950 text-white";

  section.innerHTML = `
  
    <div class="p-8">

      <button id="back-btn">
        ← Back
      </button>

      <h1 class="text-4xl mt-8">
        Movie Detail
      </h1>

    </div>

  `;

  return section;
};
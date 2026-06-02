export const movieCard = (movie) => {

  const poster =
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return `
  
    <div
      class="
        bg-slate-900
        rounded-xl
        overflow-hidden
        hover:scale-105
        transition
        duration-300
        cursor-pointer
      "
    >

      <img
        src="${poster}"
        alt="${movie.title}"
        class="w-full h-72 object-cover"
      >

      <div class="p-3">

        <h3
          class="font-semibold text-sm"
        >
          ${movie.title}
        </h3>

        <div
          class="flex justify-between mt-2 text-xs text-slate-400"
        >

          <span>
            ${movie.release_date?.split("-")[0]}
          </span>

          <span class="text-yellow-400">
            ⭐ ${movie.vote_average.toFixed(1)}
          </span>

        </div>

      </div>

    </div>

  `;
};
//values based on https://developers.themoviedb.org/3/discover/movie-discover
const sortings = [
  {
    label: "Most Popular",
    params: {
      sort_by: "popularity.desc",
    },
  },
  {
    label: "Least Popular",
    params: {
      sort_by: "popularity.asc",
    },
  },
  {
    label: "Newest",
    params: {
      sort_by: "release_date.desc",
    },
  },
  {
    label: "Oldest",
    params: {
      sort_by: "release_date.asc",
    },
  },
  {
    label: "Best rated",
    params: {
      sort_by: "vote_average.desc",
    },
  },
  {
    label: "Worst rated",
    params: {
      sort_by: "vote_average.asc",
      "vote_count.gte": 2,
    },
  },
];

const initialSortings = {
  popular: sortings[0],
  newest: sortings[2],
  best: sortings[4],
};

//values based on https://api.themoviedb.org/3/genre/movie/list
const genres = [
  { label: "Action", params: { with_genres: "28" } },
  { label: "Adventure", params: { with_genres: "12" } },
  { label: "Animation", params: { with_genres: "16" } },
  { label: "Comedy", params: { with_genres: "35" } },
  { label: "Crime", params: { with_genres: "80" } },
  { label: "Documentary", params: { with_genres: "99" } },
  { label: "Drama", params: { with_genres: "18" } },
  { label: "Family", params: { with_genres: "10751" } },
  { label: "Fantasy", params: { with_genres: "14" } },
  { label: "History", params: { with_genres: "36" } },
  { label: "Horror", params: { with_genres: "27" } },
  { label: "Music", params: { with_genres: "10402" } },
  { label: "Mystery", params: { with_genres: "9648" } },
  { label: "Romance", params: { with_genres: "10749" } },
  { label: "Science Fiction", params: { with_genres: "878" } },
  { label: "TV Movie", params: { with_genres: "10770" } },
  { label: "Thriller", params: { with_genres: "53" } },
  { label: "War", params: { with_genres: "10752" } },
  { label: "Western", params: { with_genres: "37" } },
];

export { sortings, genres, initialSortings };

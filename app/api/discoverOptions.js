//values based on https://developers.themoviedb.org/3/discover/movie-discover
const sortings = [
  {
    name: "Most Popular",
    value: "popularity.desc",
  },
  {
    name: "Least Popular",
    value: "popularity.asc",
  },
  {
    name: "Newest",
    value: "release_date.desc",
  },
  {
    name: "Oldest",
    value: "release_date.asc",
  },
  {
    name: "Best rated",
    value: "vote_average.desc",
  },
  {
    name: "Worst rated",
    value: "vote_average.asc",
    },
];

const initialSortings = {
  popular: sortings[0].value,
  newest: sortings[2].value,
  best: sortings[4].value,
};

//values based on https://api.themoviedb.org/3/genre/movie/list
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export { sortings, genres, initialSortings };

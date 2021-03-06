/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortedMovies = [...arr];
  sortedMovies.sort(function(a, b) {
    if (a.year - b.year === 0) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  return arr.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  return arr
    .map(function(movie) {
      return movie.title;
    })
    .sort()
    .slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

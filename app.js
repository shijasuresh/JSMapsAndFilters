const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];
  
  console.log(movies);
  
  console.log("Mapping");

  console.log("Create a new array containing only the titles of the movies.");
  let movieTitles = movies.map(movie=>movie.title);
  console.log(movieTitles);

  console.log("Create a new array containing only the movie titles along with their IMDb ratings.");
  let movieTitlesRatings = movies.map(movie=>"Movie Title: " + movie.title + " and IMDb rating: " + movie.imdbRating);
  console.log(movieTitlesRatings);

  console.log("Filtering");
  
  console.log("Filter the movies to create an array of thriller movies released after the year 2000.");
  let movieAfter2000 = movies.filter(movie=>movie.year>2000);
  console.log(movieAfter2000);

  console.log("Filter the movies to create an array of drama movies with IMDb ratings above 8.5.");
  let movieHighRating = movies.filter(movie=>movie.imdbRating>8.5);
  console.log(movieHighRating);

  console.log("Filter the movies to create an array of action movies starring Leonardo DiCaprio.");
  let moviesLeo = movies.filter(movie => {
    if(movie.genre === 'Action') {
        for(let i = 0; i < movie.actors.length; i++) {
            if(movie.actors[i] === 'Leonardo DiCaprio') {
                return true;
            }
        }
    }
    return false;
  });
  console.log(moviesLeo);

  console.log("Chaining");

  console.log("Chain operations to find all drama movies featuring Christian Bale.");
  let moviesDramaBale = movies.filter(movie => {
    if(movie.genre === 'Drama') {
        for(let i = 0; i < movie.actors.length; i++) {
            if(movie.actors[i] === 'Christian Bale') {
                return true;
            }
        }
    }
    return false;
  }).map(movie=>movie.title);
  console.log(moviesDramaBale);

  console.log("Chain operations to find all drama movies featuring Tim Robbins.");
  let moviesDramaRobbins = movies.filter(movie => {
    if(movie.genre === 'Drama') {
        for(let i = 0; i < movie.actors.length; i++) {
            if(movie.actors[i] === 'Tim Robbins') {
                return true;
            }
        }
    }
    return false;
  }).map(movie=>movie.title);
  console.log(moviesDramaRobbins);

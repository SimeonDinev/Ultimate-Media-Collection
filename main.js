import express from "express";
import handlebars from "express-handlebars";

const movies = [
  {
    id: 1,
    name: "The Lord of the Rings",
    img: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY450_.jpg",
    description:
      "An epic fantasy trilogy directed by Peter Jackson, based on the novels by J.R.R. Tolkien. It follows the quest to destroy the One Ring and the final battle for Middle-earth.",
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    img: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    description:
      "A 1994 drama film directed by Frank Darabont, based on Stephen King's novella. It tells the story of Andy Dufresne, a banker sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence.",
  },
  {
    id: 3,
    name: "The Godfather",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    description:
      "A 1972 crime film directed by Francis Ford Coppola, based on Mario Puzo's novel. It chronicles the powerful Italian-American crime family of Don Vito Corleone and his son Michael's rise to power.",
  },
];
const books = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    description:
      "A novel by Harper Lee published in 1960. It is widely studied in schools in the United States and deals with serious issues such as racial inequality and rape, through the eyes of young Scout Finch.",
  },
  {
    id: 2,
    name: "1984",
    img: "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
    description:
      "A dystopian novel by George Orwell published in 1949. The novel is set in a totalitarian society ruled by the Party and its leader, Big Brother, where independent thinking is a crime.",
  },
  {
    id: 3,
    name: "The Great Gatsby",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    description:
      "A novel by F. Scott Fitzgerald published in 1925. It explores themes of wealth, class, and the American Dream, centered on the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.",
  },
];
const tvShows = [
  {
    id: 1,
    name: "Breaking Bad",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/330px-Breaking_Bad_logo.svg.png",
    description:
      "A TV series created by Vince Gilligan that aired from 2008 to 2013. It follows the story of Walter White, a high school chemistry teacher turned methamphetamine manufacturer, as he descends into the criminal underworld.",
  },
  {
    id: 2,
    name: "Game of Thrones",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Game_of_Thrones_title_card.jpg/330px-Game_of_Thrones_title_card.jpg",
    description:
      "A fantasy drama TV series based on George R. R. Martin's book series 'A Song of Ice and Fire.' It aired on HBO from 2011 to 2019 and follows the power struggles among noble families as they vie for control of the Iron Throne.",
  },
  {
    id: 3,
    name: "Stranger Things",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_Things_logo.png/330px-Stranger_Things_logo.png",
    description:
      "A sci-fi horror TV series created by the Duffer Brothers. It debuted on Netflix in 2016 and follows a group of kids in the 1980s who encounter supernatural events in their small town of Hawkins, Indiana.",
  },
];

const app = express();
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  res.render("home", {
    title: "Welcome to the Ultimate Media Collection",
  });
});

// Movies
app.get("/movies", (req, res) => {
  res.render("movies", { title: "Top 3 Movies of all time", movies: movies });
});
app.get("/movies/:movieID", (req, res) => {
  const currMovie = movies.find((x) => x.id == req.params.movieID);

  res.render("details", currMovie);
});

// TV Shows
app.get("/tv-shows", (req, res) => {
  res.render("tv-shows", {
    title: "Top 3 TV Shows of all time",
    tvShows: tvShows,
  });
});
app.get("/tv-shows/:tvShowsID", (req, res) => {
  const currTvShow = tvShows.find((x) => x.id == req.params.tvShowsID);

  res.render("details", currTvShow);
});

// Books
app.get("/books", (req, res) => {
  res.render("books", { title: "Top 3 Books of all time", books: books });
});
app.get("/books/:booksID", (req, res) => {
  const currBook = books.find((x) => x.id == req.params.booksID);

  res.render("details", currBook);
});

app.listen(5000, () => {
  console.log("Server listening on http://localhost:5000...");
});

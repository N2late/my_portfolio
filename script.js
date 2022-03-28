const movies = [
                "Eternal Sunshine of the Spotless Mind by Michel Gondry",
                "One day by David Nicholls",
                "La vita è bella by Roberto Benigni",
                "Whiplash: In Search of Perfection by Damien Chazelle",
                "Untouchables by Olivier Nakache and Éric Toledano",
                "Joker by Todd Phillips",
                "Good Will Hunting  by Gus Van Sant",
                "Dead Poets Society by Peter Weir",
                "The Fabulous Destiny of Amélie Poulain by Jean-Pierre Jeunet",
                "Before Sunrise by Richard Linklater",
                "Before Sunset by Richard Linklater",
                "Match Point by Woody Allen", 
                "Midnight in Paris by Woody Allen",
                "Annie Hall by Woody Allen",
                "When Harry Met Sally... by Rob Reiner",
                "The Truman Show: The Show of Life by Peter Weir",
                "The Shawshank Redemption by Frank Darabont",
                "The Pianist by Roman Polanski",
                "Léon by Luc Besson",
                "Shoplifters by Hirokazu Koreeda"
]

const series = [
                "Breaking Bad",
                "Sopranos",
                "Game of Thrones",
                "Love",
                "Masters of None",
                "The Office (USA)",
                "True Detective",
                "Seinfeld",
                "Better Call Saul",
                "Black Mirror",
                "Narcos",
                "Succession",
                "Peaky Blinders",
                "Ted Lasso",
                "House",
                "Fleabag"
]

const books = [
                "Meditations by Marcus Aurelius",
                "Steppenwolf by Hermann Hesse",
                "When Nietzsche Wept by Irvin D. Yalom",
                "Post Office by Charles Bukowski",
                "Ham on Rye by Charles Bukowski",
                "The Man Who Planted Trees by Jean Giono",
                "Night Train to Lisbon by Pascal Mercier"
]
// store generated titles
let titles = [];

// random number generator
let randomize = arr => {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i];
}

// function to generator a random title
const titleGenerator = val => {
    if (val === "movies") {
        val = movies;
    }
    else if (val === "series") {
        val = series;
    }
    else if (val === "books") {
        val = books;
    }
    let title = randomize(val);
    // to assure to always generate a new title
    while (titles.includes(title)) {
        titleGenerator(val)
    }
    titles.push(title);
    if (val === movies) {
        return document.getElementById("movie").innerHTML = title;
    }
    else if (val === books) {
        return document.getElementById("book").innerHTML = title;
        }
    else if (val === series) {
        return document.getElementById("serie").innerHTML = title;
    }
}
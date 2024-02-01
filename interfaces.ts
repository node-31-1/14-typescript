interface Book {
    author: Author;
    name: string;
    year: number;
}

interface Author {
    name: string;
    lastName: string;
}

const book: Book = {
    name: "Harry Potter",
    author: {
        name: "JK",
        lastName: "Rowling"
    },
    year: 1997,
}

const book2: Book = {
    name: "Narnia",
    author: {
        name: "",
        lastName: "",
    },
    year: 1950,
}


// ============================ MOVIES ========================

// interface Movie {
//     name: string;
//     year: number;
//     country: string;
//     actors: Actor[];
//     genres: string[];
// }

// interface Actor {
//     name: string;
//     birthday: Date;
//     country: string;
// }


const movie1: Movie = {
    name: "Toy Story",
    year: 1995,
    country: "USA",
    actors: [
        {
            name: "Tom Hanks",
            birthday: new Date('1970-10-10'),
            country: "USA"
        },
        {
            name: "Tim Allen",
            birthday: new Date('1970-10-10'),
            country: "USA"
        },
    ],
    genres: ['Animacion', 'Familiar']
}

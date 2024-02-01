const sum = (a: number, b: number): number => {
    return a + b;
}

const sayHi = (): void => {
    console.log("Hello world");
}

const result1 = sum(5, 8);

const result2 = sayHi();


const isEven = (num: number): "PAR" | "IMPAR" => {
    if (num % 2 === 0) return "PAR";
    else return "IMPAR";
}

const result3 = isEven(3);

if (result3 === 'IMPAR') {

}





interface Movie {
    name: string;
    year: number;
    country: string;
    actors?: Actor[];
    genres?: string[];
}

interface Actor {
    name: string;
    birthday: Date;
    country: string;
}

const movieFactory = (name: string, year: number, country: string): Movie => {
    return {
        name,
        year, 
        country,
    }
}

const movie  = movieFactory('Up', 2010, 'USA');

const a: number = 10;
const b: number = 5;
const result: number | string | boolean = a + b;

type sizeType = "XS" | "S" | "L" | "XL";

let size: sizeType = "XS";
let size1: sizeType = "XS";
let size2: sizeType = "XS";
let size3: sizeType = "XS";
size = "S";
size = 'L';
// size = 'M';
// student = "Valentina";

console.log("Hello world");


type color = "Azul" | "Amarillo" | "Rojo" | "Verde" | "purpura";
const color1: color = "Rojo";
const color2: color = "purpura";


const students: string[] = ["Nelson", "Valentina", "Guillermo"];
const students2: Array<string> = ["Nelson", "Valentina", "Guillermo"];

const myUser: [string, number, boolean] = ['Nelson', 2091234, true];



const countries: string[] = ["Colombia", "México", "Argentina", "Perú", "Chile"];


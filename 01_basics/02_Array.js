//Array part 2

const marverl_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];


// marverl_heros.push(dc_heros);

// console.log(marverl_heros);

// const allHeros  = marverl_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marverl_heros,...dc_heros];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));




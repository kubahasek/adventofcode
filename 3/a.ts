const lowerChars = Array.from(Array(26)).map((c, i) => i + 97);
const upperChars = Array.from(Array(26)).map((c, i) => i + 65);
const chars = lowerChars.concat(upperChars);
let letters = chars.map((c) => String.fromCharCode(c));
const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
let sum = 0;
lines.forEach((l) => {
  const noOfItems = l.length;
  const firstHalf = l.slice(0, noOfItems / 2);
  const secondHalf = l.slice(noOfItems / 2, noOfItems + 1);

  for (let index = 0; index < firstHalf.length; index++) {
    const letter = firstHalf[index];
    if (secondHalf.includes(letter)) {
      sum += letters.indexOf(letter) + 1;
      break;
    }
  }
});
console.log(sum);

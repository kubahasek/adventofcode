const lowerChars = Array.from(Array(26)).map((c, i) => i + 97);
const upperChars = Array.from(Array(26)).map((c, i) => i + 65);
const chars = lowerChars.concat(upperChars);
let letters = chars.map((c) => String.fromCharCode(c));
const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
let groups: [[string, string, string]] = [["", "", ""]];
for (let index = 0; index < lines.length; index += 3) {
  const line1 = lines[index];
  const line2 = lines[index + 1];
  const line3 = lines[index + 2];
  groups.push([line1, line2, line3]);
}
let sum = 0;
groups.forEach((g) => {
  for (let index = 0; index < g.length; index += 3) {
    const line1 = g[0];
    const line2 = g[1];
    const line3 = g[2];
    for (let index = 0; index < line1.length; index++) {
      const letter = line1[index];
      if (line2.includes(letter) && line3.includes(letter)) {
        sum += letters.indexOf(letter) + 1;
        break;
      }
    }
  }
});
console.log(sum);

// let sum = 0;
// lines.forEach((l) => {
// for (let index = 0; index < firstHalf.length; index++) {
// const letter = firstHalf[index];
// if (secondHalf.includes(letter)) {
//       console.log(letter, letters.indexOf(letter) + 1);
//     sum += letters.indexOf(letter) + 1;
//   break;
// }
// }
// });
// console.log(sum);

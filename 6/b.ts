//const input = await Deno.readTextFile("test.txt");
const input = await Deno.readTextFile("./input.txt");
const text = input.split("");
let counter = 13;
let chars = 0;
for (const char in text) {
  const lastFour = text.slice(counter - 14, counter);
  const set = new Set(lastFour);
  if (set.size === 14) {
    break;
  }
  counter++;
}
console.log(counter);

// const input = await Deno.readTextFile("test.txt");
const input = await Deno.readTextFile("./input.txt");
const text = input.split("");
let counter = 3;
let chars = 0;
for (const char in text) {
  const lastFour = text.slice(counter - 4, counter);
  const set = new Set(lastFour);
  if (set.size === 4) {
    break;
  }
  counter++;
}
console.log(counter);

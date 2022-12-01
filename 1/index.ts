const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
const max: Array<number> = [];
let currentMax = 0;
for (let index = 0; index < lines.length; index++) {
  const element = lines[index];
  if (element == "") {
    max.push(currentMax);
    currentMax = 0;
    continue;
  }
  const num = parseInt(element);
  currentMax += num;
}
let final = 0;
const topThree: Array<number> = [];
max.forEach((n) => {
  if (n > final) {
    final = n;
    topThree.push(n);
  }
});
console.log(
  max
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, current) => (total += current))
);

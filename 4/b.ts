const input = await Deno.readTextFile("input.txt");
//const input = await Deno.readTextFile("test.txt");
const lines = input.split("\n").map((line) => line.split(","));

let duplicates = 0;

for (const pair of lines) {
  const [l1, r1] = pair[0].split("-").map((x) => parseInt(x));
  const [l2, r2] = pair[1].split("-").map((x) => parseInt(x));

  const overlaps = l1 <= r2 && l2 <= r1;
  if (overlaps) duplicates++;
}
console.log(duplicates);

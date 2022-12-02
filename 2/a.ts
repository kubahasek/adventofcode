const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
let score = 0;
lines.forEach((element) => {
  const round: string[] = element.split(" ");
  console.log(round);

  const [them, me] = [round[0], round[1]];
  if (me === "X") score += 1;
  if (me === "Y") score += 2;
  if (me === "Z") score += 3;

  if (
    (me === "X" && them === "A") ||
    (me === "Y" && them === "B") ||
    (me === "Z" && them === "C")
  ) {
    score += 3;
  }

  if (me === "X" && them === "C") score += 6;
  if (me === "Y" && them === "A") score += 6;
  if (me === "Z" && them === "B") score += 6;
});
console.log(score);

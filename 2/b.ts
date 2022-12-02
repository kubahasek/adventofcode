const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
let score = 0;
const values = { A: 1, B: 2, C: 3 };
lines.forEach((element) => {
  const round: string[] = element.split(" ");
  console.log(round);

  let roundVal = 0;

  const them = round[0];

  const result = round[1];

  if (result === "X") {
    roundVal +=
      0 +
      (them === "A" ? values["C"] : them === "B" ? values["A"] : values["B"]);
  }
  if (result === "Y") roundVal += 3 + values[them];
  if (result === "Z") {
    roundVal +=
      6 +
      (them === "A" ? values["B"] : them === "B" ? values["C"] : values["A"]);
  }
  console.log(roundVal);

  score += roundVal;
});
console.log(score);

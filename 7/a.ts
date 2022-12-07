const input = await Deno.readTextFile("test.txt");
// const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");
let currFolder = "";
let tree = {};
lines.forEach((l) => {
  if (l.startsWith("$")) {
    if (l.includes("cd")) {
      currFolder = l.charAt(l.length - 1);
      console.log(currFolder);
    }
    if (l.includes("ls")) {
      const index = lines.findIndex((line) => line === l) + 1;
      console.log("folder", currFolder);

      for (let i = index; i < lines.length; i++) {
        const element = lines[i];
        console.log(element);
        if (element.startsWith("$")) {
          break;
        }
      }
    }
  }
});

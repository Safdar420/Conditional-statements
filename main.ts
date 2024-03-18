//  Conditional statements part 1
let Friend1: string = "Safdar Ali";
let Friend2: string = "Sardar Ali";
let Friend3: string = "Shamshad Ali";
if (Friend1 === "Sardar Ali" && Friend2 === "Safdar Ali") {
  console.log(`${Friend1} is your friend `);
} else if (Friend1 != Friend2 && Friend3 != Friend2) {
  console.log(`${Friend2} is your friend`);
} else if (Friend1 === Friend1 && Friend2 === Friend1) {
  console.log(`${Friend3} is your friend`);
}

//  Conditional statements part 2

let Favouritecolors: string[] = ["Green", "Pink", "Orange"];

if (Favouritecolors.includes("Green") || Favouritecolors.includes("Red")) {
  console.log("your Favourite color is Green");
} else if (
  Favouritecolors.includes("Purple") ||
  Favouritecolors.includes("Yellow")
) {
  console.log("your Favourite color is Purple");
} else if (
  Favouritecolors.includes("red") ||
  Favouritecolors.includes("Yellow")
) {
  console.log("your Favourite color is Red");
} else if (
  Favouritecolors.includes("White") ||
  Favouritecolors.includes("Black")
) {
  console.log("your Favourite color is White");
} else if (
  Favouritecolors.includes("darksalmon") ||
  Favouritecolors.includes("blue")
) {
  console.log("your Favourite color is blue");
} else if (
  Favouritecolors.includes("brown") ||
  Favouritecolors.includes("black")
) {
  console.log("your Favourite color is brown");
} else if (
  Favouritecolors.includes("skyblue") ||
  Favouritecolors.includes("pink")
) {
  console.log("your Favourite color is Pink");
} else if (
  Favouritecolors.includes("Purple") ||
  Favouritecolors.includes("orange")
) {
  console.log("your Favourite color is orange");
}

// Conditional statements part 3

let Captain1: string = "Rizwan";
let Captain2: string = "Shaheen";
if (
  (Captain1 === "Rizwan " && Captain2 === "Afridi") ||
  (Captain2 === "Shaheen" && Captain1 === "Rizwan")
) {
  console.log("Pakistan team will be win the T20 world cup");
}
else if (
  (Captain1 === "Baber Azam " && Captain2 === "Afridi") ||
  (Captain2 === "Baber Azam" && Captain1 === "Rizwan")
) {
  console.log("Pakistan team will be win the Testcricket world cup");
}
else if (
  (Captain1 === "Rizwan " && Captain2 === "Baber Azam") ||
  (Captain2 === "Shaheen" && Captain1 === "Baber Azam")
) {
  console.log("Pakistan team will be win the ODI world cup");
}

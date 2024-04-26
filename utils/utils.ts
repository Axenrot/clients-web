export function capitalizeThis(str: string) {
  str = str.toLowerCase();
  return str
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const onlyNumbers = (text: string) => {
  if (text) {
    return text
      .split("")
      .filter((letter) => letter.match(/\d/))
      .join("");
  } else {
    return "";
  }
};

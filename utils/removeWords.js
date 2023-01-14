export default function removeWords(words) {
  console.log("SDsdsds", words);

  const string = words;

  const modifiedString = string.substring(string.indexOf(":") + 2);
  return modifiedString;
}

export default function sortByConditions(chars) {
  const sortChars = chars.sort((x, y) => (Number(x.health) < Number(y.health) ? 1 : -1));
  return sortChars;
}

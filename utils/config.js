export const filteredParts = ["details", "url"];
export const orderOfProps = [
  "name",
  "school",
  "level",
  "castingTime",
  "range",
  "components",
  "duration",
  "details",
  "url",
];
// get all the property keys except for details in an array
export const spellKeys = orderOfProps.filter((k) => !filteredParts.includes(k));

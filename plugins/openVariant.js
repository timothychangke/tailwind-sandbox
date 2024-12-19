// import the plugin function from tailwindcss
const plugin = require("tailwindcss/plugin");

const openVariant = plugin(({ addVariant }) => {
  // the first argument is the name of the created variant and the second is the functionality when this variant is applied
  // the ampersand indicates where the variant is added into the class list, the merge directive is used to target higher specificity for the peer open elements
  addVariant("group-open", ":merge(.group).open &");
  addVariant("peer-open", ":merge(.peer).open ~ &");
});

module.exports = openVariant;

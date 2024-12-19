const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities({
      // this takes in a dynamic value accessible to the function
      "animation-delay": (value) => {
        return {
          animationDelay: value,
        };
      },
    }, {
        values: theme("animationDelay")
    });
  },
  {
    theme: {
      // keys in classname which correspond to their actual delay timings
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  }
);
module.exports = animationDelay
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkmode is driven via a dark selector
  darkMode: "selector",
  //any files contained in ./src and have the html and js extensions and contain tailwind css classes will be processed to output.css
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      // a new classname of animation-wavey is created with this scalling animation
      animation: {
        wavey: "wavey 1000ms linear infinite",
      },
    },
  },
  // register the new plugins
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
  ],
};

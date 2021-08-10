const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mascot: resolve(__dirname, "mascot/index.html"),
      },
    },
  },
};

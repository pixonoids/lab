const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mascott: resolve(__dirname, "mascott/index.html"),
      },
    },
  },
};

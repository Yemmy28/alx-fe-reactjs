module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",  // Use Babel to transform JSX and JavaScript files
    },
    testEnvironment: "jsdom",  // Simulate a browser-like environment for React components
  };
  
module.exports = {
  //...
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.m?js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  testEnvironment: "jsdom",
};

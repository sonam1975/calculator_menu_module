module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ],
  env: {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
}


config.module.rules.push({
  test: /\.(png|jpg|gif|svg)$/,
  use: [
    {
      loader: "file-loader",
      options: {},
    },
  ],
});

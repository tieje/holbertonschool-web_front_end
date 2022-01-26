To check my work, please do the following:

1. Change `template` in webpack.config.js to the specific html file that you want to check out.

```
  plugins: [
    new HtmlWebpackPlugin({
      template: '5-index.html'
    })
```

2. Run `npm run build`
3. Run `npm run serve`

Some or all files in this repo were generated using [hb-file-creator](https://github.com/tieje/hb-file-creator)

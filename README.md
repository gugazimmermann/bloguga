URL: https://blog-ar6zfl19r.vercel.app/

Blog project to study made in **React + Next.js + Google Blogger API**

---

create a `./next.config.js` file with the content, and change: YOUR-BLOG-ID, YOUR-API-KEY.

```
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(["BLOGGER_URL", "API_KEY"])
    );
    return config;
  },
  env: {
    BLOGGER_URL:
      "https://www.googleapis.com/blogger/v3/blogs/YOUR-BLOG-ID/posts",
    API_KEY: "YOUR-API-KEY",
  },
};
```
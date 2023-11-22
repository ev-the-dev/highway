# highway 🛣️

This is a highly opinionated ESLint, with Typescript plugins, ruleset. Currently only one configuration is exported: the "full" one.

author: [ev-the-dev](https://github.com/ev-the-dev "GitHub Profile")

### Installing From NPM Registry

---

```sh
npm i -D @ev-the-dev/highway
```

<br>

### Installing from GitHub Registry

---

In order to install this package from GitHub you'll need to configure the package registry and an appropriate GitHub [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens "Managing Personal Access Tokens")(PAT).
You need these Personal Access Tokens to install **_any_** package from the GitHub registry.

Once you have your PAT handy create an `.npmrc` file and paste this into it:

```txt
//npm.pkg.github.com/:_authToken={YOUR_TOKEN}
@ev-the-dev:registry=https://npm.pkg.github.com
```

Just make sure to replace `{YOUR_TOKEN}` with your actual PAT token you generated from GitHub.

Once your `.npmrc` file is setup you can run the normal npm install script:

```sh
npm i -D @ev-the-dev/highway
```

<br>

### Including `highway` rules in your code

---

`highway` uses ESLint's new flat config file format. To opt into this you need to create an `eslint.config.js` file at your root project directory.

If you want the full config and do not need to provide any overrides then in your config file it's as easy as doing this:

```js
import highway from "@ev-the-dev/highway";

export default highway.configs.full;
```

Alternatively, if you'd like to include some overrides in the flat file format you would need to do something like this:

```js
import highway from "@ev-the-dev/highway";

export default [
  ...highway.configs.full,
  {
    ...overrides,
  },
];
```

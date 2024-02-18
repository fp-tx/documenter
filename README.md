# `@fp-tx/template`

A template for creating `@fp-tx` libraries.

## New Clone TODO

- [ ] `package.json`: Update name, author, description, git url, and issues URL
- [ ] Update License
- [ ] Adjust prettier and eslint config to preference
- [ ] Update README

## Remarks

### Build

`@fp-tx/template` uses `@fp-tx/build-tools` and `tsup` under the hood in order to build the library. See [`@fp-tx/build-tools`](https://github.com/fp-tx/build-tools) for the default options, adjusting the build configuration is possible in `tsup.config.js`.

It is recommended for your library to have a single entrypoint with namespaced exported modules. `@fp-tx/core` currently uses camelcased modules, however it will use pascal-cased modules in the near future.

By default `build-tools` will generate both 'require' `js` files, and 'module' `mjs` files along with their corresponding `.d.ts` and `.d.mts` declaration files respectively. This method, though maximally compatible with Node modules, bundling, and build processes, is prone to the [Dual Package Hazard](https://nodejs.org/api/packages.html#dual-package-hazard). Be cognizant of the possibility of two different file types (i.e. `.js` and `.mjs`) running in the same execution context. To mitigate this, `build-tools` adjusts all relative imports for `.js` and `.mjs` files by adding the proper extension. Additionally, `build-tools` adds the proper extension in emitted `.d.ts` and `.d.mts` files for relative imports, exports, and module declarations.

### `template` Roadmap and TODO

This is the initial conception of the template roadmap, and there is more to do.

1. Continuous Deployment – `@fp-tx/core` uses a method of publishing where the `main` tag in npm corresponds to the latest CI build in main. This system is not currently present in this template repository.
2. Documentation – Once the documentation solution is created for `core`, we will adopt it here.

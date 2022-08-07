# LWC-TS Boilerplate Example

The **LWC TS Boilerplate** example contains the minimum code needed to get a simple Single Page Application (SPA) on LWR running in Typescript.

## Project Setup

The directory structure looks like this:

```
scripts/
  └── start-server.mjs  // create and start server
src/
  ├── assets/           // static assets
  │   └── recipes-logo.png
  └── modules/          // lwc modules
      └── example/
          └── app/
              ├── app.css
              ├── app.html
              └── app.ts
lwr.config.json         // lwr configuration
package.json            // npm packaging configuration
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project. The **LWC TS Boilerplate** example has one LWC module and one server-side route.

```json
// lwr.config.json
{
    "lwc": { "modules": [{ "dir": "$rootDir/src/modules" }] },
    "routes": [
        {
            "id": "example",
            "path": "/",
            "rootComponent": "example/app"
        }
    ]
}
```

## Running the Project

```bash
yarn install
yarn build
yarn start # prod mode and ESM format
```

Open the site at [http://localhost:3000](http://localhost:3000)

To start the project in a different mode:

-   dev: `yarn dev`
-   compat: `yarn start:compat`
-   prod-compat: `yarn start:prod-compat`

## Generate a tsconfig.json file
There is a way to use the TypeScript compiler without installing TypeScript. The npx tool can be used to temporarily install TypeScript and run the compiler.

```bash
npx -p typescript tsc --init
```

- The -p (or --package) argument tells npx which package provides the tsc command. In this case it is the typescript package.
- The command first downloads and installs the typescript npm package.
- tsc is the executable name of the TypeScript compiler. So, once typescript has been installed, the TypeScript compiler is invoked.
- The --init argument must be passed to generate the tsconfig.json file.

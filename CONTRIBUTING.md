## Workflow
TBD

## Project layout
The structure of this project was shaped based on the [turbopack's example](https://github.com/vercel/turborepo/tree/main/examples/design-system).

`packages` directory contains code mostly generated by the [icommon-tools](https://github.com/graaphscom/icommon-tools), with the following exceptions:
```
+ packages
|-- components // tools to render icons in React
|-- eslint-config 
|-- typescript-config
```

## Managing dependencies
[pnpm](https://pnpm.io/) is the package manager in this project.

To add a dependency, run:
```zsh
pnpm --filter <filters> add <pkg>
```
Where `<filters>` is specified according to the [pnpm's docs](https://pnpm.io/filtering).

## Code formatting
The large amount of available icons results in a lot of files and code.
To not waste CPU time, the only checked package is `packages/components`.

It's [icommon-tools'](https://github.com/graaphscom/icommon-tools) responsibility to generate well-formatted code.

## Typescript compilation


## VSCode config
TBD

## Publishing
TBD
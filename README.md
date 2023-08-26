# Template for Typescript Monorepos with initial setup

## Create a package:

```
mkdir packages/<package-name>
npm init --scope @<scope-name> --workspace ./packages/<package_name> -y
```

## Build a project

```
npm run build --workspace ./packages/<package_name>
```

## Install package in workspace

```
npm install moment --workspace ./packages/<package-name>
```

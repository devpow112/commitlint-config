# CommitLint Configuration

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![Release][Release Badge]][Release Workflow]
[![Vulnerabilities][Vulnerabilities Badge]][Vulnerabilities Report]
[![Node Version][Node Version Badge]](package.json#L35-L36)

Shareable commitlint configuration.

## Installation

```console
npm i -D @devpow112/commitlint-config
```

## Usage

The shareable config can be configured in the [CommitLint configuration]
file.

```json
{
  "extends": "@devpow112/commitlint-config"
}
```

## Development

Development can be done on any machine that can install **Node.js**. Only the
latest LTS version is tested against.

### Install Dependencies

Install dependencies via `npm`.

```console
npm i
```

### Linting

Execute linters via `npm`.

```console
# git, javascript and markdown
npm run lint

# git only
npm run lint:git

# javascript only
npm run lint:js

# markdown only
npm run lint:md
```

### Formatting

Execute formatters via `npm`.

```console
# javascript and markdown
npm run format

# javascript only
npm run format:js

# markdown only
npm run format:md
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/commitlint-config?label=License
[Version Badge]: https://img.shields.io/npm/v/@devpow112/commitlint-config?label=Version
[Version Package]: https://www.npmjs.com/@devpow112/commitlint-config
[Node Version Badge]: https://img.shields.io/node/v/@devpow112/commitlint-config
[Release Badge]: https://github.com/devpow112/commitlint-config/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/commitlint-config/actions/workflows/release.yml?query=branch%3Amain
[Vulnerabilities Badge]: https://img.shields.io/snyk/vulnerabilities/github/devpow112/commitlint-config?label=Vulnerabilities
[Vulnerabilities Report]: https://snyk.io/test/github/devpow112/commitlint-config
[CommitLint configuration]: https://github.com/conventional-changelog/commitlint/blob/master/docs/concepts-shareable-config.md

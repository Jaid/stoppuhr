# stoppuhr


<a href="https://raw.githubusercontent.com/jaid/stoppuhr/master/license.txt"><img src="https://img.shields.io/github/license/jaid/stoppuhr?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor stoppuhr"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/stoppuhr/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fstoppuhr%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/stoppuhr/commits"><img src="https://img.shields.io/github/commits-since/jaid/stoppuhr/v1.0.1?style=flat-square&logo=github" alt="Commits since v1.0.1"/></a> <a href="https://github.com/jaid/stoppuhr/commits"><img src="https://img.shields.io/github/last-commit/jaid/stoppuhr?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/stoppuhr/issues"><img src="https://img.shields.io/github/issues/jaid/stoppuhr?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/stoppuhr"><img src="https://img.shields.io/npm/v/stoppuhr?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/stoppuhr/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/stoppuhr?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/stoppuhr"><img src="https://img.shields.io/npm/dm/stoppuhr?style=flat-square&logo=npm" alt="Downloads"/></a>

**Simple execution time tracker class.**





## Installation

<a href="https://npmjs.com/package/stoppuhr"><img src="https://img.shields.io/badge/npm-stoppuhr-C23039?style=flat-square&logo=npm" alt="stoppuhr on npm"/></a>

```bash
npm install --save stoppuhr@^1.0.1
```

<a href="https://yarnpkg.com/package/stoppuhr"><img src="https://img.shields.io/badge/Yarn-stoppuhr-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="stoppuhr on Yarn"/></a>

```bash
yarn add stoppuhr@^1.0.1
```

<a href="https://github.com/jaid/stoppuhr/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/stoppuhr-24282e?style=flat-square&logo=github" alt="@jaid/stoppuhr on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/stoppuhr@^1.0.1
```



## Example


```javascript
import Stoppuhr from "stoppuhr"

const stoppuhr = new StoppUhr

function resolve() {
  const result = stoppuhr.total()
  const result2 = stoppuhr.totalText()
}

setTimeout(resolve, 70000)
```

Variable `result` will be:

```javascript
70002
```
Variable `result2` will be:

```javascript
"1m 10s 2ms"
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/stoppuhr.git
cd stoppuhr
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/stoppuhr/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)

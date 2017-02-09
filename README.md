# react-to-mdl (Material Design Lite)

React ES6 components ready to be MDL upgraded

**NOTICE:** The default branch for this repo is **master** and it might contain code _under development_, including the contents of this README. Check the [releases](https://github.com/iporaitech/react-to-mdl/releases) for stable code and docs.

## Install Instructions

1. `npm install material-design-lite --save`.
2. `npm install https://github.com/iporaitech/react-to-mdl/tarball/master --save`

NOTICE:
* this package depends on js from material-design-lite, specifically its `componentHandler`. In future releases we'll try to not depend on it anymore.
* this package is not published in NPM yet.
* you can also install an specific release by replacing master with the version
i.e., `npm install https://github.com/iporaitech/react-to-mdl/tarball/v0.1.0 --save`

## Usage Examples

See examples of this in:

1. [examples](examples) (WIP)
2. In [pwr2](https://github.com/iporaitech/pwr2-docker) project under **ui** directory

You might also want to take a look at config used to setup a
[webpack-dev-server](webpack-dev-server.config.js) with Hot Module Replacement for React.

## About `mdlUpgrade`

It is very important to note that the `mdlUpgrade()` function exported from this package receives either a **functional component** or a **class component** extending `React.Component` and in either case returns a **class component** so it can upgrade elements when `componentDidMount()` and downgrade them when `componentWillUnmount()`. The exact behavior if another _kind of class_ is passed is _unknown_.

## TODO

1. Other Material Design Lite components
2. Tests and linting.
3. Improve docs and examples (leverage pwr2 docs infrastructure)
4. Lots of other stuff.

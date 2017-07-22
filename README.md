# Desktop Apps with Javascript (@felixrieseberg - slack, microsoft)

## Platforms
- Windows, macOS, Linux and all their operating systems
- Electron allows companies ot build for all Platforms
- Photoshop, slack, invidea, github, spotify, atom, whatapp, wordpress, etc all build apps in JavaScript

## build something in atom/sublime
- https://nodejs.org/en/download/package-manager/
- Electron is composed of:
  - nodejs (js)
  - chrome
  - C++ (default app, notification, media in C++, can always write own C++ if not available in electron)
- Electron:
  - Starts main process (no window, invisible node-like process, node + electron): from this process, can open tons of Windows
  - Renderer Process: opens main Window (node, electron, chrome)
    - Can be multiple (call/post, etc)
    - Can talk to each other through Main Process, not possible in browser

## Getting Started
- $ npm init (package.json tells which files launch to create app: contains name, main, script)
  - main: index.js by default
  - script section tells you what to run: start: "electron ."
- $ node . (runs in terminal)
- $ npm install --save electron (declared dependency on electron)
- $ npm start
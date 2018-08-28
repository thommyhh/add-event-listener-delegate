# add-event-listener-delegate

This is a light-weight library for adding event listeners that can handle delegation.
This behaves similar to the `jQuery.on()` method. The package is meant to be used in
a build change with `browserify` or `webpack`, that can convert the `require`/`import` into
code the browser can interpret.

# Installation
Add `add-event-listener-delegate` to your projects `package.json` and run
```bash
npm install
# or
yarn
```
or use
```bash
npm install add-event-listener-delegate --save-dev
# or
yarn add add-event-listener-delegate --dev
```
to install the package.

# Usage
In your javascript use
```javascript
let addEventListenerDelegate = require('add-event-listener-delegate')
```
or
```javascript
import addEventListenerDelegate from 'add-event-listener-delegate'
```

If you need to have the function in global namespace use
```javascript
window.addEventListenerDelegate = addEventListenerDelegate
```

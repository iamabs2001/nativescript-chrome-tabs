# Nativescript Chrome Tabs ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 


[![npm](https://img.shields.io/npm/v/nativescript-chrome-tabs)](https://www.npmjs.com/package/nativescript-chrome-tabs)
![NPM](https://img.shields.io/npm/l/nativescript-chrome-tabs)
[![Build Status](https://travis-ci.org/iamabs2001/nativescript-chrome-tabs.svg?branch=master)](https://travis-ci.org/iamabs2001/nativescript-chrome-tabs)
![npm](https://img.shields.io/npm/dt/nativescript-chrome-tabs)
![GitHub issues](https://img.shields.io/github/issues/iamabs2001/nativescript-chrome-tabs)
![Status](https://img.shields.io/badge/status-working-green)
[![Twitter Follow](https://img.shields.io/twitter/follow/iamabs2001?style=social)](https://twitter.com/iamabs2001)

Chrome Tabs Plugin to open a custom chrome/safari tabs in android & ios.

## Installation

```
tns plugin add nativescript-chrome-tabs
```
<hr>

## Demo 

| ![Demo 1](screenshots/1.png) | ![Demo 2](screenshots/2.png) |
| ----------- | ----------- |
| ![Demo 3](screenshots/3.png) | ![Demo 4](screenshots/4.png) |

<hr>

## Usage 

```html
<Button text="click" (tap)="myCustomWeb();">
```

### Javascript

```javascript
var { initChromeTab, openChromeTab } = require('nativescript-chrome-tabs');

constructor() { 
    initChromeTab(); 
}

function myCustomWeb() {
    openChromeTab({
        url: 'http://google.com',
        toolbarColor: '#0361cc',
        toolbarControlsColor: '#303F9F'
    });
}
```

### Typescript

```typescript
import { initChromeTab, openChromeTab } from "nativescript-chrome-tabs";

constructor() { 
    initChromeTab(); 
}

myCustomWeb() {
    openChromeTab({
        url: 'http://google.com',
        toolbarColor: '#0361cc',
        toolbarControlsColor: '#303F9F'
    });
}
```

<hr>

## API (Properties)

| Property | Default | Description |
| --- | --- | --- |
| url | **required** | The URL to open |
| showTitle | false | Shows title bar in the webview |
| toolbarColor | undefined | Color of the toolbar |
| toolbarControlsColor | undefined | (only iOS) color of buttons on toolbar |
| isClosed | undefined | callback function that will be called when webview is closed |


<hr>

## API (Methods)

| Method | Type | Returns |Description |
| --- | --- | --- | --- |
| initChromeTab(); | constructor | void | To Initialize Chrome Tab |
| openChromeTab(url : String, toolbarColor : String, toolbarControlsColor : String); | method | void | To Open a Chrome Tab |

<hr>

https://developer.chrome.com/docs/multidevice/android/customtabs/
# Nativescript Chrome Tabs ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 


![npm](https://img.shields.io/npm/v/nativescript-chrome-tabs)
[![Build Status](https://travis-ci.org/iamabs2001/nativescript-chrome-tabs.svg?branch=master)](https://travis-ci.org/iamabs2001/nativescript-chrome-tabs)

Chrome Tabs Plugin to open a custom chrome tabs in android & ios.

## Installation

```
tns plugin add nativescript-chrome-tabs
```

## Usage 

```html
<Button text="click to view" (tap)="myCustomWeb();">
```

### javascript

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

### typescript

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

## API (Properties)

| Property | Default | Description |
| --- | --- | --- |
| url | **required** | The URL to open |
| showTitle | false | Shows title bar in the webview |
| toolbarColor | undefined | Color of the toolbar |
| toolbarControlsColor | undefined | (only iOS) color of buttons on toolbar |
| isClosed | undefined | callback function that will be called when webview is closed |


## API (Methods)

| Method | Type | Returns |Description |
| --- | --- | --- | --- |
| initChromeTab(); | constructor | void | To Initialize Chrome Tab |
| openChromeTab(url : String, toolbarColor : String, toolbarControlsColor : String); | method | void | To Open a Chrome Tab |

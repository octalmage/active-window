# active-window
> Get active window title in Node.js.

Currently only supports Mac OS X. 

## Usage 

```
var activeWindow = require("active-window");

activeWindow(function(window)
{
  console.log("App: " + window.app);
  console.log("Title: " + window.title);
});
```

## License 

MIT

# active-window
> Get active window title in Node.js.

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

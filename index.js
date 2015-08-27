var exec = require("child_process").exec;
var multiline = require("multiline");

//Applescript to get active window title.
var getWindowScript = multiline(function(){/*
global frontApp, frontAppName, windowTitle

set windowTitle to ""
tell application "System Events"
	set frontApp to first application process whose frontmost is true
	set frontAppName to name of frontApp
	tell process frontAppName
		tell (1st window whose value of attribute "AXMain" is true)
			set windowTitle to value of attribute "AXTitle"
		end tell
	end tell
end tell

return {frontAppName, windowTitle}
*/});

module.exports = function(callback)
{
    //Run applescript from shell.
    var script = "osascript -e '" + getWindowScript + "'";
        
    exec(script, function(error, stdout, stderr)
    {
        var active = {};
        var active_a = stdout.split(",");
        
        if (typeof active_a[0] !== "undefined")
            active.app = active_a[0];
    
        
        if (typeof active_a[1] !== "undefined")
            active.title = active_a[1].replace(/\n$/, "").replace(/^\s/, "");
    
        callback(active);
    });
};
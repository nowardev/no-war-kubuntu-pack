////////function remove in case of error of first remove :S
function remove()
{
  for (i in panelIds) {
        

	panelById(panelIds[i]).remove()
    }
  
}
//////////////////////////////////////////////////////////


/////function remove standard///////////////////////////////
function RemoveOldPanels()
{
    for (i in panelIds) {
       // panelById(panelIds[i]).remove()
       p = panelById(panelIds[i]);
       if (typeof p === "undefined") {
       print("E: Couldn't find first panel");
       remove() //load the remove function in case of problems
       }
        else 	{
	  panelById(panelIds[i]).remove()
	  	} 
                                    }
}

RemoveOldPanels() //load the function 
 //////////////////////////////////////////////////////////



//start another function to create panels layout
function macstyle(){
  var panel = new Panel
if (panelIds.length == 1) {
    // panel.location = 'bottom'
    panel.location = 'top'
}


panel.height = 25


launcher = panel.addWidget("simplelauncher");
launcher.writeConfig("format", "Description");
launcher.writeConfig("showMenuTitles", "true");
launcher.writeConfig("views", "Applications,Favorites,Computer,Settings,RunCommand,Leave");



var menubar = panel.addWidget("menubar")
//menubar.writeConfig("useButtonFormFactor", "false");


panel.addWidget("panelspacer_internal")


    var dolphin = panel.addWidget("quicklaunch");
    dolphin.writeConfig("iconUrls","file:////usr/share/applications/kde4/dolphin.desktop")

var firefox = panel.addWidget("quicklaunch")
firefox.writeConfig("iconUrls","file:///usr/share/applications/firefox.desktop")


var systemsettings = panel.addWidget("quicklaunch");
systemsettings.writeConfig("iconUrls","file:////usr/share/applications/kde4/systemsettings.desktop")

var help = panel.addWidget("quicklaunch")
//qlaunch.writeConfig("iconSize", "24")
help.writeConfig("iconUrls","file:///usr/share/applications/kde4/Help.desktop")




 



panel.addWidget("trash")
var systemtray = panel.addWidget("systemtray")

var pager = panel.addWidget("pager");
pager.writeGlobalConfig("rows", "1");


var clock = panel.addWidget("digital-clock");
clock.writeConfig("showDate", "true");
clock.writeConfig("showDay", "false");
//clock.writeConfig("showSeconds", "false");
clock.writeConfig("showYear", "false");
clock.writeConfig("showShadow", "false");
//clock.writeConfig("showTimezone", "true");
clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0");
clock.writeConfig("useCustomColor", "true");
clock.writeConfig("plainClockColor", "255,255,255");
clock.writeConfig("plainClockDrawShadow", "false");

lockout = panel.addWidget("lockout");
//lockout.writeConfig("showHibernateButton","true");
lockout.writeConfig("showLogoutButton","true");
lockout.writeConfig("showLockButton","false");
lockout.writeConfig("showSleepButton","false");
lockout.writeConfig("showSwitchUserButton","false");

  
}

macstyle()




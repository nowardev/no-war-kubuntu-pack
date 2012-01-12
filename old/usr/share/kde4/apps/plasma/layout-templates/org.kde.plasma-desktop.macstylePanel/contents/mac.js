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

var dolphin = panel.addWidget("quicklaunch");
dolphin.writeConfig("iconUrls","file:////usr/share/applications/kde4/dolphin.desktop");

var menubar = panel.addWidget("menubar")
//menubar.writeConfig("useButtonFormFactor", "false");


panel.addWidget("panelspacer_internal")

var help = panel.addWidget("quicklaunch")
//qlaunch.writeConfig("iconSize", "24")
help.writeConfig("iconUrls","file:///usr/share/applications/kde4/Help.desktop")
  

panel.addWidget("trash")
var systemtray = panel.addWidget("systemtray")


var clock = panel.addWidget("digital-clock");
clock.writeConfig("showDate", "true");
clock.writeConfig("showDay", "true");
clock.writeConfig("showSeconds", "true");
clock.writeConfig("showYear", "true");
clock.writeConfig("showShadow", "false");
clock.writeConfig("showYear", "true");
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

  

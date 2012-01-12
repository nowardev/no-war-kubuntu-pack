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
function nowardev(){
var panel = new Panel
if (panelIds.length == 1) {
    // panel.location = 'bottom'
    panel.location = 'top'
}

panel.height = 25

launcher = panel.addWidget("lancelot_part");
launcher.writeConfig("iconLocation", "start-here-kde");
launcher.writeConfig("iconClickActivation", "true");
launcher.writeConfig("contentsExtenderPosition", "1");
launcher.writeConfig("searchHistory", "firefox");
launcher.writeConfig("showSearchBox", "true");
launcher.writeConfig("partData", "model=FavoriteApplications&type=list&version=1.0\nmodel=Folder%20applications%3A%2FMultimedia%2F&type=list&version=1.0\nmodel=Devices%2FRemovable&type=list&version=1.0\nmodel=Devices%2FFixed&type=list&version=1.0\nmodel=System&type=list&version=1.0\nmodel=OpenDocuments&type=list&version=1.0"); 


var menubar = panel.addWidget("menubar")
//menubar.writeConfig("useButtonFormFactor", "false");

//panel.addWidget("panelspacer_internal")

//pager = panel.addWidget("pager");
//pager.writeConfig("rows", "2");
var firefox = panel.addWidget("quicklaunch")
firefox.writeConfig("iconUrls","file:///usr/share/applications/firefox.desktop")

var systemsettings = panel.addWidget("quicklaunch");
systemsettings.writeConfig("iconUrls","file:////usr/share/applications/kde4/systemsettings.desktop")

var help = panel.addWidget("quicklaunch")
//qlaunch.writeConfig("iconSize", "24")
help.writeConfig("iconUrls","file:///usr/share/applications/kde4/Help.desktop")

var systemtray = panel.addWidget("systemtray")

var clock = panel.addWidget("digital-clock");
clock.writeConfig("showDate", "false");
clock.writeConfig("showDay", "false");
clock.writeConfig("showSeconds", "true");
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

var panel = new Panel
if (panelIds.length == 2) {
    // we are the only panel, so set the location for the user panel.location = 'bottom'
    panel.location = 'bottom'
}

panel.height = 25
panel.addWidget("showdesktop")
panel.addWidget("smooth-tasks")

pager = panel.addWidget("pager");
pager.writeGlobalConfig("rows", "1");

panel.addWidget("trash")
//panel.addWidget("smooth-tasks")
//panel.addWidget("launcher")
//panel.addWidget("pastebin")
//panel.addWidget("tasks")
}

nowardev()




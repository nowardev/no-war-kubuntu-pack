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
function gnome2(){
        var panel = new Panel
    if (panelIds.length == 1) {
        // panel.location = 'bottom'
        panel.location = 'top'
    }


    panel.height = 27


    //panel.addWidget("launcher")
    launcher = panel.addWidget("simplelauncher");
    launcher.writeConfig("format", "Description");
    launcher.writeConfig("showMenuTitles", "true");
    launcher.writeConfig("views", "Applications,Favorites,Computer,Settings,RunCommand,Leave");
//    launcher.writeConfig("icon", "start-here");

    panel.addWidget("panelspacer_internal")


    launcherinternet = panel.addWidget("simplelauncher");
    launcherinternet.writeConfig("icon", "applications-internet");
    launcherinternet.writeConfig("relativePath", "Internet/");
    launcherinternet.writeConfig("format", "Description");


    launchersystem = panel.addWidget("simplelauncher");
    launchersystem.writeConfig("icon", "applications-system");
    launchersystem.writeConfig("relativePath", "System/");
    launchersystem.writeConfig("format", "Description");

    var systemsettings = panel.addWidget("quicklaunch");
    systemsettings.writeConfig("iconUrls","file:////usr/share/applications/kde4/systemsettings.desktop")

    var help = panel.addWidget("quicklaunch")
    //qlaunch.writeConfig("iconSize", "24")
    help.writeConfig("iconUrls","file:///usr/share/applications/kde4/ksysguard.desktop")

    
    var help = panel.addWidget("quicklaunch")
    //qlaunch.writeConfig("iconSize", "24")
    help.writeConfig("iconUrls","file:///usr/share/applications/kde4/Help.desktop")


    panel.addWidget("panelspacer_internal")


    var firefox = panel.addWidget("quicklaunch")
    firefox.writeConfig("iconUrls","file:///usr/share/applications/firefox.desktop")

    panel.addWidget("pastebin")


    var dolphin = panel.addWidget("quicklaunch");
    dolphin.writeConfig("iconUrls","file:////usr/share/applications/kde4/dolphin.desktop")

    var konsol = panel.addWidget("quicklaunch")
    konsol.writeConfig("iconUrls","file:///usr/share/applications/kde4/konsole.desktop")



    //var stanndard = panel.addWidget("quicklaunch");

    // 
    // 
    //panel.addWidget("smooth-tasks")


    panel.addWidget("panelspacer_internal")

    panel.addWidget("sm_cpu")
    panel.addWidget("sm_ram")
    panel.addWidget("sm_temperature")
    panel.addWidget("systemtray")

    clock = panel.addWidget("digital-clock");
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


    lockout = panel.addWidget("lockout")
    //lockout.writeConfig("showHibernateButton","true")
    lockout.writeConfig("showLogoutButton","true")
    lockout.writeConfig("showLockButton","false")
    lockout.writeConfig("showSleepButton","false")
    lockout.writeConfig("showSwitchUserButton","true")



    //panel.addWidget("tasks")
    //smooth-tasks
    //panel.addWidget("trash")


    var panel = new Panel
    if (panelIds.length == 2) {
        // we are the only panel, so set the location for the user panel.location = 'bottom'
        panel.location = 'bottom'
    }

    panel.height = 27
    //panel.addWidget("launcher")
    //panel.addWidget("pastebin")
    panel.addWidget("showdesktop")
    panel.addWidget("tasks")

    pager = panel.addWidget("pager");
    pager.writeGlobalConfig("rows", "1");


    panel.addWidget("trash")
    //panel.addWidget("smooth-tasks")


}

gnome2()




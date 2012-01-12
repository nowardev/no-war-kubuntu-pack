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
function chrome(){

var panel = new Panel
if (panelIds.length == 1) {
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
    launcher = panel.addWidget("simplelauncher");
    launcher.writeConfig("format", "Description");
    launcher.writeConfig("showMenuTitles", "true");
    launcher.writeConfig("views", "Applications,Favorites,Computer,Settings,RunCommand,Leave");
    launcher.writeConfig("icon", "start-here");
}

chrome()




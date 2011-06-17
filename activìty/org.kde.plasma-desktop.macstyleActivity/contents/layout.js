var containment = new Activity("desktop")

launcher = containment.addWidget("lancelot_part");
launcher.writeConfig("iconLocation", "start-here-kde");
launcher.writeConfig("iconClickActivation", "true");
launcher.writeConfig("contentsExtenderPosition", "1");
launcher.writeConfig("searchHistory", "firefox");
launcher.writeConfig("showSearchBox", "true");
launcher.writeConfig("partData", "model=Devices%2FRemovable&type=list&version=1.0\nmodel=Devices%2FFixed&type=list&version=1.0\nmodel=OpenDocuments&type=list&version=1.0"); 


var daisy = containment.addWidget("plasma_applet_daisy")

daisy.writeConfig("middleclickaction","run");
daisy.writeConfig("icospacing","0.25");
daisy.writeConfig("icodimension","52");
daisy.writeConfig("floating","false");
daisy.writeConfig("drawersize","30");
daisy.writeConfig("drawerrotation","1.6");
daisy.writeConfig("click_effects","true");
daisy.writeConfig("background_opacity","0.6");
daisy.writeConfig("acceptdrops","true");
daisy.writeConfig("player","Amarok 2.x")
daisy.writeConfig("plugin","plasma_applet_daisy")
daisy.writeConfig("position","buttom_center")
daisy.writeConfig("reservespace","true")
daisy.writeConfig("showclosetask","true")
daisy.writeConfig("showindicons","true")
daisy.writeConfig("showmirror","true")
daisy.writeConfig("showondesk","true")
daisy.writeConfig("showtaskoflauncher","false")
daisy.writeConfig("showtooltips","true")
daisy.writeConfig("showtooltips_inactive","true")
daisy.writeConfig("showtooltips_launchers","true")
daisy.writeConfig("taskpreviews","true")
daisy.writeConfig("theme","default")
daisy.writeConfig("theme_t","alternative")
daisy.writeConfig("tip_type","thumbnail")
daisy.writeConfig("total_launchers","9")
daisy.writeConfig("type","standard_dock")
daisy.writeConfig("wallpaperplugin","image")
daisy.writeConfig("wallpaperpluginmode","SingleImage")
daisy.writeConfig("zoomtype","simple")
daisy.writeConfig("zvalue","25")

var paste = containment.addWidget("pastebin")
var nowplaying = containment.addWidget("nowplaying")
var mediaplayer = containment.addWidget("mediaplayer")

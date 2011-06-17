var containment = new Activity("desktop")

launcher = containment.addWidget("lancelot_part");
launcher.writeConfig("iconLocation", "start-here-kde");
launcher.writeConfig("iconClickActivation", "true");
launcher.writeConfig("contentsExtenderPosition", "1");
launcher.writeConfig("searchHistory", "firefox");
launcher.writeConfig("showSearchBox", "true");
launcher.writeConfig("partData", "model=Devices%2FRemovable&type=list&version=1.0\nmodel=Devices%2FFixed&type=list&version=1.0\nmodel=OpenDocuments&type=list&version=1.0"); 
var paste = containment.addWidget("pastebin")
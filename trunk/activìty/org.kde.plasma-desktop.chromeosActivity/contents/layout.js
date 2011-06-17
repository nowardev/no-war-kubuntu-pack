var containment = new Activity("desktop")

var folderview = containment.addWidget("folderview")
folderview.writeConfig("url", "~/")

containment.addWidget("digital-clock") //obligatory :)

var dolphin = containment.addWidget("icon");
dolphin.writeConfig("Url", "dolphin.desktop");
dolphin.writeConfig("iconSize", "48");

var firefox = containment.addWidget("icon")
firefox.writeConfig("Url", "firefox.desktop")
firefox.writeConfig("iconSize", "48");

var vlc = containment.addWidget("icon");
vlc.writeConfig("Url", "vlc.desktop");
vlc.writeConfig("iconSize", "48");

var minitube = containment.addWidget("icon");
minitube.writeConfig("Url", "minitube.desktop");
minitube.writeConfig("iconSize", "48");

var kdenlive = containment.addWidget("icon");
kdenlive.writeConfig("Url", "kdenlive.desktop");
kdenlive.writeConfig("iconSize", "48");

var systemsettings = containment.addWidget("icon");
systemsettings.writeConfig("Url", "systemsettings.desktop");
systemsettings.writeConfig("iconSize", "48");

var virtualbox = containment.addWidget("icon");
virtualbox.writeConfig("Url", "virtualbox-ose.desktop");
virtualbox.writeConfig("iconSize", "48");

var kword = containment.addWidget("icon");
kword.writeConfig("Url", "kword.desktop");
kword.writeConfig("iconSize", "48");

var kspread = containment.addWidget("icon");
kspread.writeConfig("Url", "kspread.desktop");
kspread.writeConfig("iconSize", "48");

var krita = containment.addWidget("icon");
krita.writeConfig("Url", "krita.desktop");
krita.writeConfig("iconSize", "48");
//krita.writeConfig("geometry", "300,300,0,0");
krita.geometry = new QRectF(300, 300, 300, 300)


lockout = panel.addWidget("lockout");
//lockout.writeConfig("showHibernateButton","true");
lockout.writeConfig("showLogoutButton","true");
lockout.writeConfig("showLockButton","false");
lockout.writeConfig("showSleepButton","false");
lockout.writeConfig("showSwitchUserButton","false");
lockout.writeConfig("iconSize", "48");

var paste = containment.addWidget("pastebin")
//var nowplaying = containment.addWidget("nowplaying")
//var mediaplayer = containment.addWidget("mediaplayer")

//var quicklaunch = containment.addWidget("quicklaunch")
//quicklaunch.writeConfig("launchers", "/usr/share/applications/kde4/dolphin.desktop,/usr/share/applications/firefox.desktop,/usr/share/applications/vlc.desktop,/usr/share/applications/minitube.desktop,/usr/share/applications/kde4/kdenlive.desktop,/usr/share/applications/kde4/systemsettings.desktop,/usr/share/applications/virtualbox-ose.desktop,/usr/share/applications/kde4/kspread.desktop,/usr/share/applications/kde4/kword.desktop,/usr/share/applications/kde4/krita.desktop")
//.writeConfig("iconSize", "48")
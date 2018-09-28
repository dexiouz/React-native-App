clone it, cd to the folder,npm install, npm start

browserwindow displays the full window, the app controls the window.
Declare the window eg mainWIndow. A fcn eg createWIndowis used t create an instance of the mainWIndow from the BrowserWindow, with height and width specidied.
Next is the conrent which can come fro a spw=ecified index.html.
Next is to open the devtools for inspection.

the mainwindow.on listens to an event 'close' that closes the window .
Next is to shw what we'e done by app.on('ready', createWindow.)

To start goto the terminal cd to your folder and do electron start
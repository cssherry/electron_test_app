// get electron module
// const electron = require('electron').app;
const { app, BrowserWindow } = require('electron');

// Wait until ready to execute code
app.on('ready', () => {
  // open a chrome window (BrowserWindow)
  const mainWindow = new BrowserWindow({});

  // load url into main window
  // mainWindow.loadURL('https://www.google.com');

  // to load local file, get url to local file first
  // mainWindow.loadURL('file://' + __dirname + 'index.html')
  const indexFile = 'file://' + __dirname + '/index.html';
  mainWindow.loadURL(indexFile);

  // In mainWindow, have access to fs and can do anything user can do
  // file system (require('fs'))
  // require('child_rpcoess').execSync
});

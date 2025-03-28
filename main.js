const { app, BrowserWindow } = require('electron/main')

app.commandLine.appendSwitch('no-sandbox');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    //autoHideMenuBar: true,  
  });

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
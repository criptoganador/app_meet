const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message) => ipcRenderer.send('message', message),
    onMessage: (callback) => ipcRenderer.on('message', (_event, message) => callback(message))
});

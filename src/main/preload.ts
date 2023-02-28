// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

// create another context
contextBridge.exposeInMainWorld('electron', {
  setOriginFolder: (arg: unknown) => {
    return ipcRenderer.invoke('set-origin-folder', arg);
  },
  getOriginFolder: () => {
    return ipcRenderer.invoke('get-origin-folder');
  },
  setDestFolder: (arg: unknown) => {
    return ipcRenderer.invoke('set-dest-folder', arg);
  },
  getDestFolder: () => {
    return ipcRenderer.invoke('get-dest-folder');
  },
});

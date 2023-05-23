// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const os = require('os');
const { contextBridge } = require('electron');

export const getRAM = () => {
  return os.totalmem() / 1024 / 1024 / 1024;
}

contextBridge.exposeInMainWorld(
  'api', {
    getRAM: getRAM
  }
)

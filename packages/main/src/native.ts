import type { IpcMainInvokeEvent} from 'electron';
import { ipcMain, shell } from 'electron';
// app.on('open-file', (event: Electron.Event, path: string) => [
//     shell.openPath(path)
// ])

ipcMain.handle('open-file', (event: IpcMainInvokeEvent, ...args: any[]) => {
    const path = args[0];
    return new Promise((resolve, reject) => {
        try {
            resolve(shell.openPath(path));
        } catch (error) {
            reject(error);
        }
    });
});
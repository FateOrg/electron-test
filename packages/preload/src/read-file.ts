import * as electron from 'electron';
// 第一个参数是约定的事件的名称，主进程要监听这个事件
// 第二个及之后的参数是要发送的具体的消息
export function readFile() {
    return electron.ipcRenderer.invoke('open-file', 'E:\\开源');
}

/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

/**
 * Il problema è qua!
 *
 * https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/3192#issuecomment-1219151506
 */
// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-sepia', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage("ipc-sepia", ['ping']);

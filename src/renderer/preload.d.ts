/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import { ElectronHandler } from 'main/preload';

declare global {
  interface Window {
    electron: ElectronHandler;
  }
}

export {};

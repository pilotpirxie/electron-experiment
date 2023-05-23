import {getRAM} from "../preload";

export {};

declare global {
  interface Window {
    api: {
      getRAM: typeof getRAM;
    };
  }
}

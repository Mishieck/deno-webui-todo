/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { WebUI, render } from './deps.ts';
import { App } from './src/pages/app.tsx';

const init = () => {
  console.log('Initializing app from Deno.');
};

const window = new WebUI();
window.bind('init', init);
window.show(render(<App />));
await WebUI.wait();

console.log({ window });

import { bundle } from './deps.ts';

const url = new URL('./src/index.ts', import.meta.url);
const result = await bundle(url);
const { code } = result;
await Deno.writeTextFile('./src/index.js', code);
console.log(code);

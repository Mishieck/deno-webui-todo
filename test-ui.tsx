/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { render } from './deps.ts';
import { App } from './src/pages/app.tsx';
import { IconButton } from './src/components/icon-button.tsx';
import { Todo } from './src/components/todo.tsx';
import { Editor } from './src/components/editor.tsx';
import { getCurrentDate } from './src/utils/time.utils.ts';
import { TodoSkeleton } from './src/components/todo-skeleton.tsx';

const iconButton = <IconButton icon="add" />;
const editor = <Editor />;
const todo = (
  <Todo
    id={crypto.randomUUID()}
    content="Finish first draft of Todo app."
    done={false}
    dateAdded={getCurrentDate()}
  />
);
const todoSkeleton = (
  <div class="w-64">
    <TodoSkeleton />
  </div>
);
const app = <App />;

const content = [iconButton, editor, todo, todoSkeleton, app]
  .map(component => render(component))
  .join('');

const page = /* html */ `
<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link href="./src/styles/md3.css" rel="stylesheet" />
    <title>Todo - Test</title>
  </head>
  <body 
    class="
      font-sans 
      text-base 
      font-normal 
      text-gray-700 
      dark:text-gray-200 
      bg-surface-100 
      dark:bg-surfacedark-100
    "
  >
    <div class="p-5 flex flex-col gap-3">${content}</div>
  </body>
</html>
`;

console.log({ content, page });
await Deno.writeTextFile('./test.html', page);

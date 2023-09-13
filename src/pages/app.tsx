/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { Editor } from '../components/editor.tsx';
import { TodoListItem } from '../components/todo-list-item.tsx';
import { TodoSkeleton } from '../components/todo-skeleton.tsx';

const styles = await Deno.readTextFile(
  new URL('../styles/md3.css', import.meta.url)
);

const script = await Deno.readTextFile(new URL('../index.js', import.meta.url));

export const App = () => {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <style>{styles}</style>
        <script src="/webui.js"></script>
        <title>Todo</title>
      </head>
      <body
        class="
          p-8
          flex justify-center
          font-sans font-normal 
          text-base text-gray-700 dark:text-gray-200 
          bg-surface-100 dark:bg-surfacedark-100
        "
      >
        <div
          id="root"
          class="
            border rounded-xl border-gray-200 dark:border-gray-700 
            xl:w-1/3
            overflow-hidden
            p-8
            flex flex-col gap-4
          "
        >
          <h1 class="text-center">DenoWebUITodo</h1>
          <Editor />
          <div class="flex justify-between items-center">
            <hr class="w-full border-gray-200 dark:border-gray-700" />
            <div class="px-2">Todos</div>
            <hr class="w-full border-gray-200 dark:border-gray-700" />
          </div>
          <ul>
            <TodoListItem id="empty-todo-list" show={false}>
              You haven't added any todos yet.
            </TodoListItem>
            <TodoListItem id="todo-skeleton" show={false}>
              <TodoSkeleton />
            </TodoListItem>
          </ul>
        </div>
        <script>{script}</script>
      </body>
    </html>
  );
};

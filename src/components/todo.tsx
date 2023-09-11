/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { IconButton } from './icon-button.tsx';

export type TodoProps = {
  id: string;
  content: string;
  done: boolean;
  dateAdded: string;
};

export const Todo = ({ id, content, done }: TodoProps) => (
  <form id={id} class="flex gap-4">
    <label class="inline-flex items-center gap-4">
      <input
        type="checkbox"
        name="checked-demo"
        class="
          rounded
          w-6 aspect-square 
          accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 
        "
        checked={done}
      />
      <span class="flex-1">{content}</span>
    </label>
    <IconButton />
  </form>
);

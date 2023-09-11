/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { IconButton } from './icon-button.tsx';

export type TodoProps = {
  id: string;
  content: string;
  done: boolean;
  dateAdded: string;
};

export const Todo = ({ id, content, done }: TodoProps) => (
  <form id={id} class="flex gap-5">
    <label class="inline-flex items-center">
      <input
        type="checkbox"
        name="checked-demo"
        class="
          rounded-[2px] 
          w-[18px] h-[18px] 
          flex-1
          accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 
          ltr:mr-3 rtl:ml-3
        "
        checked={done}
      />
      <span>{content}</span>
    </label>
    <IconButton />
  </form>
);

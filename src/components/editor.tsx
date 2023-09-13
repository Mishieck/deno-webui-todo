/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { IconButton } from './icon-button.tsx';

export const Editor = () => {
  return (
    <form action="" class="flex items-center gap-4">
      <input
        type="text"
        aria-label="inputtext"
        name="inputtext"
        id="input99"
        class="
          relative 
          h-14 
          block flex-1
          py-2 px-4 
          rounded 
          overflow-x-auto 
          bg-neutral-10 dark:bg-neutral-900 
          border border-gray-500 focus:border-2 focus:border-primary-600 
          dark:border-gray-400 dark:focus:border-primary-200
          focus:outline-none
          dark:text-gray-200 leading-5 
          focus:ring-0 
          peer
        "
        placeholder="Enter todo"
        value=""
      ></input>
      <IconButton icon="add" />
    </form>
  );
};

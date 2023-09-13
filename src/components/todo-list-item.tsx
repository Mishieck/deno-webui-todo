/* @jsxImportSource https://esm.sh/preact@10.15.1 */

import { JSX } from '../../deps.ts';

export type TodoListItem = JSX.HTMLAttributes<HTMLElement> & {
  show?: boolean;
};

export const TodoListItem = ({ id, children, show }: TodoListItem) => (
  <li id={id} class={`list__item ${show ? '' : 'hidden'}`}>
    {children}
  </li>
);

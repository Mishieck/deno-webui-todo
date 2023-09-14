import { Result } from '../types/options.types.ts';
import { Todo } from '../types/todo.types.ts';
import { errorCodes } from '../utils/constants.ts';
import { database } from './open.db.ts';

export const read = async (id: string): Promise<Result<Todo>> => {
  try {
    const { value } = await database.get<Todo>(['todos', id]);

    return value
      ? { type: 'value', value }
      : {
          type: 'error',
          value: {
            code: errorCodes.DATABASE_ENTRY_NOT_FOUND,
            message: `Entry with ID "${id}" was not found.`
          }
        };
  } catch (error) {
    console.log('Database read', error);

    return {
      type: 'error',
      value: {
        code: errorCodes.DATABASE_READ_FAILED,
        message: `Failed to read entry "${id}".`
      }
    };
  }
};

export const readAll = async (): Promise<Result<Array<Todo>>> => {
  try {
    const entries = await database.list<Todo>({ prefix: ['todos'] });
    const todos: Array<Todo> = [];
    for await (const { value } of entries) todos.push(value);
    return { type: 'value', value: todos };
  } catch (error) {
    console.log('Database read all', error);

    return {
      type: 'error',
      value: {
        code: errorCodes.DATABASE_READ_FAILED,
        message: `Failed to get all todos.`
      }
    };
  }
};

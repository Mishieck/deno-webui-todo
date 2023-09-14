import { Result } from '../types/options.types.ts';
import { Todo } from '../types/todo.types.ts';
import { errorCodes } from '../utils/constants.ts';
import { database } from './open.db.ts';

export const update = async (
  id: string,
  content: boolean
): Promise<Result<string>> => {
  try {
    const { value } = await database.get<Todo>(['todos', id]);

    if (!value)
      return {
        type: 'error',
        value: {
          code: errorCodes.DATABASE_READ_FAILED,
          message: `Failed to read entry "${id}".`
        }
      };

    const newTodo: Todo = { ...value, done: content };
    await database.set(['todos', id], newTodo);
    return { type: 'value', value: id };
  } catch (error) {
    console.log('Database update', error);

    return {
      type: 'error',
      value: {
        code: errorCodes.DATABASE_UPDATE_FAILED,
        message: `Failed to update entry "${id}".`
      }
    };
  }
};

import { Result } from '../types/options.types.ts';
import { Todo } from '../types/todo.types.ts';
import { errorCodes } from '../utils/constants.ts';
import { database } from './open.db.ts';

export const create = async (
  content: Todo['content']
): Promise<Result<Todo>> => {
  const todo: Todo = {
    id: crypto.randomUUID(),
    content,
    done: false,
    dateAdded: new Date().toISOString()
  };

  try {
    await database.set(['todos', todo.id], todo);
    return { type: 'value', value: todo };
  } catch (error) {
    console.log('database create todo', error);

    return {
      type: 'error',
      value: {
        code: errorCodes.DATABASE_WRITE_FAILED,
        message: 'Failed to add todo.'
      }
    };
  }
};

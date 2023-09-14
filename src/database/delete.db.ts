import { Result } from '../types/options.types.ts';
import { errorCodes } from '../utils/constants.ts';
import { database } from './open.db.ts';

export const remove = async (id: string): Promise<Result<string>> => {
  try {
    await database.delete(['todos', id]);
    return { type: 'value', value: id };
  } catch (error) {
    console.log('Database delete', error);

    return {
      type: 'error',
      value: {
        code: errorCodes.DATABASE_DELETE_FAILED,
        message: `Failed to delete entry "${id}".`
      }
    };
  }
};

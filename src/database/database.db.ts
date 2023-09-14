import { create } from './create.db.ts';
import { read, readAll } from './read.db.ts';
import { update } from './update.db.ts';
import { remove } from './delete.db.ts';

export const databaseOps = { create, read, readAll, update, delete: remove };

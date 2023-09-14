import { JSONValue } from '../../deno-webui/src/types.ts';
import { Result } from '../types/options.types.ts';

export const createValueResult = <Value extends JSONValue>(
  value: Value
): Result<Value> => ({
  type: 'value',
  value
});

export const createErrorResult = (code: string, message: string): Result => ({
  type: 'error',
  value: { code, message }
});

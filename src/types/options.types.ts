import { JSONValue } from '../../deno-webui/src/types.ts';

export type CustomError = {
  code: string;
  message: string;
};

export type Result<
  Value extends JSONValue = JSONValue,
  Err extends CustomError = CustomError
> =
  | { type: 'none' }
  | { type: 'value'; value: Value }
  | { type: 'error'; value: Err };

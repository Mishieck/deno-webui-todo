import { JSONValue } from '../deno-webui/src/types.ts';
import { ElementData, ElementRegistry } from './types/dom.types.ts';
import { Result } from './types/options.types.ts';
import { errorCodes } from './utils/constants.ts';

type Call<
  Name extends string = string,
  Param extends JSONValue = JSONValue,
  Output extends JSONValue = JSONValue
> = (name: Name, param: Param) => Output;

declare global {
  interface Window {
    webui: {
      call: Call;
    };
  }
}

// Now you can use your library as follows:
const webui = window.webui;

const elementRegistry: ElementRegistry = new Proxy(
  {},
  {
    get: (target, id: string) =>
      Promise.resolve(
        Reflect.has(target, id)
          ? Reflect.get(target, id)
          : document.getElementById(id)
      )
  }
);

function createElement(data: ElementData): Result {
  const { id, html, observers } = data;
  const wrapper = document.createElement('template');
  wrapper.innerHTML = html;
  const element = wrapper.firstElementChild;
  elementRegistry[id] = element;

  for (const observer of observers) {
    const {
      id,
      event,
      capture,
      preventDefault,
      stopPropagation,
      stopImmediatePropagation,
      eventProperties,
      options
    } = observer;

    if (!element)
      return {
        type: 'error',
        value: {
          code: errorCodes.DOM_ELEMENT_NOT_FOUND,
          message: `Element with ID "${id}" was not found.`
        }
      };

    element.addEventListener(
      event,
      event => {
        preventDefault && event.preventDefault();
        stopPropagation && event.stopPropagation();
        stopImmediatePropagation && event.stopImmediatePropagation();
        const properties: JSONValue = {};

        for (const prop of eventProperties ?? [])
          properties[prop] = event[prop as keyof Event] as JSONValue;

        webui.call(id, properties);
      },
      capture ?? options ?? false
    );
  }

  return { type: 'none' };
}

webui.call('init', {});

console.log({ createElement });

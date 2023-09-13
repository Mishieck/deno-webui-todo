export type ElementRegistry = Record<string, Element | null>;

export type Observer = {
  id: string;
  event: string;
  capture?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  stopImmediatePropagation?: boolean;
  options?: AddEventListenerOptions;
  eventProperties?: Array<string>;
};

export type ElementData = {
  id: string;
  html: string;
  observers: Array<Observer>;
};

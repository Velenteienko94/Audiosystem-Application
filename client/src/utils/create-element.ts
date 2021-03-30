type HTMLElementProps<
  K extends keyof HTMLElementTagNameMap
> = keyof HTMLElementTagNameMap[K];

/**
 * Creates HTML element with initial attributes;
 * @param {string}tagName - The name of an element;
 * @param {HTMLElementProps}attributes - Initial attributes;
 * @returns {HTMLElement} HTML element;
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes?: {
    [key in HTMLElementProps<K>]?: HTMLElementTagNameMap[K][key];
  }
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);

  if (attributes) {
    for (const attribute of Object.getOwnPropertyNames(
      attributes
    ) as HTMLElementProps<K>[]) {
      if (attribute) {
        element[attribute] = attributes[attribute]!;
      }
    }
  }

  return element;
}

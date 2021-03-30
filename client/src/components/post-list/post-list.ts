import { JSONPlaceholderApi } from "../../api";
import { createElement } from "./../../utils/create-element";

/**
 * Creates unordered list of posts;
 * @returns {HTMLUListElement} post list;
 */
export function createPostsList(): HTMLUListElement {
  const ul = createElement("ul");

  (async () => {
    const resources = await JSONPlaceholderApi.getAllResources();

    for (const resourse of resources) {
      ul.appendChild(createElement("li", { innerHTML: resourse.title }));
    }
  })();

  return ul;
}

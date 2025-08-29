import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window as unknown as Window;
const DOMPurify = createDOMPurify(window);

export function sanitizeHTML(dirty: string) {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ["pre", "b", "i", "u", "p", "br", "strong", "em"],
    ALLOWED_ATTR: [] // no attributes allowed
  });
}

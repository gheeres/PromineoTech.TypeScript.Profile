export function createHTMLElement(html: string): HTMLElement | null {
  const template = document.createElement('template');
  template.innerHTML = html;
  //return template.content.firstElementChild;
  return template.content.firstElementChild as HTMLElement;
}

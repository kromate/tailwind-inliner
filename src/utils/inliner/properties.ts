/**
 *
 */
const reduce = (attr: string, style: CSSStyleDeclaration): string => {
  return style[attr].match(/\d+[px]/g).join().replace('p', '')
}

/**
 *
 */
const propFn = {
  border: (el) => reduce('border', el.style),
  cellpadding: (el) => reduce('padding', el.querySelector('td').style), 
  cellspacing: (el) => reduce('border-spacing', el.style), 
}

/**
 *
 */
export const getPropertyValue = (table: HTMLTableElement, prop: string): string => {
  return propFn[prop](table) || '';
}

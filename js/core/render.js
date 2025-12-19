//Render function for javascript components

export function renderComponent(targetSelector, componentFn, props = {}) {
  
  const target = document.querySelector(targetSelector);
  const html = componentFn(props);
  target.innerHTML = html+target.innerHTML;
}

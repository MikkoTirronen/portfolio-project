//Render function for javascript components

export function renderComponent(targetSelector, componentFn, props = {}) {
  const target = document.querySelector(targetSelector);

  const html = componentFn(props);

  target.style.opacity = "1";
  target.innerHTML = html+target.innerHTML;

  // requestAnimationFrame(() => {
  //   target.style.transition = "opacity .4s ease";
  //   target.style.opacity = "1";
  // });
}

//Render function for javascript components

export function renderComponent(targetSelector, componentFn, props = {}) {
  const target = document.querySelector(targetSelector);

  const html = componentFn(props);

  target.style.opacity = "0";
  target.innerHTML += html;

  requestAnimationFrame(() => {
    target.style.transition = "opacity .4s ease";
    target.style.opacity = ".95";
  });
}

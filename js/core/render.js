//Render function for javascript components

export function renderComponent(targetSelector, componentFn, props = {}) {
  const target = document.querySelector(targetSelector);
  target.replaceChildren(
    document.createRange().createContextualFragment(componentFn(props))
  );
}

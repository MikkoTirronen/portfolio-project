# Portfolio Project

This is my **portfolio project** created for the course **Frontend 1** as part of my **C# studies**.

The project requirements specified the use of **vanilla JavaScript and CSS** (no frameworks). To structure the application, I adopted a **React-inspired approach** by composing the site as a **Single Page Application (SPA)**. This is achieved through JavaScript functions that inject HTML into specific `id` sections of the `index.html` file.

The animated background is built using a **custom recursive tile algorithm** combined with a **wobble animation**.

Below is an overview of the project structure, including key files, functions, and their responsibilities.

---

## Project Structure

```
animations/
components/
core/
app.js
```

---

## animations/

### background.js

**Includes:**

* **Canvas creation**

  * Creates a `<canvas>` element and applies styling.

* **Tile class**

  * Stores attributes for position, size, and color.
  * `draw()` method renders a tile using its attributes.

* **Palette**

  * An array of predefined colors.

* **randomColor()**

  * Returns a random color from the palette.

* **divide(tile, depth)**

  * Rejects tiles smaller than 5px in width or height.
  * Uses a `split` constant to introduce slight size variance.
  * Divides tiles vertically or horizontally based on direction.
  * Recursively divides tiles based on depth, or pushes a new tile with a random color into the array.

* **resizeCanvas()**

  * Resizes the canvas to match the viewport dimensions.

* **animate()**

  * Animates all tiles with a slow wobble using sine and cosine curves.
  * Applies subtle rotation, scaling, and drifting effects.

---

### character-counter.js

* **updateCounter()**

  * Updates the `messageCounter` element with the current and maximum length of the message textarea.

* **addCharacterCounter()**

  * Attaches an `input` event listener to the message textarea.

---

### handle-contact-form.js

* **handleContactForm()**

  * Validates form inputs.
  * Uses `async/await` with `fetch` to submit the form to FormSubmit.
  * Displays a success card on successful submission.
  * Attaches an `onclick` event listener to the close button in the success card.

---

### nav-scroll-animation.js

* Adds a `DOMContentLoaded` event listener.

* Verifies that each navbar link has a corresponding section.

* Attaches click event listeners to smoothly scroll to sections.

* **updateActiveLink()**

  * Determines which section is currently active.
  * Applies the active CSS class to the corresponding navbar link.

* Adds a `scroll` event listener to trigger `updateActiveLink()`.

---

### theme-toggle.js

* Adds a `DOMContentLoaded` event listener.
* Retrieves the saved theme from `localStorage` (if any) and applies it.
* Attaches a click event listener to the dark/light toggle button.
* Updates both the theme and the toggle icon accordingly.

---

### toggle-burger-menu.js

* **ToggleBurgerMenu()**

  * Adds a click event listener to the burger menu button.
  * Toggles the open/close state of the navigation menu.

---

## components/

Each component returns an HTML string that is injected into the DOM.

* **about.js** — `About()`

  * Returns the HTML content for the About section.

* **contact.js** — `Contact()`

  * Returns the HTML content for the Contact section.

* **footer.js** — `Footer()`

  * Returns the HTML content for the Footer section.

* **hero.js** — `Hero()`

  * Returns the HTML content for the Hero section.

* **navbar.js** — `Navbar()`

  * Returns the HTML content for the Navbar.

* **projects.js** — `Projects()`

  * Returns the HTML content for the Projects section.

* **skills.js** — `Skills()`

  * Returns the HTML content for the Skills section.

* **testimonials.js** — `Testimonials()`

  * Returns the HTML content for the Testimonials section.

---

## core/

### render.js

* **renderComponent(targetSelector, componentFn, props)**

  * Selects a DOM element using `targetSelector`.
  * Injects the HTML returned by `componentFn` into the selected element.

---

## app.js

* Adds a `DOMContentLoaded` event listener.
* Initializes rendering, event listeners, and animations once the DOM is fully loaded.

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Canvas API

---

## Notes

This project focuses on understanding core frontend concepts such as DOM manipulation, animations, state-like rendering patterns, and SPA architecture—without relying on external frameworks.

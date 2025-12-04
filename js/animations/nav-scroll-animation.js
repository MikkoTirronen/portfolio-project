 document.addEventListener("DOMContentLoaded", () => {
      const OFFSET = 70; // fixed header offset

      setTimeout(() => {
        const links = Array.from(
          document.querySelectorAll(".nav-links a[data-link]")
        );
        const sections = links
          .map((link) => document.querySelector(link.getAttribute("href")))
          .filter(Boolean);

        if (!links.length || !sections.length) {
          console.warn("Navbar links or sections not found");
          return;
        }

        // Smooth scrolling
        links.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute("href"));
            if (section) {
              window.scrollTo({
                top: section.offsetTop - OFFSET,
                behavior: "smooth",
              });
            }
          });
        });

        // Update active link
        function updateActiveLink() {
          const scrollPos = window.scrollY + OFFSET + 1;
          let currentSection = sections[0];

          // Determine the current section
          for (let section of sections) {
            if (section.offsetTop <= scrollPos) currentSection = section;
            else break;
          }

          // If we're at the bottom of the page, force last section active
          if (
            window.innerHeight + window.scrollY >=
            document.body.scrollHeight - 5
          ) {
            currentSection = sections[sections.length - 1];
          }

          links.forEach((link) => {
            const isActive =
              link.getAttribute("href") === "#" + currentSection.id;
            link.classList.toggle("active", isActive);
          });
        }

        // Initial active link
        updateActiveLink();

        // Listen for scroll events
        window.addEventListener("scroll", updateActiveLink);
      }, 50);
    });
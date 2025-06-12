// 
  document.addEventListener('DOMContentLoaded', function () {
    // Dropdown Toggle Logic
    const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();

        // Close all other dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== toggle.nextElementSibling) {
            menu.classList.add('hidden');
          }
        });

        // Toggle current dropdown
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('hidden');
        }
      });
    });

    // Click outside to close all dropdowns
    document.addEventListener('click', function () {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.add('hidden');
      });
    });

    // Menu Active Link Logic
    const currentPath = window.location.pathname.split('/').pop(); // "home.html"
    const menuLinks = document.querySelectorAll("ul li a");

    menuLinks.forEach(link => {
      const linkPath = link.getAttribute("href").split('/').pop(); // Only file name
      if (linkPath === currentPath) {
        link.classList.add("text-white", "active");
        link.classList.remove("text-white/50");
      } else {
        link.classList.remove("active", "text-white");
        link.classList.add("text-black");
      }
    });
  });


function handleStickyNav() {
  const nav = document.getElementById("navbar");
  const scrollY = window.scrollY;

  if (nav) {
    if (scrollY > 50) {
      nav.classList.add("sticky-nav", "navbar-padding-sm");
      nav.classList.remove("navbar-padding");
    } else {
      nav.classList.remove("sticky-nav", "navbar-padding-sm");
      nav.classList.add("navbar-padding");
    }
  }
}

window.addEventListener("scroll", handleStickyNav);

// পেজ লোডের পর initial check করা জরুরিঃ
document.addEventListener("DOMContentLoaded", handleStickyNav);

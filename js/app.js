const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});


// app.js
document.addEventListener("DOMContentLoaded", function () {
    // Select the hamburger button and the navigation component
    const togglerBtn = document.querySelector(".js-toggler-btn-sm");
    const navigation  = document.querySelector(".js-navigation-component");

    // If elements don't exist (safety check)
    if (!togglerBtn || !navigation) return;

    // Toggle function
    function toggleMobileMenu() {
        // Toggle a class on the navigation to show/hide it
        navigation.classList.toggle("active");

        // Optional: also toggle an "open" class on the button for styling the icon (X ↔ ≡)
        togglerBtn.classList.toggle("open");
    }

    // Click event on the hamburger button
    togglerBtn.addEventListener("click", toggleMobileMenu);

    // Optional: Close menu when clicking on a nav link (nice UX on mobile)
    const navLinks = navigation.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            togglerBtn.classList.remove("open");
        });
    });

    // Optional: Close menu when clicking outside of it
    document.addEventListener("click", (e) => {
        if (!togglerBtn.contains(e.target) && !navigation.contains(e.target)) {
            navigation.classList.remove("active");
            togglerBtn.classList.remove("open");
        }
    });
});
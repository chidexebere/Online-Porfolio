
/* To close mobile nav menu once a anchor is clicked */

let mobileMenu = document.getElementById('mobile_navigation');
    let closeIcon = document.getElementById("burger");

    mobileMenu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        burger.checked = false;
      }
    }
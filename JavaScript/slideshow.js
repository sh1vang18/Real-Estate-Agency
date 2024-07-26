document.addEventListener('DOMContentLoaded', function() {
  const listingsContainer = document.querySelector('.featured-listings ul');
  const listings = listingsContainer.querySelectorAll('li');
  const prevBtn = document.querySelector('.featured-listings .prev');
  const nextBtn = document.querySelector('.featured-listings .next');
  let currentIndex = 0;

  function showListing(index) {
      listings[currentIndex].style.opacity = 0;
      listings[index].style.opacity = 1;
      currentIndex = index;
  }

  function nextListing() {
      let index = (currentIndex + 1) % listings.length;
      showListing(index);
  }

  function prevListing() {
      let index = (currentIndex - 1 + listings.length) % listings.length;
      showListing(index);
  }

  if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', prevListing);
      nextBtn.addEventListener('click', nextListing);
  }

  setInterval(nextListing, 5000); // Auto-rotate every 5 seconds
});

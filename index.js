function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark-theme");
}

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.articles-content');
  const allCards = Array.from(container.querySelectorAll('.card'));
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  // Number of cards to show initially and to add on each click
  const initialCardsToShow = 4;
  const cardsToAddOnClick = 2;
  const totalCards = allCards.length;

  // Function to show/hide cards
  function toggleCards(startIndex, endIndex, show) {
    for (let i = startIndex; i < endIndex; i++) {
      allCards[i].style.display = show ? 'flex' : 'none';
    }
  }

  // Hide all cards initially
  toggleCards(0, totalCards, false);

  // Show the initial set of cards
  toggleCards(0, initialCardsToShow, true);

  // Load more button click event
  loadMoreBtn.addEventListener('click', function () {
    // Determine the next set of cards to show
    const currentlyShown = allCards.filter(card => card.style.display !== 'none');
    const nextIndex = currentlyShown.length;
    const endIndex = nextIndex + cardsToAddOnClick; // Show 2 more cards

    // Show the next set of cards
    toggleCards(nextIndex, endIndex, true);

    // Check if all cards are shown
    if (endIndex = totalCards) {
      // Hide the "Load More" button
      loadMoreBtn.style.display = 'none';
    }
  });
});

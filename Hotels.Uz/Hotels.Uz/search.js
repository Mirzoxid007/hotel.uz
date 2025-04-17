// Search formni submit qilish
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = document.getElementById('searchInput').value.trim();
  if (searchQuery) {
    window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
  }
});

// Filtersni qo'llash
document.getElementById('applyFilters').addEventListener('click', function() {
  const priceRange = document.getElementById('priceRange').value;
  const rating = document.getElementById('rating').value;
  
  // Filtirlarni saqlash yoki serverga yuborish
  const filters = {
    priceRange: priceRange,
    rating: rating
  };

  localStorage.setItem('filters', JSON.stringify(filters));
  filterHotels(filters);
});

// Filtirlarni qo'llash
function filterHotels(filters) {
  const price = filters.priceRange;
  const rating = filters.rating;

  // Barcha mavjud mehmonxonalarni olish va filtrlash
  let hotels = JSON.parse(localStorage.getItem('hotels') || '[]');

  if (price) {
    hotels = hotels.filter(hotel => hotel.price <= price);
  }

  if (rating !== 'any') {
    hotels = hotels.filter(hotel => hotel.rating === parseInt(rating));
  }

  displayHotels(hotels);
}

// Hotelsni HTMLda ko'rsatish
function displayHotels(hotels) {
  const hotelList = document.getElementById('hotelList');
  hotelList.innerHTML = '';
  
  hotels.forEach(hotel => {
    const hotelCard = document.createElement('div');
    hotelCard.classList.add('hotel-card');
    
    hotelCard.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}">
      <h4>${hotel.name}</h4>
      <p>${hotel.location}</p>
      <p>Price: $${hotel.price}</p>
      <p>Rating: ${hotel.rating} stars</p>
      <a href="hotel.html?id=${hotel.id}">View Details</a>
    `;
    
    hotelList.appendChild(hotelCard);
  });
}

// Sahifa yuklanganda filtrlarni va natijalarni ko'rsatish
window.onload = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const searchQuery = queryParams.get('q');
  
  if (searchQuery) {
    document.getElementById('searchInput').value = searchQuery;
    const filters = JSON.parse(localStorage.getItem('filters')) || {};
    filterHotels(filters);
  }
};



// js/search.js
/*document.addEventListener("DOMContentLoaded", function () {
  let hotels = [];

  const searchInput = document.getElementById("search-query");
  const priceRange = document.getElementById("priceRange");
  const priceLabel = document.getElementById("priceLabel");
  const ratingSelect = document.getElementById("rating");
  const applyFiltersButton = document.getElementById("applyFilters");
  const hotelList = document.getElementById("hotelList");

  // JSONdan hotellarni olish
  fetch("hotels.json")
    .then((res) => res.json())
    .then((data) => {
      hotels = data;
      filterAndSearchHotels(); // Dastlabki ko'rinish
    });

  // Qidiruv inputni eshitish
  searchInput.addEventListener("input", filterAndSearchHotels);

  // Slider harakati
  priceRange.addEventListener("input", () => {
    priceLabel.textContent = `0 - ${priceRange.value}`;
  });

  // Filtrni qo‘llash
  applyFiltersButton.addEventListener("click", filterAndSearchHotels);

  function filterAndSearchHotels() {
    const query = searchInput.value.toLowerCase();
    const maxPrice = parseInt(priceRange.value);
    const selectedRating = ratingSelect.value;

    let filtered = hotels;

    if (query) {
      filtered = filtered.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(query) ||
          hotel.location.toLowerCase().includes(query)
      );
    }

    if (maxPrice > 0) {
      filtered = filtered.filter((hotel) => hotel.price <= maxPrice);
    }

    if (selectedRating !== "any") {
      filtered = filtered.filter((hotel) => hotel.rating == selectedRating);
    }

    displayHotels(filtered);
  }

  function displayHotels(hotels) {
    hotelList.innerHTML = "";
    if (hotels.length === 0) {
      hotelList.innerHTML = "<p>No hotels found.</p>";
      return;
    }

    hotels.forEach((hotel) => {
      const card = document.createElement("div");
      card.classList.add("hotel-card");
      card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}" />
        <div class="hotel-info">
          <h4>${hotel.name}</h4>
          <p>${hotel.location}</p>
          <p>Price: $${hotel.price}</p>
          <p>Rating: ${hotel.rating} Stars</p>
          <a href="hotel.html?id=${hotel.id}" class="view-details">View Details</a>
        </div>
      `;
      hotelList.appendChild(card);
    });
  }
});*/



    // Tilni olish
function getCurrentLang() {
  return localStorage.getItem('lang') || 'en'; // Standart til inglizcha
}

// Tilni o'zgartirish
function setLang(lang) {
  localStorage.setItem('lang', lang); // Tanlangan tilni saqlash
  updateContent(); // Kontentni yangilash
}

// Kontentni yangilash
function updateContent() {
  const lang = getCurrentLang();
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[lang][key] || key; // Tarjimani qo‘shish
  });
}

// Sahifa yuklanganda tilni o‘rnatish
window.onload = () => {
  updateContent();
};

// Tilni almashtirish funksiyasi
function switchLanguage() {
  const selectedLang = document.getElementById('languageSwitcher').value;
  localStorage.setItem('lang', selectedLang);
  alert(`Language switched to ${selectedLang.toUpperCase()}`);
  window.location.reload(); // Qayta yuklash
}

// Qidiruv funksiyasi
document.getElementById('searchBtn').addEventListener('click', function() {
  const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  
  if (searchQuery) {
    window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`; // Qidiruv
  }
});






/*// Hotel data
const hotels = [
  { id: 1, name: 'Hotel One', location: 'Location A', price: 100, image: 'hotel1.jpg', stars: 4, description: 'This is a great hotel in Location A.', amenities: ['Free WiFi', 'Gym', 'Restaurant'], reviews: ['Great place!', 'Very comfortable!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  { id: 2, name: 'Hotel Two', location: 'Location B', price: 200, image: 'hotel2.jpg', stars: 5, description: 'Located in the heart of Location B, offering luxury stays.', amenities: ['Spa', 'Free Parking', 'Pool'], reviews: ['Excellent experience!', 'Loved the pool!'] },
  // Add more hotels here...
];*/

// js/main.js
fetch('hotels.json')
  .then(res => res.json())
  .then(hotels => {
    const list = document.getElementById('hotel-list');
    hotels.forEach(hotel => {
      const card = document.createElement('div');
      card.classList.add('hotel-card');
      card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}">
        <div class="hotel-info">
          <h4>${hotel.name}</h4>
          <p>${hotel.location}</p>
          <p>$${hotel.price}</p>
          <a href="hotel.html?id=${hotel.id}" class="view-details">View Details</a>
        </div>`;
      list.appendChild(card);
    });
  });












fetch('hotels.json')
  .then(res => res.json())
  .then(hotels => {
    const hotelList = document.getElementById('hotel-list');
    hotels.forEach(hotel => {
      const div = document.createElement('div');
      div.className = 'hotel-card';
      div.innerHTML = `
        <img src="${hotel.image}">
        <div class="hotel-info">
          <h4>${hotel.name}</h4>
          <p>${hotel.location}</p>
          <p>$${hotel.price}</p>
          <p>${'★'.repeat(hotel.stars)}</p>
          <a href="hotel.html?id=${hotel.id}">View Details</a>
          <button onclick="saveHotel(${hotel.id})">♥ Save</button>
        </div>
      `;
      hotelList.appendChild(div);
    });
  });

function saveHotel(id) {
  fetch('hotels.json')
    .then(res => res.json())
    .then(hotels => {
      const hotel = hotels.find(h => h.id == id);
      const saved = JSON.parse(localStorage.getItem('savedHotels')) || [];
      if (!saved.find(h => h.id == id)) {
        saved.push(hotel);
        localStorage.setItem('savedHotels', JSON.stringify(saved));
        alert('Hotel saved!');
        location.href = 'saved.html';
      }
    });
}

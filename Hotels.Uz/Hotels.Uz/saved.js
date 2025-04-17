// js/saved.js
const savedHotels = JSON.parse(localStorage.getItem('savedHotels')) || [];
const section = document.getElementById('saved-hotels');

savedHotels.forEach(hotel => {
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
  section.appendChild(card);
});




const savedHotel = JSON.parse(localStorage.getItem('savedHotels')) || [];













document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('saved-hotel-list');
  const savedHotels = JSON.parse(localStorage.getItem('savedHotels')) || [];

  if (savedHotels.length === 0) {
    container.innerHTML = '<p>No saved hotels yet.</p>';
    return;
  }

  savedHotels.forEach(hotel => {
    const div = document.createElement('div');
    div.className = 'hotel-card';

    div.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}" />
      <h3>${hotel.name}</h3>
      <p>${hotel.location}</p>
      <p>$${hotel.price}</p>
      <button class="remove-btn" data-id="${hotel.id}">❌ Remove</button>
    `;

    container.appendChild(div);
  });

  // Remove functionality
  container.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      const updated = savedHotels.filter(h => h.id !== id);
      localStorage.setItem('savedHotels', JSON.stringify(updated));
      window.location.reload();
    }
  });
});


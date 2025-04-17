// js/hotel.js
let hotels = [];
fetch('hotels.json')
  .then(res => res.json())
  .then(data => {
    hotels = data;
    const params = new URLSearchParams(window.location.search);
    const hotelId = parseInt(params.get('id'));
    const hotel = hotels.find(h => h.id === hotelId);

    if (hotel) {
      document.getElementById('hotel-image').src = hotel.image;
      document.getElementById('hotel-name').innerText = hotel.name;
      document.getElementById('hotel-location').innerText = hotel.location;
      document.getElementById('hotel-price').innerText = `$${hotel.price}`;
      document.getElementById('hotel-stars').innerText = '⭐'.repeat(hotel.stars);
      document.getElementById('hotel-description').innerText = hotel.description;

      const reviewsList = document.getElementById('reviews-list');
      hotel.reviews.forEach(r => {
        const li = document.createElement('li');
        li.innerText = r;
        reviewsList.appendChild(li);
      });

      document.getElementById('book-now-btn').addEventListener('click', () => {
        const date = document.getElementById('booking-date').value;
        alert(`Booking confirmed for ${hotel.name} on ${date || 'a selected date'}!`);
      });

      document.getElementById('save-btn').addEventListener('click', () => {
        const saved = JSON.parse(localStorage.getItem('savedHotels')) || [];
        if (!saved.find(h => h.id === hotel.id)) {
          saved.push(hotel);
          localStorage.setItem('savedHotels', JSON.stringify(saved));
          alert('Hotel saved!');
        }
      });

      document.getElementById('submit-review').addEventListener('click', () => {
        const text = document.getElementById('review-text').value;
        if (text) {
          hotel.reviews.push(text);
          const li = document.createElement('li');
          li.innerText = text;
          reviewsList.appendChild(li);
          document.getElementById('review-text').value = '';
          alert('Review added!');
        }
      });
    }
  });







  document.getElementById('save-btn').addEventListener('click', () => {
    let saved = JSON.parse(localStorage.getItem('savedHotels')) || [];
  
    // Agar hotel allaqachon saqlangan bo‘lsa, qayta saqlanmasin
    if (!saved.find(h => h.id === hotel.id)) {
      saved.push(hotel);
      localStorage.setItem('savedHotels', JSON.stringify(saved));
      alert('✅ Hotel saved!');
    } else {
      alert('❗ Already saved!');
    }
  });
  


  document.getElementById('book-now-btn').addEventListener('click', () => {
    const date = document.getElementById('booking-date').value;
  
    if (!date) {
      alert("❗ Iltimos, sana tanlang.");
      return;
    }
  
    alert(`✅ Booking confirmed for ${hotel.name} on ${date}!`);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Elementlar bilan ishlash bu yerda bo'lishi kerak:
    const saveBtn = document.getElementById('save-btn');
    const bookBtn = document.getElementById('book-now-btn');
  
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        alert("Saved successfully!");
      });
    }
  
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        alert("Booking Successful!");
      });
    }
  });
  



























  document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const hotelId = parseInt(params.get('id'));
    const hotels = JSON.parse(localStorage.getItem('hotels')) || []; // agar hotels.jsondan saqlangan bo‘lsa
  
    const currentHotel = hotels.find(h => h.id === hotelId);
  
    const saveBtn = document.getElementById('save-btn');
  
    if (saveBtn && currentHotel) {
      saveBtn.addEventListener('click', () => {
        let savedHotels = JSON.parse(localStorage.getItem('savedHotels')) || [];
  
        const exists = savedHotels.find(h => h.id === currentHotel.id);
        if (!exists) {
          savedHotels.push(currentHotel);
          localStorage.setItem('savedHotels', JSON.stringify(savedHotels));
          alert(`${currentHotel.name} has been saved!`);
          window.location.href = "saved.html"; // avtomatik o'tkazadi
        } else {
          alert("This hotel is already saved!");
        }
      });
    }
  });
  
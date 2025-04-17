/*const params = new URLSearchParams(window.location.search);
const hotelId = params.get("id");

const container = document.getElementById("hotel-details");
const modal = document.getElementById("confirmationModal");
const modalHotelName = document.getElementById("modal-hotel-name");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentHotel = null;

// GET hotel from backend
fetch(`https://your-api-url.com/hotels/${hotelId}`)
  .then(res => res.json())
  .then(hotel => {
    currentHotel = hotel;

    container.innerHTML = `
      <div class="hotel-card">
        <img src="${hotel.image}" alt="${hotel.name}" />
        <h2>${hotel.name}</h2>
        <p><strong>Location:</strong> ${hotel.location}</p>
        <p><strong>Price:</strong> $${hotel.price} per night</p>
        <p><strong>Description:</strong> ${hotel.description || "Comfortable rooms and great service!"}</p>
        <button class="save-btn" onclick='saveHotel(${JSON.stringify(hotel)})'>❤️ Save</button>
        <button class="book-btn" onclick="openModal()">Book Now</button>
      </div>
    `;
  })
  .catch(err => {
    container.innerHTML = "<p>Hotel not found</p>";
    console.error(err);
  });

// Modal control
function openModal() {
  modalHotelName.textContent = `Do you want to book "${currentHotel.name}"?`;
  modal.style.display = "flex";
}

cancelBtn.onclick = () => modal.style.display = "none";

confirmBtn.onclick = () => {
  fetch("https://your-api-url.com/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hotel: currentHotel })
  })
  .then(res => res.json())
  .then(data => {
    alert("Booking confirmed!");
    modal.style.display = "none";
  })
  .catch(err => {
    alert("Booking failed!");
    console.error(err);
  });
};

// Save hotel function
function saveHotel(hotel) {
  let saved = JSON.parse(localStorage.getItem('savedHotels')) || [];
  if (!saved.find(h => h.id === hotel.id)) {
    saved.push(hotel);
    localStorage.setItem('savedHotels', JSON.stringify(saved));
    alert("Hotel saved!");
  } else {
    alert("Already saved!");
  }
}*/

const hotels = [
    { id: 1, name: "City Hotel", location: "Tashkent", price: 99, image: "images/city-hotel.jpg" },
    { id: 2, name: "Mountain View", location: "Samarkand", price: 130, image: "images/hotel2.jpg" },
    { id: 3, name: "Silk Road Inn", location: "Bukhara", price: 120, image: "images/hotel3.jpg" },
    { id: 4, name: "Luxury Stay", location: "Khiva", price: 150, image: "images/hotel4.jpg" },
    { id: 5, name: "Lake Side", location: "Shahrisabz", price: 110, image: "images/hotel5.jpg" },
    { id: 6, name: "Desert Palace", location: "Navoi", price: 105, image: "images/hotel6.jpg" },
    { id: 7, name: "City Lights", location: "Andijan", price: 98, image: "images/hotel7.jpg" },
    { id: 8, name: "Sky Tower Hotel", location: "Namangan", price: 140, image: "images/hotel8.jpg" }
  ];

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const hotel = hotels.find(h => h.id === id);
  const container = document.getElementById('hotelContainer');

  if (hotel) {
    container.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img" />
      <h2>${hotel.name}</h2>
      <p><strong>Location:</strong> ${hotel.location}</p>
      <p><strong>Price:</strong> $${hotel.price} / night</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enjoy comfort and luxury in the heart of ${hotel.location}.</p>
      <div class="actions">
        <button class="save-btn" onclick='saveHotel(${JSON.stringify(hotel)})'>❤️ Save</button>
        <button class="book-btn" onclick='bookHotel()'>Book Now</button>
      </div>
    `;
  }

  function saveHotel(hotel) {
    let saved = JSON.parse(localStorage.getItem('savedHotels')) || [];
    if (!saved.find(h => h.id === hotel.id)) {
      saved.push(hotel);
      localStorage.setItem('savedHotels', JSON.stringify(saved));
      alert("Hotel saved!");
    } else {
      alert("Already saved!");
    }
  }

  function bookHotel() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    setTimeout(() => modal.style.display = "none", 2500);
  }




  //save button 
  
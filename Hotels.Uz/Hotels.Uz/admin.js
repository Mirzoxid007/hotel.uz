
// Saqlangan hotellar va foydalanuvchilarni olish
/*function getHotels() {
  return JSON.parse(localStorage.getItem('hotels')) || [];
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

// Hotel qo'shish
document.getElementById('add-hotel-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('hotel-name').value;
  const location = document.getElementById('hotel-location').value;
  const price = document.getElementById('hotel-price').value;
  const image = document.getElementById('hotel-image').value;

  const newHotel = { name, location, price, image };

  const hotels = getHotels();
  hotels.push(newHotel);
  localStorage.setItem('hotels', JSON.stringify(hotels));

  // Formni tozalash
  document.getElementById('add-hotel-form').reset();

  // Ro'yxatni yangilash
  displayHotelList();
});

// Hotel ro'yxatini ko'rsatish
function displayHotelList() {
  const hotels = getHotels();
  const hotelsListContainer = document.getElementById('hotels-list-container');

  hotelsListContainer.innerHTML = '';
  hotels.forEach((hotel, index) => {
    const hotelDiv = document.createElement('div');
    hotelDiv.innerHTML = `
      <strong>${hotel.name}</strong>
      <p>${hotel.location}</p>
      <p>$${hotel.price}</p>
      <img src="${hotel.image}" alt="${hotel.name}" style="width: 100px;">
      <button onclick="deleteHotel(${index})">Delete</button>
    `;
    hotelsListContainer.appendChild(hotelDiv);
  });
}

// Hotelni o'chirish
function deleteHotel(index) {
  const hotels = getHotels();
  hotels.splice(index, 1);
  localStorage.setItem('hotels', JSON.stringify(hotels));

  // Ro'yxatni yangilash
  displayHotelList();
}

// Foydalanuvchilar ro'yxatini ko'rsatish
function displayUserList() {
  const users = getUsers();
  const usersListContainer = document.getElementById('users-list-container');

  usersListContainer.innerHTML = '';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
      <strong>${user.name}</strong>
      <p>Email: ${user.email}</p>
    `;
    usersListContainer.appendChild(userDiv);
  });
}

// Logout funksiyasi
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('authToken');
  window.location.href = 'index.html';
});

// Sahifa yuklanganda ma'lumotlarni ko'rsatish
window.onload = () => {
  displayHotelList();
  displayUserList();
};*/


// Saqlangan hotellar va foydalanuvchilarni olish
function getHotels() {
  return JSON.parse(localStorage.getItem('hotels')) || [];
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

// Hotel qo'shish
document.getElementById('add-hotel-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('hotel-name').value;
  const location = document.getElementById('hotel-location').value;
  const price = document.getElementById('hotel-price').value;
  const image = document.getElementById('hotel-image').value;

  const newHotel = { name, location, price, image };

  const hotels = getHotels();
  hotels.push(newHotel);
  localStorage.setItem('hotels', JSON.stringify(hotels));

  // Formni tozalash
  document.getElementById('add-hotel-form').reset();

  // Ro'yxatni yangilash
  displayHotelList();
});

// Hotel ro'yxatini ko'rsatish
function displayHotelList() {
  const hotels = getHotels();
  const hotelsListContainer = document.getElementById('hotels-list-container');

  hotelsListContainer.innerHTML = '';
  hotels.forEach((hotel, index) => {
    const hotelDiv = document.createElement('div');
    hotelDiv.innerHTML = `
      <strong>${hotel.name}</strong>
      <p>${hotel.location}</p>
      <p>$${hotel.price}</p>
      <img src="${hotel.image}" alt="${hotel.name}">
      <button onclick="deleteHotel(${index})">Delete</button>
    `;
    hotelsListContainer.appendChild(hotelDiv);
  });
}

// Hotelni o'chirish
function deleteHotel(index) {
  const hotels = getHotels();
  hotels.splice(index, 1);
  localStorage.setItem('hotels', JSON.stringify(hotels));

  // Ro'yxatni yangilash
  displayHotelList();
}

// Foydalanuvchilar ro'yxatini ko'rsatish
function displayUserList() {
  const users = getUsers();
  const usersListContainer = document.getElementById('users-list-container');

  usersListContainer.innerHTML = '';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
      <strong>${user.username}</strong>
      <p>Email: ${user.email}</p>
    `;
    usersListContainer.appendChild(userDiv);
  });
}

// Logout funksiyasi
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('authToken');
  window.location.href = 'index.html';
});

// Sahifa yuklanganda ma'lumotlarni ko'rsatish
window.onload = () => {
  displayHotelList();
  displayUserList();
};





document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const userInfo = document.getElementById('user-info');
  const profileUsername = document.getElementById('profile-username');
  const profileEmail = document.getElementById('profile-email');

  // Sign Up
  if (signupForm) {
      signupForm.addEventListener('submit', e => {
          e.preventDefault();
          const username = document.getElementById('signup-username').value;
          const email = document.getElementById('signup-email').value;
          const password = document.getElementById('signup-password').value;

          let users = JSON.parse(localStorage.getItem('users')) || [];
          if (users.some(u => u.email === email)) {
              return alert('User already exists');
          }

          const newUser = { username, email, password };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          alert('Registered successfully!');
      });
  }

  // Login
  if (loginForm) {
      loginForm.addEventListener('submit', e => {
          e.preventDefault();
          const email = document.getElementById('login-email').value;
          const password = document.getElementById('login-password').value;

          const users = JSON.parse(localStorage.getItem('users')) || [];
          const user = users.find(u => u.email === email && u.password === password);

          if (user) {
              localStorage.setItem('token', 'example_token');
              localStorage.setItem('currentUser', JSON.stringify(user));
              alert('Login successful');
              location.reload();
          } else {
              alert('Invalid credentials');
          }
      });
  }

  // Agar foydalanuvchi tizimga kirgan bo‘lsa – profiling ko‘rsatish
  const token = localStorage.getItem('token');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (token && currentUser && userInfo && profileUsername && profileEmail) {
      userInfo.style.display = 'block';
      profileUsername.textContent = currentUser.username;
      profileEmail.textContent = currentUser.email;
  }
});











document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');

  // Ro‘yxatdan o‘tish (Sign Up)
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Yangi foydalanuvchini localStorage ga saqlash
    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Successfully registered! You can now login.');
    signupForm.reset();
  });

  // Tizimga kirish (Login)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      // Successful login
      localStorage.setItem('token', 'your_generated_token');
      localStorage.setItem('currentUser', JSON.stringify(savedUser));
      alert('Login successful!');
      window.location.href = "index.html"; // Bosh sahifaga yo'naltirish
    } else {
      alert('Invalid email or password!');
    }
  });
});







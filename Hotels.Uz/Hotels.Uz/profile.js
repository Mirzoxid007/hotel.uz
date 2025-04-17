/*const user = JSON.parse(localStorage.getItem('currentUser'));
document.getElementById('profile-name').textContent = user?.username;
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (!user) {
    alert('Please login first.');
    window.location.href = 'auth.html';
    return;
  }

  document.getElementById('profile-name').textContent = user?.username;
  document.getElementById('profile-email').textContent = user?.email;

  document.getElementById('sign-out-btn').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    alert('Logged out');
    window.location.href = 'index.html';
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const signOutBtn = document.getElementById('sign-out-btn');
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    alert('Please login first.');
    window.location.href = 'auth.html';
    return;
  }

  // Foydalanuvchi ma’lumotlarini chiqarish
  profileName.textContent = currentUser.username;
  profileEmail.textContent = currentUser.email;

  // Sign Out tugmasi
  signOutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    alert('You have logged out.');
    window.location.href = 'index.html';
  });
});*/


document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (!user) {
    alert('Please login first.');
    window.location.href = 'auth.html';
    return;
  }

  // Show user details
  document.getElementById('profile-name').textContent = user.username;
  document.getElementById('profile-email').textContent = user.email;
  document.getElementById('profile-password').textContent = '**********'; // Hide password by default
  document.getElementById('profile-description').textContent = user.description || ''; // Show description

  // Show profile picture
  const profilePic = document.getElementById('profile-pic');
  const storedPic = localStorage.getItem('profilePic');
  if (storedPic) {
    profilePic.src = storedPic;
  }

  // File upload for profile picture
  document.getElementById('upload-pic').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('profilePic', reader.result);
      profilePic.src = reader.result;
    };
    if (file) reader.readAsDataURL(file);
  });

  // Toggle password visibility
  document.getElementById('toggle-password').addEventListener('click', () => {
    const passwordSpan = document.getElementById('profile-password');
    const currentText = passwordSpan.textContent;

    if (currentText === '**********') {
      passwordSpan.textContent = user.password;
      document.getElementById('toggle-password').textContent = 'Hide';
    } else {
      passwordSpan.textContent = '**********';
      document.getElementById('toggle-password').textContent = 'Show';
    }
  });

  // Sign out button
  document.getElementById('sign-out-btn').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    alert('Logged out');
    window.location.href = 'index.html';
  });

  // Edit profile button
  const editBtn = document.getElementById('edit-profile-btn');
  const editForm = document.getElementById('edit-form');

  editBtn.addEventListener('click', () => {
    editForm.style.display = 'block';
    document.getElementById('edit-name').value = user.username;
    document.getElementById('edit-email').value = user.email;
    document.getElementById('edit-password').value = user.password;
    document.getElementById('edit-description').value = user.description || '';
  });

  // Save edited profile
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newName = document.getElementById('edit-name').value;
    const newEmail = document.getElementById('edit-email').value;
    const newPassword = document.getElementById('edit-password').value;
    const newDescription = document.getElementById('edit-description').value;

    const updatedUser = {
      username: newName,
      email: newEmail,
      password: newPassword,
      description: newDescription
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    alert('Profile updated! Refreshing...');
    window.location.reload();
  });
});

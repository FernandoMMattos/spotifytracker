const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  location.href = 'http://localhost:3000/';
})
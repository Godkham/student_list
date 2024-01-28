var form = document.getElementById('form');
const admin = { email: 'Peter@gmail.com', password: 'Peterlikecat' };

form.btn.addEventListener('click', login);
function login() {
  if (form.username.value == admin.email && form.password.value == admin.password) {
    self.location.href = 'index.html';
    localStorage.setItem('isLogin', true);
    return true;
  } else {
    localStorage.setItem('isLogin', false);
    alert('Sai password hoac username');
    return false;
  }
}

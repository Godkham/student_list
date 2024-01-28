var isLogin = false;
var form = document.getElementById('form');
const admin = { email: 'Peter@gmail.com', password: 'Peterlikecat' };

form.btn.addEventListener('click', login);
function login() {
  if (form.username.value == admin.email && form.password.value == admin.password) {
    self.location.href = 'index.html';
  } else {
    alert('Sai password hoac username');
    return false;
  }
}

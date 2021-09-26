let registeredUsers;

function registerUsers() {

  if(!localStorage.getItem('registeredUsers')) {
    registeredUsers = [];
}
else{
  registeredUsers = localStorage.getItem('registeredUsers');
  registeredUsers = JSON.parse(registeredUsers);
}
  let name = document.getElementById('name').value;
  let lastName = document.getElementById('lastName').value;
  let area = document.getElementById('area').value;
  let position = document.getElementById('position').value;
  let email = document.getElementById('email').value;
  let userName = document.getElementById('userName').value;
  let password = document.getElementById('password').value;

  let newUser = new User(name, lastName, position, area, email,userName, password);
  registeredUsers.push(newUser);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
}

// function clearLocalStorage() {
//   localStorage.clear();
//   usuarios = []
// }
// /* let form = document.getElementById('form');*/
// const nombre = document.getElementById('nombre');
// const apellido = document.getElementById('apellido');
// const cargo = document.getElementById('cargo');
// const area = document.getElementById('area');
// const email = document.getElementById('email');
// const nameUser = document.getElementById('nameUser');
// const password = document.getElementById('password');
// const form = document.getElementById('form');
// const parrafo = document.getElementById('alerta');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let alerta = '';
//   let entrar = false;
//   let expresionName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
//   let expresionApellido = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
//   let expresionCargo = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
//   let expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//   let expresionUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
//   let expresionPass = /^.{4,12}$/;
//   parrafo.innerHTML = '';
//   if (
//     nombre.value === '' ||
//     apellido.value === '' ||
//     cargo.value === '' ||
//     area.value === '' ||
//     email.value === '' ||
//     nameUser.value === '' ||
//     password.value === ''
//   ) {
//     alerta += ` ¡todos los campos son obligatorios¡<br>  `;
//     entrar = true;
//   }
//   if (!expresionName.test(nombre.value)) {
//     alerta += ` ¡el nombre no es valido! <br>  `;
//     entrar = true;
//   }
//   if (!expresionApellido.test(apellido.value)) {
//     alerta += ` ¡el apellido no es valido! <br>  `;
//     entrar = true;
//   }
//   if (!expresionCargo.test(cargo.value)) {
//     alerta += ` ¡el cargo no es valido! <br>  `;
//     entrar = true;
//   }

//   if (!expresionEmail.test(email.value)) {
//     alerta += ` ¡el email no es valido! <br>  `;
//   }
//   if (!expresionUsuario.test(nameUser.value)) {
//     alerta += ` ¡el nombre de usuario no es valido! <br>  `;
//   }
//   if (!expresionPass.test(password.value)) {
//     alerta += ` ¡la contraseña no es valida! <br>  `;
//   }

//   if (entrar) {
//     parrafo.innerHTML = alerta;
//   } else {
//     parrafo.innerHTML = 'Registrado';
//   }
// });

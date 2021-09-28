let registeredUsers;
if (localStorage.getItem("loggedUser")) {
  alert("Usted ya se encuentra loguedo en Colegio Pinares");
  window.location.assign('../index.html');
  }

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

  if(name !== '' && lastName !== '' && email !== '' && userName !== '' && password !== '' ) {
    if(registeredUsers.length === 0){
      let newUser = new User(name, lastName, position, area, email,userName, password);
      registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
      alert("¡Registro exitoso! Ahora puede iniciar sesión")
    }
    else{
      const foundMatchingUserName = registeredUsers.findIndex (user => user.userName === userName)
      const foundMatchingEmail = registeredUsers.findIndex (user => user.email === email)
      if(foundMatchingUserName !== -1){
        alert('El nombre de usuario ya se encuentra registrado.');
      }
      else if(foundMatchingEmail !== -1){
        alert('La dirección de mail ingresada ya se encuentra registrada');
      }
           else {
              let newUser = new User(name, lastName, position, area, email,userName, password);
              registeredUsers.push(newUser);
             localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
              alert("¡Registro exitoso! Puede iniciar sesión ")
           }
        
      }
    }
}



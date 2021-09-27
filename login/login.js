let registeredUsers;
if (localStorage.getItem("loggedUser")) {
    window.location.assign('../admin.html')
  }

  function login() {
    if(!localStorage.getItem('registeredUsers')) {
        registeredUsers = [];
    }
    else{
      registeredUsers = localStorage.getItem('registeredUsers');
      registeredUsers = JSON.parse(registeredUsers);
    }
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        
        for(let i=0; i<registeredUsers.length; i++){
            localStorage.setItem('loggedUser', userName);
            if(registeredUsers[i].userName == userName && registeredUsers[i].password == password) {
                window.location.assign ('../index.html');
            }
        }
    }






let registeredUsers;
if(!localStorage.getItem('registeredUsers')) {
    registeredUsers = [];
}
else{
  registeredUsers = localStorage.getItem('registeredUsers');
  registeredUsers = JSON.parse(registeredUsers);
}

if (localStorage.getItem("loggedUser")) {
    for(let i=0; i<registeredUsers.length; i++){
        if(registeredUsers[i].userName == localStorage.getItem("loggedUser")) {
            if(registeredUsers[i].area == "Docente"){
                window.location.assign ('../teaching/teaching.html');
            }
            else{
                    window.location.assign ('../nonTeaching/nonTeaching.html');
                }
            }
        }
    }

  function login() {

        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;

        if(userName !== '' && password !== ''){
            const foundMatchingUserName = registeredUsers.findIndex(user => user.userName === userName);
            const foundMatchingPassWord = registeredUsers.findIndex(user => user.password === password);

            if(foundMatchingUserName !== -1 && foundMatchingPassWord !== -1){
                for(let i=0; i<registeredUsers.length; i++){
                    localStorage.setItem('loggedUser', userName);
                    if(registeredUsers[i].userName == userName && registeredUsers[i].password == password) {
                        if(registeredUsers[i].area == "Docente"){
                            window.location.assign ('../teaching/teaching.html');
                        }
                        else{
                            window.location.assign ('../nonTeaching/nonTeaching.html');
                        }
                    }
                }
            }
            else{
                alert("El nombre de usuario y/o la contraseña ingresados son incorrectos");
            }
        }

    }
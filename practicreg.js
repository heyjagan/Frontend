let Users = JSON.parse(localStorage.getItem("Users")) || [
  {
    username: "jd",
    password: "jagan@123"
  },
  {
    username: "director",
    password: "dir@123"
  }
];

function saveUsers() {
  localStorage.setItem("Users", JSON.stringify(Users));
}

let login = document.getElementById("loginform");
if (login) {
  login.addEventListener("submit", function (event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let userData = Object.fromEntries(formdata.entries());

    if (
      Users.find(
        user =>
          user.username === userData.username &&
          user.password === userData.password
      )
    ) {
      window.location.replace("Homepage.html");
    } else {
      window.location.replace("registration.html");
    }
  });
}

let register = document.getElementById("Registerform");
if (register) {
  register.addEventListener("submit", function (event) {
    event.preventDefault();
    let registerform = new FormData(event.target);
    let registerData = Object.fromEntries(registerform.entries());
    console.log(registerData.username);

    if (
      !Users.find(
        user =>
          user.username === registerData.username &&
          user.password === registerData.password
      )
    ) {
      let temp = {
        username: registerData.username,
        password: registerData.password
      };
      Users.push(temp);
      localStorage.setItem("Users", JSON.stringify(Users));
      window.location.replace("Loginpage.html");
      console.log("True");
    }else{
        console.log("false");
    }
  }); 
}

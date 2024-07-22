document.querySelectorAll(".info__item .btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("login");
  });
});

function register(event) {
  event.preventDefault();

  let username = document.getElementById("regUsername").value.trim();
  let password = document.getElementById("regPassword").value.trim();
  let email = document.getElementById("regEmail").value.trim();
  let fullName = document.getElementById("regFullName").value.trim();
  let regMessage = document.getElementById("regMessage");

  let lowerCaseLeter = /[a-z]/g;
  let upperCaseLeter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  let codeRed = (regMessage.style.color = "red");

  if (!username || !password || !email || !fullName) {
    regMessage.innerText = "Please fill in the blanks! ";
    return codeRed;
  }

  if (password.length < 8) {
    regMessage.innerText = "Password less than 8 characted!  ";
    return;
  }
  if (!lowerCaseLeter.test(password)) {
    regMessage.innerText =
      "Password must contain at least one lowercase letter! ";
    return;
  }
  if (!upperCaseLeter.test(password)) {
    regMessage.innerText =
      "Password must contain at least one upperCase letter! ";
    return;
  }

  if (!numbers.test(password)) {
    regMessage.innerText = "Password must contain at least one numbers! ";
    return;
  }

  let user = {
    usename: username,
    password: password,
    fullName: fullName,
    email: email,
  };

  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {};

  if (users[username]) {
    regMessage.innerText = "Username already exists";
  } else {
    users[username] = user;
    localStorage.setItem("users", JSON.stringify(users));
    regMessage.innerText = "Registration successfull!";
    regMessage.style.color = "green";
  }
}

// --------------

function login(event) {
  event.preventDefault();

  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let loginMassage = document.getElementById("loginMessage");

  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {};
  let storeUser = users[username];

  if (storeUser && storeUser.password === password) {
    window.location.href = "SuccessAccess.html";
  } else {
    loginMassage.innerText = " Invalid username or password !";
    loginMassage.style.color = "red";
  }
}

// --------------

function logout() {
  window.location.href = "ListToDo.html";
}

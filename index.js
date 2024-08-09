function storeToJSON() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        username: username,
        password: password,
        action: "Login"
    };

    console.log(JSON.stringify(data));
  
}
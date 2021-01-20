function renderLoginForm() {
    clearBody();
    let body = document.getElementById("body");

    let div = document.createElement("div");
    div.id = "outer-login";
    div.classList.add('rounded', 'border', 'border-light', 'shadow', 'outer-login');
    body.appendChild(div);

    let outerLogin = document.getElementById("outer-login")

    let h1 = document.createElement("h1");
    h1.style.marginTop = "2em";
    h1.innerHTML = "Login Form"
    div.appendChild(h1);

    let div2 = document.createElement("div");
    div2.id = "inner-login";
    div2.classList.add('mx-auto','inner-login');
    div.appendChild(div2);

    let input = document.createElement("input");
    input.id = "email";
    input.classList.add("input-group-text","border","border-dark","input-text-login");
    input.type = "email";
    input.placeholder = "E-Mail";
    div2.appendChild(input);
    div2.appendChild(document.createElement("br"));

    let input2 = document.createElement("input");
    input2.id = "password";
    input2.classList.add("input-group-text","border","border-dark","input-text-login");
    input2.type = "password";
    input2.placeholder = "Password";
    div2.appendChild(input2);

    let btn = document.createElement("button");
    btn.innerHTML = "Login";
    // btn.setAttribute("onclick", "clearImage()");
    btn.classList.add('btn','btn-outline-primary','btn-lg','btn-block');
    btn.style.marginTop = "1em";
    div2.appendChild(btn);

}
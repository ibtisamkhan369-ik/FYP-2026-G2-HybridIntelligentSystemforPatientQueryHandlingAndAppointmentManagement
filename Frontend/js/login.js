const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        if (data.success) {

            // Save JWT Token
            localStorage.setItem("token", data.token);

            // Save User Information
            localStorage.setItem("user", JSON.stringify(data.user));

            message.style.color = "green";
            message.innerHTML = data.message;

            // Redirect after 1 second
            setTimeout(() => {

                window.location.href = "dashboard.html";

            }, 1000);

        } else {

            message.style.color = "red";
            message.innerHTML = data.message;

        }

    } catch (error) {

        message.style.color = "red";
        message.innerHTML = "Server Error";

        console.log(error);

    }

});
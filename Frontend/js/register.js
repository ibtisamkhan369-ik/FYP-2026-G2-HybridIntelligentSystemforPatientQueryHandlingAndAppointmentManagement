const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const full_name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    try {

        const response = await fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                full_name,
                email,
                password,
                phone
            })

        });

        const data = await response.json();

        if (data.success) {

            message.style.color = "green";
            message.innerHTML = data.message;

            form.reset();

        } else {

            message.style.color = "red";
            message.innerHTML = data.message;

        }

    } catch (error) {

    console.log(error);

    message.style.color = "red";
    message.innerHTML = error.message;

}

});
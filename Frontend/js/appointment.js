const user = JSON.parse(localStorage.getItem("user"));
const department = localStorage.getItem("department");

if (!user) {
    window.location.href = "index.html";
}

document.getElementById("patientName").value = user.full_name;
document.getElementById("department").value = department;

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const appointment = {

        patient: user.full_name,
        email: user.email,
        department: department,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value

    };

    localStorage.setItem(
        "appointment",
        JSON.stringify(appointment)
    );

    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML =
        "Appointment Booked Successfully!";

});
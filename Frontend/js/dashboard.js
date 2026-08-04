// ===============================
// Hybrid Intelligent Hospital System
// Patient Dashboard
// ===============================

// Check if user is logged in
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

// Redirect to Login if no user is logged in
if (!token || !user) {
    window.location.href = "index.html";
}

// ===============================
// Display Logged-in User Information
// ===============================

document.getElementById("welcome").innerHTML =
    "Welcome, " + user.full_name;

document.getElementById("email").innerHTML =
    "<strong>Email:</strong> " + user.email;

document.getElementById("role").innerHTML =
    "<strong>User Role:</strong> " + user.role;


// ===============================
// Book Appointment
// ===============================

document.getElementById("appointmentBtn").addEventListener("click", () => {

    window.location.href = "appointment.html";

});


// ===============================
// Submit Patient Query
// ===============================

document.getElementById("queryBtn").addEventListener("click", () => {

    window.location.href = "patient-query.html";

});


// ===============================
// My Appointments
// ===============================

document.getElementById("historyBtn").addEventListener("click", () => {

    window.location.href = "my-appointments.html";

});


// ===============================
// Query History
// ===============================

document.getElementById("queryHistoryBtn").addEventListener("click", () => {

    window.location.href = "query-history.html";

});


// ===============================
// Logout
// ===============================

document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "index.html";

});
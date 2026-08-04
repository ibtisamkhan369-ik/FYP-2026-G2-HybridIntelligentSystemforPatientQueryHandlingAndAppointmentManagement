const department = localStorage.getItem("department");
const urgency = localStorage.getItem("urgency");
const recommendation = localStorage.getItem("recommendation");

// If no recommendation exists, go back
if (!department) {
    window.location.href = "patient-query.html";
}

// Display recommendation
document.getElementById("department").innerHTML =
    "🏥 Department: " + department;

document.getElementById("urgency").innerHTML =
    "<strong>Urgency:</strong> " + urgency;

document.getElementById("recommendation").innerHTML =
    recommendation;

// Appointment Button
document.getElementById("appointmentBtn").addEventListener("click", () => {

    window.location.href = "appointment.html";

});

// Dashboard Button
document.getElementById("dashboardBtn").addEventListener("click", () => {

    window.location.href = "dashboard.html";

});
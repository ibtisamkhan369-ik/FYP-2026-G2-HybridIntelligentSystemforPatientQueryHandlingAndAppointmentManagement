const appointment = JSON.parse(localStorage.getItem("appointment"));

const table = document.getElementById("appointmentBody");

if (appointment) {

    table.innerHTML = `

        <tr>

            <td>${appointment.department}</td>

            <td>${appointment.date}</td>

            <td>${appointment.time}</td>

            <td>Pending</td>

        </tr>

    `;

}
else{

    table.innerHTML = `

        <tr>

            <td colspan="4">

                No appointments found.

            </td>

        </tr>

    `;

}

document.getElementById("dashboardBtn").addEventListener("click",()=>{

    window.location.href="dashboard.html";

});
const form = document.getElementById("queryForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const symptoms = document
        .getElementById("symptoms")
        .value
        .toLowerCase();

    let department = "";
    let urgency = "";
    let recommendation = "";

    if (
        symptoms.includes("chest pain") ||
        symptoms.includes("heart") ||
        symptoms.includes("shortness of breath")
    ) {

        department = "Cardiology";
        urgency = "High";

        recommendation =
            "Please consult the Cardiology department immediately.";

    }

    else if (
        symptoms.includes("headache") ||
        symptoms.includes("migraine") ||
        symptoms.includes("dizziness")
    ) {

        department = "Neurology";
        urgency = "Medium";

        recommendation =
            "A Neurology consultation is recommended.";

    }

    else if (
        symptoms.includes("fracture") ||
        symptoms.includes("broken bone") ||
        symptoms.includes("bone")
    ) {

        department = "Orthopedics";
        urgency = "High";

        recommendation =
            "Visit the Orthopedics department as soon as possible.";

    }

    else if (
        symptoms.includes("fever") ||
        symptoms.includes("cough") ||
        symptoms.includes("cold")
    ) {

        department = "General Medicine";
        urgency = "Low";

        recommendation =
            "Consult the General Medicine department.";

    }

    else {

        department = "General OPD";
        urgency = "Low";

        recommendation =
            "Please visit the General OPD for further evaluation.";

    }

    localStorage.setItem("department", department);
    localStorage.setItem("urgency", urgency);
    localStorage.setItem("recommendation", recommendation);

    window.location.href = "recommendation.html";

});
const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date()
        .toISOString()
        .split("T")[0];

    dateInput.min = today;

}
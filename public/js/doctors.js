const doctors = [

    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        experience: "15+ Years Experience",
        location: "Hyderabad",
        image: "/images/doctors/doctor-1.jpg"
    },

    {
        name: "Dr. Michael Anderson",
        specialty: "Neurology",
        experience: "12+ Years Experience",
        location: "Bengaluru",
        image: "/images/doctors/doctor-2.jpg"
    },

    {
        name: "Dr. Emily Williams",
        specialty: "Pediatrics",
        experience: "10+ Years Experience",
        location: "Chennai",
        image: "/images/doctors/doctor-3.jpg"
    },

    {
        name: "Dr. James Wilson",
        specialty: "Orthopedics",
        experience: "14+ Years Experience",
        location: "Hyderabad",
        image: "/images/doctors/doctor-4.jpg"
    },

    {
        name: "Dr. Olivia Brown",
        specialty: "Dermatology",
        experience: "9+ Years Experience",
        location: "Mumbai",
        image: "/images/doctors/doctor-5.jpg"
    },

    {
        name: "Dr. Daniel Miller",
        specialty: "General Medicine",
        experience: "11+ Years Experience",
        location: "Hyderabad",
        image: "/images/doctors/doctor-6.jpg"
    },

    {
        name: "Dr. Sophia Davis",
        specialty: "Dentistry",
        experience: "8+ Years Experience",
        location: "Bengaluru",
        image: "/images/doctors/doctor-7.jpg"
    },

    {
        name: "Dr. William Taylor",
        specialty: "Gastroenterology",
        experience: "16+ Years Experience",
        location: "Chennai",
        image: "/images/doctors/doctor-8.jpg"
    },

    {
        name: "Dr. Emma Thomas",
        specialty: "Gynecology",
        experience: "13+ Years Experience",
        location: "Hyderabad",
        image: "/images/doctors/doctor-9.jpg"
    }

];


const doctorsGrid =
    document.getElementById("doctorsGrid");

const doctorCount =
    document.getElementById("doctorCount");

const noDoctors =
    document.getElementById("noDoctors");

const doctorSearch =
    document.getElementById("doctorSearch");

const specialtyFilter =
    document.getElementById("specialtyFilter");

const locationFilter =
    document.getElementById("locationFilter");

const searchButton =
    document.getElementById("doctorSearchButton");

const clearFilters =
    document.getElementById("clearFilters");


function displayDoctors(list) {

    doctorsGrid.innerHTML = "";


    if (list.length === 0) {

        noDoctors.style.display = "block";

        doctorCount.textContent =
            "0 doctors found";

        return;
    }


    noDoctors.style.display = "none";


    doctorCount.textContent =
        `${list.length} doctor${list.length > 1 ? "s" : ""} available`;


    list.forEach((doctor, index) => {

        const card =
            document.createElement("article");

        card.className = "doctor-card";


        card.innerHTML = `

            <div class="doctor-image">

                <img
                    src="${doctor.image}"
                    alt="${doctor.name}"
                    onerror="this.src='/images/doctors/default-doctor.jpg'"
                >

                <span class="doctor-status">
                    Available
                </span>

            </div>


            <div class="doctor-content">

                <span class="doctor-specialty">
                    ${doctor.specialty}
                </span>

                <h3>
                    ${doctor.name}
                </h3>

                <div class="doctor-experience">
                    ${doctor.experience}
                </div>

                <div class="doctor-location">
                    📍 ${doctor.location}
                </div>


                <div class="doctor-actions">

                    <a
                        href="/find-doctor/${index + 1}"
                        class="doctor-profile-btn"
                    >
                        View Profile
                    </a>

                    <a
                        href="/appointment"
                        class="doctor-book-btn"
                    >
                        Book Now
                    </a>

                </div>

            </div>

        `;


        doctorsGrid.appendChild(card);

    });

}


function filterDoctors() {

    const searchValue =
        doctorSearch.value
            .trim()
            .toLowerCase();

    const specialtyValue =
        specialtyFilter.value;

    const locationValue =
        locationFilter.value;


    const filtered =
        doctors.filter(doctor => {

            const matchesSearch =
                !searchValue ||
                doctor.name.toLowerCase().includes(searchValue) ||
                doctor.specialty.toLowerCase().includes(searchValue);


            const matchesSpecialty =
                specialtyValue === "all" ||
                doctor.specialty === specialtyValue;


            const matchesLocation =
                locationValue === "all" ||
                doctor.location === locationValue;


            return (
                matchesSearch &&
                matchesSpecialty &&
                matchesLocation
            );

        });


    displayDoctors(filtered);

}


searchButton.addEventListener(
    "click",
    filterDoctors
);


doctorSearch.addEventListener(
    "input",
    filterDoctors
);


specialtyFilter.addEventListener(
    "change",
    filterDoctors
);


locationFilter.addEventListener(
    "change",
    filterDoctors
);


clearFilters.addEventListener(
    "click",
    () => {

        doctorSearch.value = "";

        specialtyFilter.value = "all";

        locationFilter.value = "all";

        displayDoctors(doctors);

    }
);


displayDoctors(doctors);
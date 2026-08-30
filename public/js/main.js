document.addEventListener("DOMContentLoaded", () => {

    const slides =
        document.querySelectorAll(".hero-slide");

    const prevButton =
        document.getElementById("heroPrev");

    const nextButton =
        document.getElementById("heroNext");

    const slideNumber =
        document.getElementById("heroSlideNumber");

    const title =
        document.getElementById("heroTitle");

    const description =
        document.getElementById("heroDescription");


    if (
        !slides.length ||
        !prevButton ||
        !nextButton ||
        !slideNumber ||
        !title ||
        !description
    ) {
        return;
    }


    const heroContent = [

        {
            number: "01",

            title: `
                Your Health.
                <span>Our Priority.</span>
            `,

            description:
                "Access trusted healthcare services, expert medical professionals, and personalized care designed around your needs."
        },


        {
            number: "02",

            title: `
                We care for
                <span>your health.</span>
            `,

            description:
                "We provide personalized healthcare services designed to support your wellbeing and help you receive the care you need."
        },


        {
            number: "03",

            title: `
                Healthcare
                <span>From Anywhere.</span>
            `,

            description:
                "Connect with healthcare professionals online and access convenient telemedicine services from wherever you are."
        }

    ];


    let currentSlide = 0;


    function showSlide(index) {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }


        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === index
            );

        });


        const content =
            heroContent[index];


        slideNumber.textContent =
            content.number;


        title.innerHTML =
            content.title;


        description.textContent =
            content.description;


        currentSlide = index;

    }


    prevButton.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide - 1
            );

        }
    );


    nextButton.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide + 1
            );

        }
    );


    // Start with slide 1
    showSlide(0);


    // Automatic slideshow
    let autoSlide =
        setInterval(() => {

            showSlide(
                currentSlide + 1
            );

        }, 6000);


    // Reset automatic timer when user clicks
    function resetAutoSlide() {

        clearInterval(autoSlide);

        autoSlide =
            setInterval(() => {

                showSlide(
                    currentSlide + 1
                );

            }, 6000);

    }


    prevButton.addEventListener(
        "click",
        resetAutoSlide
    );

    nextButton.addEventListener(
        "click",
        resetAutoSlide
    );

});
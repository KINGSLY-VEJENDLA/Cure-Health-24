document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("healthSearch");

    const searchButton =
        document.getElementById("searchHealth");

    const searchResults =
        document.getElementById("searchResults");


    if (!searchInput || !searchButton || !searchResults) {

        console.error(
            "Health Library search elements not found."
        );

        return;
    }


    function searchHealthLibrary() {

        const searchTerm =
            searchInput.value.trim().toLowerCase();


        if (!searchTerm) {

            searchResults.innerHTML = "";

            return;
        }


        const results = healthLibrary.filter(function (item) {

            return (

                item.title
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                item.category
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                item.description
                    .toLowerCase()
                    .includes(searchTerm)

            );

        });


        if (results.length === 0) {

            searchResults.innerHTML = `

                <div class="no-health-results">

                    <h3>
                        No results found
                    </h3>

                    <p>
                        We couldn't find information matching
                        "<strong>${searchInput.value}</strong>".
                    </p>

                    <a href="/health-library/conditions">
                        Browse All Conditions →
                    </a>

                </div>

            `;

            return;
        }


        searchResults.innerHTML = `

            <div class="search-result-heading">

                <span>
                    Search Results
                </span>

                <strong>
                    ${results.length}
                    result${results.length > 1 ? "s" : ""}
                </strong>

            </div>


            <div class="search-result-list">

                ${results.map(function (item) {

                    return `

                        <a
                            href="${item.url}"
                            class="search-result-card"
                        >

                            <div class="search-result-icon">
                                +
                            </div>


                            <div class="search-result-content">

                                <span>
                                    ${item.category}
                                </span>

                                <h3>
                                    ${item.title}
                                </h3>

                                <p>
                                    ${item.description}
                                </p>

                            </div>


                            <div class="search-result-arrow">
                                →
                            </div>

                        </a>

                    `;

                }).join("")}

            </div>

        `;

    }


    searchButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            searchHealthLibrary();

        }
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchHealthLibrary();

            }

        }
    );

});
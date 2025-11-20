document.getElementById("ratingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const results = {};

    for (const [key, value] of formData.entries()) {
        results[key] = Number(value);
    }

    document.getElementById("resultsBox").textContent =
        JSON.stringify(results, null, 2);
});

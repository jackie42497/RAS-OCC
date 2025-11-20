const categories = [
    {
        label: "Tumor Size",
        options: [
            { text: "≤2 cm", points: 1 },
            { text: "2–4 cm", points: 2 },
            { text: ">4 cm", points: 3 }
        ]
    },
    {
        label: "Depth of Invasion",
        options: [
            { text: "<5 mm", points: 1 },
            { text: "5–10 mm", points: 2 },
            { text: ">10 mm", points: 3 }
        ]
    },
    {
        label: "Nodal Status",
        options: [
            { text: "N0", points: 0 },
            { text: "N1", points: 1 },
            { text: "N2/N3", points: 2 }
        ]
    }
];

function buildCategories() {
    const container = document.getElementById("categoriesContainer");

    categories.forEach((cat, index) => {
        const div = document.createElement("div");
        div.className = "category";

        const label = document.createElement("div");
        label.className = "category-label";
        label.textContent = cat.label;
        div.appendChild(label);

        cat.options.forEach((opt, optIndex) => {
            const optionDiv = document.createElement("div");
            optionDiv.className = "option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `category${index}`;
            input.value = opt.points;

            input.addEventListener("change", updateTotal);

            const text = document.createElement("span");
            text.textContent = opt.text + " (" + opt.points + ")";

            optionDiv.appendChild(text);
            optionDiv.appendChild(input);

            div.appendChild(optionDiv);
        });

        container.appendChild(div);
    });
}

function updateTotal() {
    let total = 0;
    const inputs = document.querySelectorAll("input[type='radio']:checked");

    inputs.forEach(i => {
        total += parseInt(i.value);
    });

    document.getElementById("totalScore").textContent = total;
}

buildCategories();

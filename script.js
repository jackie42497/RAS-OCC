function calculateTotal() {
    let total = 0;

    document.querySelectorAll("input[type='radio']:checked").forEach(r => {
        total += Number(r.value);
    });

    const multiple = document.getElementById("multipleFlaps").checked;
    if (multiple) total += 2;  // adjust if needed

    document.getElementById("totalScore").textContent = total;
}

document.querySelectorAll("input[type='radio'], input[type='checkbox']")
    .forEach(input => input.addEventListener("change", calculateTotal));

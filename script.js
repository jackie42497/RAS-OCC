function calculateTotal() {
    let total = 0;

    // Add all selected radio button values
    document.querySelectorAll("input[type='radio']:checked").forEach(r => {
        total += Number(r.value);
    });

    // Add point for multiple flaps if toggle active
    const multiple = document.getElementById("multipleFlaps").checked;
    if (multiple) total += 2;  // adjust if needed

    document.getElementById("totalScore").textContent = total;
}

// Live updates
document.querySelectorAll("input[type='radio'], input[type='checkbox']")
    .forEach(input => input.addEventListener("change", calculateTotal));

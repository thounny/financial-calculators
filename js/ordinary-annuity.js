// Event listener for Calculate button
document.querySelector(".btn-primary").addEventListener("click", function () {
  // Get values from input fields
  const payout = document.getElementById("payout").value;
  const interestRate = document.getElementById("interestRate").value;
  const years = document.getElementById("years").value;

  // Check if all fields have values
  if (payout && interestRate && years) {
    // Calculate present value
    const presentValue = calculatePresentValue(payout, interestRate, years);

    // Display the result in the input field
    document.getElementById("presentValue").value = presentValue.toFixed(2);
  } else {
    alert("Please fill in all fields.");
  }
});

// Reset button
document.querySelector(".btn-secondary").addEventListener("click", function () {
  // Reset the result field
  document.getElementById("presentValue").value = "";
});

// Function to calculate present value of an annuity
function calculatePresentValue(payout, interestRate, years) {
  const r = interestRate / 100; // Convert percentage rate to decimal
  const n = years * 12; // Convert years to months

  // Formula for present value of an annuity
  const presentValue = payout * ((1 - Math.pow(1 + r / 12, -n)) / (r / 12));

  return presentValue; // Return the calculated present value
}

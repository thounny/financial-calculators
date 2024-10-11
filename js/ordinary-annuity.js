// Event listener for Calculate button
document.querySelector(".btn-primary").addEventListener("click", function () {
  // Get values from input fields
  const payout = parseFloat(document.getElementById("payout").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const years = parseInt(document.getElementById("years").value);

  // Error handling: Check if the input fields have valid values
  if (isNaN(payout) || payout <= 0) {
    alert("Please enter a valid payout amount greater than zero.");
    return;
  }
  if (isNaN(interestRate) || interestRate < 0) {
    alert("Please enter a valid interest rate (0 or higher).");
    return;
  }
  if (isNaN(years) || years <= 0) {
    alert("Please enter a valid number of years greater than zero.");
    return;
  }

  // Calculate present value
  const presentValue = calculatePresentValue(payout, interestRate, years);

  // Display the result in the input field
  document.getElementById("presentValue").value = presentValue.toFixed(2);
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

// Event listener for Calculate button
document.querySelector(".btn-primary").addEventListener("click", function () {
  // Get the values from the input fields
  const deposit = document.getElementById("deposit").value;
  const interestRate = document.getElementById("interestRate").value;
  const years = document.getElementById("years").value;

  // Check if all the input fields have values
  if (deposit && interestRate && years) {
    // Calculate future value and total interest
    const futureValue = calculateFutureValue(deposit, interestRate, years);
    const totalInterest = calculateTotalInterest(futureValue, deposit);

    // Results in the input fields
    document.getElementById("futureValue").value = futureValue.toFixed(2);
    document.getElementById("totalInterest").value = totalInterest.toFixed(2);
  }
});

// Reset button
document.querySelector(".btn-secondary").addEventListener("click", function () {
  document.getElementById("futureValue").value = "";
  document.getElementById("totalInterest").value = "";
});

// Function for future value
function calculateFutureValue(deposit, interestRate, years) {
  const rate = interestRate / 100;
  return deposit * (1 + rate) ** years; // Future value formula
}

// Function for total interest earned
function calculateTotalInterest(futureValue, deposit) {
  return futureValue - deposit; // Subtract initial deposit from future value
}

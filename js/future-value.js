// Event listener for Calculate button
document.querySelector(".btn-primary").addEventListener("click", function () {
  // Get the values from the input fields
  const deposit = parseFloat(document.getElementById("deposit").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const years = parseInt(document.getElementById("years").value);

  // Error handling: check if all input fields have values and if they are valid numbers
  if (isNaN(deposit) || deposit <= 0) {
    alert("Please enter a valid deposit amount greater than zero.");
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

  // Calculate future value and total interest
  const futureValue = calculateFutureValue(deposit, interestRate, years);
  const totalInterest = calculateTotalInterest(futureValue, deposit);

  // Display the results in the input fields
  document.getElementById("futureValue").value = futureValue.toFixed(2);
  document.getElementById("totalInterest").value = totalInterest.toFixed(2);
});

// Reset button functionality
document.querySelector(".btn-secondary").addEventListener("click", function () {
  document.getElementById("futureValue").value = "";
  document.getElementById("totalInterest").value = "";
});

// Function to calculate future value
function calculateFutureValue(deposit, interestRate, years) {
  const rate = interestRate / 100;
  return deposit * (1 + rate) ** years; // Future value formula
}

// Function to calculate total interest earned
function calculateTotalInterest(futureValue, deposit) {
  return futureValue - deposit; // Subtract initial deposit from future value
}

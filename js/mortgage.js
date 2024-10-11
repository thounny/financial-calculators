// Event listener for Calculate button
document.querySelector(".btn-primary").addEventListener("click", function () {
  // Get values from input fields
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const loanTerm = parseInt(document.getElementById("loanTerm").value);

  // Error handling: Check if the input fields have valid values
  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid principal amount greater than zero.");
    return;
  }
  if (isNaN(interestRate) || interestRate < 0) {
    alert("Please enter a valid interest rate (0 or higher).");
    return;
  }
  if (isNaN(loanTerm) || loanTerm <= 0) {
    alert("Please enter a valid loan term greater than zero.");
    return;
  }

  // Calculate monthly payment and total interest
  const monthlyPayment = calculateMonthlyPayment(
    principal,
    interestRate,
    loanTerm
  );
  const totalInterest = calculateTotalInterest(
    principal,
    monthlyPayment,
    loanTerm
  );

  // Display the results in input fields
  document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2);
  document.getElementById("totalInterest").value = totalInterest.toFixed(2);
});

// Reset button
document.querySelector(".btn-secondary").addEventListener("click", function () {
  // Reset the result fields
  document.getElementById("monthlyPayment").value = "";
  document.getElementById("totalInterest").value = "";
});

// Function for monthly payment calculation
function calculateMonthlyPayment(principal, yearlyInterestRate, termInYears) {
  const monthlyInterestRate = yearlyInterestRate / 12 / 100; // Convert yearly rate to monthly and percentage
  const numberOfPayments = termInYears * 12;

  // Formula for monthly payment
  const monthlyPayment =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  return monthlyPayment; // Return the calculated monthly payment
}

// Function for total interest paid calculation
function calculateTotalInterest(principal, monthlyPayment, loanTerm) {
  const totalPaid = monthlyPayment * loanTerm * 12; // Calculate total amount paid
  const totalInterest = totalPaid - principal; // Subtract the principal to get total interest
  return totalInterest; // Return total interest
}

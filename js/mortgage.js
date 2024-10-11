// Event listener for Calculate button
document.querySelector(".btn-primary").addEventListener("click", function () {
  // Get values from input fields
  const principal = document.getElementById("principal").value;
  const interestRate = document.getElementById("interestRate").value;
  const loanTerm = document.getElementById("loanTerm").value;

  // Check if all fields have values
  if (principal && interestRate && loanTerm) {
    // monthly payment and total interest
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
  } else {
    alert("Please fill in all fields.");
  }
});

// Event listener for Reset button
document.querySelector(".btn-secondary").addEventListener("click", function () {
  // Reset
  document.getElementById("monthlyPayment").value = "";
  document.getElementById("totalInterest").value = "";
});

// Function for monthly payment
function calculateMonthlyPayment(principal, YearlyInterestRate, termInYears) {
  const monthlyInterestRate = YearlyInterestRate / 12 / 100; // Convert yearly rate to monthly and percentage
  const numberOfPayments = termInYears * 12;

  // Formula for monthly payment
  const monthlyPayment =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  return monthlyPayment; // Return the calculated monthly payment
}

// Total interest paid
function calculateTotalInterest(principal, monthlyPayment, loanTerm) {
  const totalPaid = monthlyPayment * loanTerm * 12; // Calculate total amount paid
  const totalInterest = totalPaid - principal; // Subtract the principal to get total interest
  return totalInterest; // Return total interest
}

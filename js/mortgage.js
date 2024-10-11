function calculateMonthlyPayment(
  principalLoanAmountInK,
  YearlyInterestRate,
  termInYears
) {
  const monthlyInterestRate = YearlyInterestRate / 12;
  const numberOfPayments = termInYears * 12;

  const P = principalLoanAmountInK * 1000;
  const r = monthlyInterestRate / 100; //annual rate divided by 12
  const n = numberOfPayments; // loan term in months

  const M = P * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
  const monthlyPayment = M;
  return monthlyPayment;
}
console.log(calculateMonthlyPayment(200, 4, 30));

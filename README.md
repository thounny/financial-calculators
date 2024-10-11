# Financial Calculators

This project is a collection of financial calculators, including a **Mortgage Calculator**, **Future Value Calculator**, and **Present Value of Annuity Calculator**, built with **HTML**, **CSS**, **Bootstrap**, **98.css** for a retro aesthetic, and **JavaScript** for functionality.

These calculators provide users with essential financial information, such as **mortgage payments**, **future savings growth**, and **annuity present values**.

## Screenshots

### Home Page

![Home Page](./screenshots/Financial%20Calculators-HOME.png)

### Mortgage Calculator

![Mortgage Calculator](./screenshots/Financial%20Calculators-Mortgage_Calculator.png)

### Future Value Calculator

![Future Value Calculator](./screenshots/Financial%20Calculators-Future_Value_Calculator.png)

### Present Value of Annuity Calculator

![Annuity Calculator](./screenshots/FinancialCalculator-Annuity_Calculator.png)

---

### Error Handling Examples

![Error Handling Example 1](/screenshots/Financial%20Calculators-Error_Handling_1.png)
![Error Handling Example 2](/screenshots/Financial%20Calculators-Error_Handling_2.png)
![Error Handling Example 3](/screenshots/Financial%20Calculators-Error_Handling_3.png)

---

## Features

- **Mortgage Calculator**: Calculates monthly payments and total interest based on the loan amount, interest rate, and loan term.
- **Future Value Calculator**: Computes the future value of a deposit given an interest rate and number of years.
- **Present Value of Annuity Calculator**: Determines how much you need to invest today to receive regular payouts over a period of time.
- **Retro Windows 98 Design**: Styled with 98.css for a nostalgic aesthetic.

---

## Code Spotlight: 98.css

### Creating a Windows 98 style with Modern CSS

In this project, I gave the website a **Windows 98** look using **98.css**. Here's an example of how I styled the navbar and other elements:

```css
/* NAVBAR */
.navbar {
  background-color: var(--title-bar-bg); /* Windows 98 background */
  color: var(--title-bar-color); /* Windows 98 text color */
  padding: 5px 10px;
  border-bottom: 2px solid black; /* Adds the retro border */
}

/* Hamburger Menu Icon */
.navbar-toggler {
  box-shadow: none;
  border: none;
}

.navbar-toggler-icon {
  content: "\2630"; /* Creates the hamburger icon */
  font-size: 1.5rem;
  color: var(--title-bar-color);
}

/* Miku Image - No filter applied */
.miku-approved img {
  filter: none;
}
```

**Why It’s Interesting**: This CSS gives the website a fun, retro look inspired by Windows 98, while still being easy to use on modern devices. The **navbar** has simple black borders and the familiar hamburger menu for mobile, all styled to match the old Windows 98 design.

I used **CSS variables** like `--title-bar-bg` to easily manage the colors and keep the style consistent throughout the site. It makes everything look classic, but is still built with modern tools like **Bootstrap** to ensure the site works well on different screens.

---

### Error Handling

Here’s an example of basic error handling for ensuring users input valid data before calculations:

```javascript
if (deposit && interestRate && years) {
  const futureValue = calculateFutureValue(deposit, interestRate, years);
  const totalInterest = calculateTotalInterest(futureValue, deposit);
  document.getElementById("futureValue").value = futureValue.toFixed(2);
  document.getElementById("totalInterest").value = totalInterest.toFixed(2);
} else {
  alert("Please fill in all fields.");
}
```

**Why it's important**: This simple error handling ensures that users don’t perform calculations with empty fields, which prevents unexpected results and gives a better user experience.

## Technologies Used

- **HTML5**: For structuring the web pages.
- **CSS3 & Bootstrap**: For styling, layout, and responsive design.
- **98.css**: To give the site a nostalgic Windows 98 look.
- **JavaScript**: For all the financial calculations and interactivity.

---

## How It Works

### 1. **Future Value Calculator**

The **Future Value Calculator** allows users to enter an initial deposit, interest rate, and number of years. The calculator uses the following formula to determine how much the deposit will grow:
\[
\text{Future Value} = \text{Deposit} \times (1 + \frac{\text{Interest Rate}}{100})^\text{Years}
\]
For example, if you deposit $1,000 at an interest rate of 1.75% for 5 years, your balance will grow to **$1,090.62**. The total interest earned would be **$90.62**. Here's the code that implements this:

```javascript
function calculateFutureValue(deposit, interestRate, years) {
  const rate = interestRate / 100;
  return deposit * Math.pow(1 + rate, years);
}
```

### 2. **Present Value of Annuity Calculator**

The **Present Value of Annuity Calculator** helps users determine how much they need to invest today to receive regular payouts. The calculation is done using the following formula:
\[
PV = P \times \frac{1 - (1 + r)^{-n}}{r}
\]
Where:

- **P** = Monthly payout
- **r** = Monthly interest rate
- **n** = Number of payments

This is useful for retirement planning, among other things.

### 3. **Mortgage Calculator**

The **Mortgage Calculator** calculates monthly payments based on the loan amount, interest rate, and loan term. It uses the following formula to compute the monthly payment:
\[
M = P \times \frac{r \times (1 + r)^n}{(1 + r)^n - 1}
\]
Where:

- **P** = Principal loan amount
- **r** = Monthly interest rate
- **n** = Number of payments

This allows users to estimate their mortgage payments and see how much interest they will pay over the life of the loan.

Here’s a simpler version of the error handling section, explained for beginners:

---

### Error Handling

I added **error handling** to make sure users enter the right information before calculating results. This helps prevent mistakes and ensures the calculations are accurate. Here’s how it works in the **Future Value Calculator**:

```javascript
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
```

**How It Works:**

1. **Checking Inputs**: I used `isNaN()` to see if the user entered a valid number. If the input is not a number or doesn't meet the conditions, like a deposit greater than zero, I showed an error message.
2. **Stopping Errors**: If there’s a problem with the input, the calculator won’t run until the user fixes the error. This keeps the results accurate.

By checking the inputs first, I made sure the user gets a correct answer, and the calculator won’t run with bad data. This makes the calculator more reliable and easy to use!

---

## Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/thounny/financial-calculators.git
   ```
2. Open the `index.html` file in your browser.

---

## Author

![Logo](./images/index_dwn.gif)

**Thounny Keo**  
Frontend Development Student | Year Up United

---

![miku](./images/miku.gif)

---

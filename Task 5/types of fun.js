<html>
  <head> </head>
  <body>
    <script>
      //1. *Countdown:*
      //Write a program that prints numbers from 10 to 1 in descending order using a `while` loop.
      var a = 10;

      while (a >= 1) {
        console.log(a);
        a--;
      }

      //2. *Square Numbers:*
      //Create a program that prints the square of numbers from 1 to 10 using a `for` loop.
      for (var a = 1; a <= 10; a++) {
        var square = a * a;
        console.log(`  ${a} : ${square}`);
      }
      // 4*Even Numbers:*
      //Write a program that prints even numbers from 2 to 20 using a `for` loop.
      for (var a = 2; a <= 20; a++) {
        if (a % 2 == 0) console.log(a);
      }
      //5. *Factorial with a Twist:*
      //Modify the factorial program to print the factorial of numbers from 1 to 10 using a `for` loop.
      var fact = 1;
      for (a = 1; a <= 10; a++) {
        fact = fact * a;
        console.log(fact);
      }
      ////
      for (var number = 1; number <= 10; number++) {
        var factorial = 1;

        for (var a = 1; a <= number; a++) {
          factorial *= a;
        }

        console.log(`Factorial of ${number} is: ${factorial}`);
      }
      //6. *Infinite Loop:*
      //Create an infinite loop using a `while` loop. Make sure to include a condition to break out of the loop eventually.

      var a = 0;
      while (true) {
        console.log(" infinite loop.");
        a++;
        if (a >= 15) {
          console.log("Breaking  loop.");
          break;
        }
      }
      //7. *Skip Numbers:*
      //Write a program that prints numbers from 1 to 20, skipping every second number (1, 3, 5, 7, 9, 11, 13, 15, 17, 19) using a `for` loop.
      for (a = 1; a <= 20; a++) {
        if (a % 2 == 1) console.log(a);
      }
      //9. *Sum of Digits:*
      //Write a program that calculates the sum of digits for numbers from 1 to 20 using a `while` loop.

      var a = 1;
      var sum = 0;
      while (a <= 20) {
        sum += a;

        a++;
      }
      console.log(sum);
      //10. *Even or Odd (Expanded):*
      //Write a program that prints whether a number is even or odd for numbers 1 to 20 using a `for` loop.

      for (a = 1; a <= 20; a++) {
        if (a % 2 == 0) {
          console.log(a + "is even");
        } else {
          console.log(a + "is odd");
        }
      }
      //11. *Cube Numbers:*
      //Create a program that prints the cube of numbers from 1 to 10 using a `while` loop.

      var a = 1;
      while (a <= 10) {
        var cube = a * a * a;
        console.log(`The cube of ${a} is: ${cube}`);
        a++;
      }

      //13. *Reverse Countdown:*
      //Write a program that prints numbers from 20 to 1 in descending order using a `for` loop.

      for (a = 20; a >= 1; a--) {
        console.log(a);
      }
      //14. *Alternate Pattern:*
      //Create a program that prints an alternate pattern of `*` and `-` for 5 rows:
      for (a = 1; a <= 5; a++) {
        console.log("*_*");
      }

      //15. *Divisible by 3:*
      //Write a program that prints numbers from 1 to 30, marking each number divisible by 3 with an asterisk (*) using a `while` loop.
      var a = 1;
      while (a <= 30) {
        if (a % 3 == 0) {
          console.log(a);
        }
        a++;
      }
      //19. *Leap Years:*
      //Write a program that prints leap years between 1900 and 2023 using a `for` loop.

      for (var year = 1900; year <= 2023; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          console.log(year + " is a leap year");
        }
      }
      //20. *Sum of Even Numbers:*
      //Calculate and print the sum of even numbers from 1 to 20 using a `while` loop.
      var number = 1;
      var sum = 0;

      while (number <= 20) {
        if (number % 2 === 0) {
          sum += number;
        }

        number++;
      }

      console.log("Sum of even numbers from 1 to 20: " + sum);
    </script>
  </body>
</html>

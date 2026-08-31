# Typescript Solution [Beats 100%]

**Author:** movchanchik
**Votes:** 0
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5681693/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5681693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function fractionAddition(expression: string): string {
  const fractions: string[] = [];
  let index = 0;

  while (index < expression.length) {
    let fraction = "";

    // Handle sign
    if (expression[index] === "-" || expression[index] === "+") {
      fraction += expression[index++];
    }

    // Read the fraction part
    while (index < expression.length && /[0-9/]/.test(expression[index])) {
      fraction += expression[index++];
    }

    fractions.push(fraction);
  }

  return calculateResult(fractions);
}

function calculateResult(fractions: string[]): string {
  let numeratorSum = 0;
  let denominatorCommon = 1;

  // Convert fractions to numerator and denominator
  const fractionValues = fractions.map((fraction) => {
    const [numerator, denominator] = fraction.split("/").map(Number);
    return { numerator, denominator };
  });

  // Find the least common multiple of all denominators
  for (const { denominator } of fractionValues) {
    denominatorCommon = lcm(denominatorCommon, denominator);
  }

  // Calculate the sum of numerators with the common denominator
  for (const { numerator, denominator } of fractionValues) {
    numeratorSum += numerator * (denominatorCommon / denominator);
  }

  // Simplify the result
  const gcdValue = gcd(Math.abs(numeratorSum), denominatorCommon);
  numeratorSum /= gcdValue;
  denominatorCommon /= gcdValue;

  return `${numeratorSum}/${denominatorCommon}`;
}

// Helper function to calculate GCD (Greatest Common Divisor)
function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Helper function to calculate LCM (Least Common Multiple)
function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

```
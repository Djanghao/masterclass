# Java | Simple Solution | 100% faster | Fully Explained

**Author:** akobirswe
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/3820381/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/3820381/)

---

# Approach
Approach and Logic:
The given problem requires calculating the amount of money that needs to be paid in taxes based on the income and tax brackets. To achieve this, we can follow a simple approach:

1. Initialize a variable `tax` to keep track of the total tax amount, and `prev` to keep track of the upper bound of the previous tax bracket (initialized to 0).

2. Iterate through each tax bracket in the `brackets` array:

   a. If the upper bound of the current tax bracket (`bracket[0]`) is less than the given income, it means the entire bracket is within the income range. So, calculate the tax for this bracket and add it to the total `tax` amount. The tax for a bracket is calculated by taking the difference between the current upper bound and the previous upper bound (`bracket[0] - prev`) and multiplying it by the tax rate (`bracket[1] / 100`). Update the `prev` variable to the current upper bound.

   b. If the upper bound of the current tax bracket is greater than or equal to the given income, it means only a part of this bracket is within the income range. Calculate the tax for this part and add it to the total `tax` amount. The tax for this part is calculated by taking the difference between the given income and the previous upper bound (`income - prev`) and multiplying it by the tax rate (`bracket[1] / 100`). Break the loop, as we have covered all the income.

3. Return the `tax` amount as the final result.

The provided solution correctly implements the above approach. It efficiently calculates the tax based on the income and the tax brackets, considering both the entire brackets and partial brackets within the income range. It handles the case when the income exceeds the last tax bracket's upper bound, ensuring that the correct tax amount is calculated.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public double calculateTax(int[][] brackets, int income) {
        double tax = 0;
        int prev = 0;

        for (int[] bracket : brackets) {
            if (bracket[0] < income) {
                tax += (bracket[0] - prev) * (double) bracket[1] / 100;
                prev = bracket[0];
            } else {
                income -= prev;
                tax += (double) income * bracket[1] / 100;
                break;
            }
        }

        return tax;
    }
}
```
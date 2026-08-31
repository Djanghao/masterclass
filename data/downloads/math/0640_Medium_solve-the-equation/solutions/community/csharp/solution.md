# C# Linear Equation Solver

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/5198450/](https://leetcode.com/problems/solve-the-equation/solutions/5198450/)

---

# Approach
<!-- Describe your approach to solving the problem. -->Splitting the Equation:
The equation is split into left and right parts based on the '=' sign.
Evaluating Each Side:
EvaluateSide method processes each side to calculate the total coefficient of 'x' and the constant term.
Combining Results:
The coefficients and constants from both sides are combined to form a single equation of the form ax = b.
Determining the Solution:
Based on the combined coefficient and constant, the function determines if there are infinite solutions, no solutions, or a single solution.
Parsing Terms:
The EvaluateSide method parses through each side of the equation, updating coefficients and constants based on the characters encountered.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n). The main operation involves splitting the equation strings and then iterating through each character of the two resulting substrings. Both operations are linear with respect to the length of the input string.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1). The algorithm uses a fixed number of integer variables to keep track of the coefficients and constants during the parsing of the string. The space required for these variables does not grow with the input size, making the space complexity O(1).
___

# Code
```
public class Solution {
    public string SolveEquation(string equation) {
        // Split the equation into left and right sides at the '=' sign
        string[] sides = equation.Split('=');
        // Evaluate both sides of the equation
        int[] left = EvaluateSide(sides[0]);
        int[] right = EvaluateSide(sides[1]);

        // Calculate the combined coefficient and constant terms
        int coefficient = left[0] - right[0];
        int constant = right[1] - left[1];

        // Determine the solution based on the coefficient and constant
        if (coefficient == 0) {
            return constant == 0 ? "Infinite solutions" : "No solution";
        }

        // Calculate and return the value of 'x'
        int xValue = constant / coefficient;
        return $"x={xValue}";
    }

    private int[] EvaluateSide(string side) {
        int coefficient = 0;
        int constant = 0;
        int sign = 1;  // Track the sign of the term
        int num = 0;
        bool hasNum = false;

        for (int i = 0; i < side.Length; i++) {
            char c = side[i];

            if (c == 'x') {
                // Update coefficient: if there's no number before 'x', use 1
                coefficient += (hasNum ? num : 1) * sign;
                num = 0;
                hasNum = false;
            } else if (c == '+' || c == '-') {
                // Update constant with the accumulated number
                constant += num * sign;
                num = 0;
                hasNum = false;
                // Update sign based on the current character
                sign = c == '+' ? 1 : -1;
            } else {
                // Accumulate the number
                num = num * 10 + (c - '0');
                hasNum = true;
            }
        }

        // Add any remaining number to the constant
        constant += num * sign;

        return new int[] { coefficient, constant };
    }
}

```
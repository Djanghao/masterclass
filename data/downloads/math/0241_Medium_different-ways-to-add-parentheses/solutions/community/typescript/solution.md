# Dynamic Programming 🚀🔷🔷| Images🧑‍💻 | Fully Explained👍 | Dry Run🔁 | Optimum Solution✅✅

**Author:** AnvarbekZiyodov
**Votes:** 1
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5807492/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5807492/)

---

# Intuition
The problem is asking us to compute all possible results of an expression containing numbers and the operators +, -, and *, by adding parentheses in different ways. This is a problem that can be broken down into smaller subproblems (similar to divide-and-conquer) because for any operator in the expression, we can evaluate the left and right parts separately and combine their results.

# Approach
Base Case: If the expression is just a number (no operators), we return that number.
Recursive Case: If the expression contains operators, we split the expression at each operator (+, -, or *). For each split, we recursively compute all possible results for the left and right sub-expressions.
Combining Results: After splitting at an operator, we compute all combinations of results from the left and right sub-expressions and apply the operator to them.
Memoization: To avoid recalculating the same expression multiple times, we store the results of sub-expressions in a memo object. If an expression has been computed before, we directly return the stored result
# Complexity
- Time complexity:

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var diffWaysToCompute = function (expression) {

    function compute() {
        if (Number.isInteger(Number(expression))) {
            return [Number(expression)];
        }

        let result = [];

        if (memo[expression]) {
            return memo[expression];
        }

        for (let i = 0; i < expression.length; i++) {
            let operator = expression[i];

            if (Number.isNaN(Number(operator))) {
                let leftResults = diffWaysToCompute(expression.slice(0, i));
                let rightResults = diffWaysToCompute(expression.slice(i + 1));

                for (let left of leftResults) {
                    for (let right of rightResults) {
                        result.push(
                            operator === '+'
                                ? left + right
                                : operator === '-'
                                    ? left - right
                                    : left * right
                        );
                    }
                }
            }
        }
        memo[expression] = result;
        return result;
    }

    let memo = {};
    return compute();
};
```


![001a585f-aef3-47c5-980d-77cfdbbe28fe_1702552970.456921.jpeg](./images/0.jpeg)


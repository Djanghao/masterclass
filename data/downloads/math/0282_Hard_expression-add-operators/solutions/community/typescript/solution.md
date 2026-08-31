# 💥[EXPLAINED] TypeScript. Runtime beats 100%. Memory beats 60.87%

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/5686517/](https://leetcode.com/problems/expression-add-operators/solutions/5686517/)

---

# Intuition
We use DFS with Backtracking to explore all possible ways to insert +, -, and * between digits in the string. The goal is to form valid expressions that evaluate to the target.

# Approach
We track the current expression, its evaluated value, and the last operand (to handle * precedence). We avoid invalid numbers with leading zeros by skipping them.

# Complexity
- Time complexity:
O(4^n) \u2014 Each digit can have up to 4 choices (no operator, +, -, *), leading to exponential complexity.

- Space complexity:
O(n) \u2014 Due to the recursion stack and the path string storage.

# Code
```typescript []
function addOperators(num: string, target: number): string[] {
    const result: string[] = [];

    function dfs(index: number, path: string, value: number, lastOperand: number): void {
        if (index === num.length) {
            if (value === target) {
                result.push(path);
            }
            return;
        }

        for (let i = index; i < num.length; i++) {
            if (i > index && num[index] === '0') break; // Avoid numbers with leading zeros
            const currentStr = num.substring(index, i + 1);
            const currentNum = parseInt(currentStr);

            if (index === 0) {
                // Start of the expression
                dfs(i + 1, currentStr, currentNum, currentNum);
            } else {
                // Addition
                dfs(i + 1, path + '+' + currentStr, value + currentNum, currentNum);
                // Subtraction
                dfs(i + 1, path + '-' + currentStr, value - currentNum, -currentNum);
                // Multiplication
                dfs(i + 1, path + '*' + currentStr, value - lastOperand + lastOperand * currentNum, lastOperand * currentNum);
            }
        }
    }

    dfs(0, "", 0, 0);
    return result;
}

```
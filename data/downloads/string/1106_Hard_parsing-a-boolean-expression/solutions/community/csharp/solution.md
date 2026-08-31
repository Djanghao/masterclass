# 💥 Runtime beats 93.75%, Memory beats 87.50% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5796507/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5796507/)

---

# Intuition
When solving this problem, think of it like reading and evaluating a mathematical expression but with boolean values and logical operations. You need to interpret different boolean operators (!, &, |) and apply them to the sub-expressions they contain.

# Approach
Read Sequentially: Process characters one by one, handling each according to its meaning (t, f, !, &, |).

Use Recursion: Evaluate nested expressions recursively.

Apply Logic:
! negates the result.
& returns true if all sub-expressions are true.
| returns true if at least one sub-expression is true.

# Complexity
- Time complexity:
O(n), where n is the string length (each character is processed once).

- Space complexity:
 O(1), minimal additional space beyond the input.

# Code
```csharp []
public class Solution {
    private int pos;
    private string expr;

    public bool ParseBoolExpr(string expression) {
        pos = 0;
        expr = expression;
        return Parse();
    }

    private bool TryEat(char c) {
        if (pos < expr.Length && expr[pos] == c) {
            pos++;
            return true;
        }
        return false;
    }

    private bool Parse() {
        // Parse boolean literals
        if (TryEat('t')) return true;
        if (TryEat('f')) return false;

        // Parse NOT operation
        if (TryEat('!')) {
            pos++; // Skip '('
            bool inner = Parse();
            pos++; // Skip ')'
            return !inner;
        }

        // Parse AND operation
        if (TryEat('&')) {
            pos++; // Skip '('
            bool result = true;
            while (true) {
                result &= Parse();
                if (!TryEat(',')) break;
            }
            pos++; // Skip ')'
            return result;
        }

        // Parse OR operation
        if (TryEat('|')) {
            pos++; // Skip '('
            bool result = false;
            while (true) {
                result |= Parse();
                if (!TryEat(',')) break;
            }
            pos++; // Skip ')'
            return result;
        }

        throw new ArgumentException("Unexpected character.");
    }
}

```
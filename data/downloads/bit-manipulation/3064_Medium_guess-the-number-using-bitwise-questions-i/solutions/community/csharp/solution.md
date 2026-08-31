# [C#] One-liner with LINQ magic

**Author:** Oleks_V
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4804197/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4804197/)

---

# Intuition
Use LINQ magic to solve it with one line of code.

# Approach
Enumerate through numbers 0..29, and at each iteration bitwise-add (OR operator) the value `CommonSetBits(1 << c) << c` to the result.
For unset bits, `CommonSetBits(1 << c)` evaluates to 0, ant therefore `CommonSetBits(1 << c) << c` = `0`.
For set bits, `CommonSetBits(1 << c)` evaluates to 1, ant therefore `CommonSetBits(1 << c) << c` = `1 << c`.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
/** 
 * Definition of commonSetBits API (defined in the parent class Problem).
 * int CommonSetBits(int num);
 */

public class Solution : Problem {
    public int FindNumber() {
        return Enumerable.Range(0, 30).Aggregate(CommonSetBits(1), (p, c) => p | CommonSetBits(1 << c) << c);
    }
}
```
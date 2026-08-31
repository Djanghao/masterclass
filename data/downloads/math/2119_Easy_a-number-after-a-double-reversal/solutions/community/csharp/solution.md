# C# | Beats 100% | One-Liner

**Author:** sebastian42
**Votes:** 1
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5968863/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5968863/)

---

# Intuition
Reversing a number twice should yield the original number. However, numbers that end with a `0` (except `0` itself) will lose their trailing zeros after the first reversal, which alters the number. Therefore, the key insight is to check if the number ends in a `0`.

# Approach
- If the number is `0`, it will always be the same after reversals.
- For any other number, if it does **not** end in a `0` (i.e., `num % 10 != 0`), it will be the same after reversals.
- If the number ends in `0`, it will not be the same after reversals (unless it's `0` itself).

# Complexity
- **Time Complexity**: O(1), because we only perform a few mathematical operations.
- **Space Complexity**: O(1), as no additional data structures are used.

# Code
```csharp []
public class Solution {
    public bool IsSameAfterReversals(int num) => num == 0 || num % 10 != 0;
}
```
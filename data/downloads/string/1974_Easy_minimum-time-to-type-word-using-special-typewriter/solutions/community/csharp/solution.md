# One liner linq

**Author:** nithin1924
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/4698627/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/4698627/)

---

# Intuition
Aggregate in linq

# Approach
use Aggregate

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(c)

# Code
```
public class Solution {
    public int MinTimeToType(string word) {
        return word.Aggregate((t : 0, c : 'a'), (bank, x) => (1 + bank.t + Math.Min(Math.Abs(bank.c - x), 26 - Math.Abs(bank.c - x)), x)).t;
    }
}
```
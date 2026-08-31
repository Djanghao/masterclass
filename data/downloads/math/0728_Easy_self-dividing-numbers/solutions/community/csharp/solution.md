# [C#] Simple one-liner (LINQ)

**Author:** Oleks_V
**Votes:** 1
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/3818069/](https://leetcode.com/problems/self-dividing-numbers/solutions/3818069/)

---

# Intuition
Let's use the power of LINQ to solve it in one line of code.

# Approach
Steps are: 
- ```Enumerable.Range(left, right - left + 1)``` - enumerate through every int starting from **left**, **right - left + 1** times;
- ```Where(x => x.ToString().All(ch => ch != '0' && x % (ch - '0') == 0))``` - filter out all values whose string representation contains '0' character, or that don't divisible to any of its digits;
- ```ToList()``` - fetch the result into list and return it

# Complexity
- Time complexity:
O(5 * (right - left + 1)) ~ O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public IList<int> SelfDividingNumbers(int left, int right) {
        return Enumerable.Range(left, right - left + 1).Where(x => x.ToString().All(ch => ch != '0' && x % (ch - '0') == 0)).ToList();
    }
}
```
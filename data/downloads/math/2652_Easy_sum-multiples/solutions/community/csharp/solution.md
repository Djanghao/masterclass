# One-liner

**Author:** Drugged_Monkey
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/4739116/](https://leetcode.com/problems/sum-multiples/solutions/4739116/)

---

# Complexity
- Time complexity:
$$O(n) + O(n) + O(n) => O(n)$$

- Space complexity:
$$O(n) + O(n) => O(n)$$

# Code
```
public class Solution 
{
    public int SumOfMultiples(int n) => Enumerable.Range(1, n).Where(i => i % 3 == 0 || i % 5 == 0 || i % 7 == 0).Sum();
}
```
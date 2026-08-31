# C# 1-liner (LINQ)

**Author:** Dmitriy-Maksimov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5472983/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5472983/)

---

# Approach
If `x % 3 != 0` we can always increment or decrement x such that we only need 1 operation.
So, we need to count number of elements not divisible to 3.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
public class Solution
{
    public int MinimumOperations(int[] nums)
    {
        return nums.Count(x => x % 3 != 0);
    }
}
```
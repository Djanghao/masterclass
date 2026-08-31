# C#

**Author:** xMaz
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/5898577/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/5898577/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MinimumNumbers(int num, int k) {
    if (num == 0)
        return 0;

    for (int count = 1; count <= 10; count++)
    {
        if (num >= count * k && (num - count * k) % 10 == 0)
            return count;
    }

    return -1;
    }
}
```
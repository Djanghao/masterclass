# My LINQ Answer

**Author:** anemicwolf14
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5837979/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5837979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int[] GetSneakyNumbers(int[] nums) {
        return nums.GroupBy(x => x).Where(y => y.Count() > 1).Select(z => z.First()).ToArray();
    }
}
```
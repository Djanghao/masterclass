# Simple solution using HashSet

**Author:** jlccl
**Votes:** 4
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/3308917/](https://leetcode.com/problems/third-maximum-number/solutions/3308917/)

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
```
public class Solution {
    public int ThirdMax(int[] nums) {
        HashSet<int> set = new HashSet<int>();
    foreach (int num in nums) {
        set.Add(num);
        if (set.Count > 3) set.Remove(set.Min());
    }
    if (set.Count < 3) return set.Max();
    return set.Min();    
    }
}
```
# c#, sorting

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3371928/](https://leetcode.com/problems/mice-and-cheese/solutions/3371928/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We should order by `reward2[i] - reward1[i]` and let 1st mouse eat top `k` items

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$, due to Linq

# Code
```
public class Solution {
    public int MiceAndCheese(int[] reward1, int[] reward2, int k) => reward1
        .Zip(reward2, (r1, r2) => (r1, r2))
        .OrderBy(item => item.r2 - item.r1)
        .Select((item, index) => index <= k - 1 ? item.r1 : item.r2)
        .Sum();
}
```
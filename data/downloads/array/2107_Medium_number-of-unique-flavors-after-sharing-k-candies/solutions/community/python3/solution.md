# [Python3] - Sliding Window + Hash Table - Easy to Understand

**Author:** dolong2110
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/3458277/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/3458277/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def shareCandies(self, candies: List[int], k: int) -> int:
        d = {}
        for c in candies[k:]:
            d[c] = d.get(c, 0) + 1
        
        res = len(d)
        for j in range(k, len(candies)):
            d[candies[j]] -= 1
            d[candies[j - k]] = d.get(candies[j - k], 0) + 1
            if d[candies[j]] == 0: d.pop(candies[j])
            res = max(res, len(d))
        return res
```
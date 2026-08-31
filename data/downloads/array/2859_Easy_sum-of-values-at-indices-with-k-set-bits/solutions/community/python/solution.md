# True O(n) without any built-in counting function

**Author:** almostmonday
**Votes:** 7
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055218/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4055218/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key point in this problem is similar to [338. Counting Bits](https://leetcode.com/problems/counting-bits/description/).
# Approach
<!-- Describe your approach to solving the problem. -->
Just use dynamic programming to count ones in the binary representation of an index. Actually, solutions with built-in counting functions aren't really $$O(n)$$. Neither are bitwise tricks like `x & (x - 1)` (Brian Kernighan\u2019s Algorithm).
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---
* You could find some other extraordinary solutions in my [profile](https://leetcode.com/almostmonday/) on the Solutions tab (I don't post obvious or not interesting solutions at all.)
* If this was helpful, please upvote so that others can see this solution too.
---

# Code
It's like removing the higest bit ($$101100 \\rightarrow 1100$$):
```
class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        if k == 0: return nums[0]
        d, j, res = [0] * len(nums), 1, 0
        for i in range(1, len(nums)):
            if j * 2 == i: j *= 2
            d[i] = 1 + d[i - j]
            if d[i] == k: res += nums[i]

        return res
```

Also, you could remove the lowest one to get the sum of the other bits ($$101100 \\rightarrow 101000$$) (thanks to [@Adamm93](https://leetcode.com/Adamm93/)):
```
class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        if k == 0: return nums[0]
        d, res = [0] * len(nums), 0
        for i in range(1, len(nums)):
            d[i] = 1 + d[i & (i - 1)]
            if d[i] == k: res += nums[i]

        return res
```
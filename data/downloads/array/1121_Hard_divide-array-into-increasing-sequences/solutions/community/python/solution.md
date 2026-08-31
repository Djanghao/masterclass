# Python - one line

**Author:** Ante_
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/3310894/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/3310894/)

---

# Intuition
If you can divide N with k and it is bigger or equal then max repeated value, then it is possible to do, either no.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution:
    def canDivideIntoSubsequences(self, nums: List[int], k: int) -> bool:
        return len(nums) // k >= max(Counter(nums).values())
```
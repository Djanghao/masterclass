# [Python3] 1-line

**Author:** ye15
**Votes:** 14
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1549993/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1549993/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/4001168494179e85482f91afbf0cd66b908544f3) for my solutions of weekly 265. 
```
class Solution:
    def smallestEqual(self, nums: List[int]) -> int:
        return next((i for i, x in enumerate(nums) if i%10 == x), -1)
```
# 📌 Python3 simple solution: Get the mid element from the sorted array

**Author:** suniljs6
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2218363/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2218363/)

---

```
class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()
        mid = nums[len(nums)//2]
        result = 0
        for i in nums:
            result+=abs(mid-i)
        return result
```
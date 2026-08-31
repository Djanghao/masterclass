# Python 3

**Author:** slight_edge
**Votes:** 59
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/313703/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/313703/)

---

```
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for n in nums:
            a = abs(n) - 1
            if nums[a] > 0: nums[a] *= -1
        return [i+1 for i in range(len(nums)) if nums[i] > 0]
```

Please let me know if any improvements can be made.

Thank you!
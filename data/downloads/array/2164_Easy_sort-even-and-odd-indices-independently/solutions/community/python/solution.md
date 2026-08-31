# Python two lines solution

**Author:** ananya19
**Votes:** 19
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1752547/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1752547/)

---

```
class Solution(object):
    def sortEvenOdd(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums[::2], nums[1::2] = sorted(nums[::2]), sorted(nums[1::2], reverse=True)
        return nums
```
# Python easy to undersand

**Author:** yergaly
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1186919/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1186919/)

---

Just in case, this code may be explained well for beginners.
```
class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        a = []
        for i in range(len(nums)):
            if nums[i]==target:
                 a.append(abs(start-i))
        return min(a)
```
# CLEAN & SHORT PYTHON, O(N) TIME, O(N) SPACE

**Author:** kushagrabainsla
**Votes:** 7
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1438213/](https://leetcode.com/problems/array-nesting/solutions/1438213/)

---

* If the number is not present in the global set, then calculate the respective set for that number,
* Else just continue because that number will yeild an already visited set ( and that will not make any difference to the result).
```
class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        res, l = 0, len(nums)
        globalSet = set()
        for k in range(l):
            if k not in globalSet:
                currLength, currSet, val = 0, set(), k
                while True:
                    if nums[val] in currSet: break
                    currSet.add(nums[val])
                    globalSet.add(nums[val])
                    currLength, val = currLength + 1, nums[val]
                res = max(res, currLength)        
        return res
```
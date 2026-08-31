# 94.58% faster using set and & operator in Python

**Author:** ankurbhambri
**Votes:** 50
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2428232/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2428232/)

---

![image](./images/0.png)

```
class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        res = set(nums[0])
        for i in range(1, len(nums)):
            res &= set(nums[i])
        res = list(res)
        res.sort()
        return res
        
```
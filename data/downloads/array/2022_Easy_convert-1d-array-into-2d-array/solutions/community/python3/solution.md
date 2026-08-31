# [Python3] simulation

**Author:** ye15
**Votes:** 52
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/1499000/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/1499000/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/182350e41572fb26ffb8c44204b037cc9f0e5035) for solutions of biweekly 62. 
```
class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        ans = []
        if len(original) == m*n: 
            for i in range(0, len(original), n): 
                ans.append(original[i:i+n])
        return ans 
```
# [Python3] greedy

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1158414/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1158414/)

---


```
class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        lo, hi = 1, n 
        ans = []
        while lo <= hi: 
            if k&1: 
                ans.append(lo)
                lo += 1
            else: 
                ans.append(hi)
                hi -= 1
            if k > 1: k -= 1
        return ans 
```
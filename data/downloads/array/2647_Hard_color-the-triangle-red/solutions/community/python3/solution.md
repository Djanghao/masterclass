# [Python3] leveraging on periodicity

**Author:** ye15
**Votes:** 0
**Link:** [https://leetcode.com/problems/color-the-triangle-red/solutions/3458976/](https://leetcode.com/problems/color-the-triangle-red/solutions/3458976/)

---


```
class Solution:
    def colorRed(self, n: int) -> List[List[int]]:
        ans = []
        for i in range(n, 0, -1): 
            p = (n-i)%4
            if p == 0: 
                for j in range(2*i-1, 0, -2): ans.append([i, j])
            elif p == 1: 
                if 2 <= i: ans.append([i, 2])
            elif p == 2: 
                for j in range(2*i-1, 2, -2): ans.append([i, j])
            else: ans.append([i, 1])
        if 1 <= p <= 2: ans.append([1, 1])
        return ans[::-1]
```
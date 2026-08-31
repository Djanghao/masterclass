# [Python3] hash map

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141356/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141356/)

---


```
class Solution:
    def findingUsersActiveMinutes(self, logs: List[List[int]], k: int) -> List[int]:
        mp = {}
        for i, t in logs: 
            mp.setdefault(i, set()).add(t)
            
        ans = [0]*k
        for v in mp.values(): 
            if len(v) <= k: 
                ans[len(v)-1] += 1
        return ans 
```
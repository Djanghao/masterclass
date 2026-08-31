# [Python3] prefix & suffix

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623325/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623325/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/b553623546e2799477b8bca6b5c89f22c83a4d08) for solutions of weekly 67. 

```
class Solution:
    def goodDaysToRobBank(self, security: List[int], time: int) -> List[int]:
        suffix = [0]*len(security)
        for i in range(len(security)-2, 0, -1): 
            if security[i] <= security[i+1]: suffix[i] = suffix[i+1] + 1
        
        ans = []
        prefix = 0
        for i in range(len(security)-time): 
            if i and security[i-1] >= security[i]: prefix += 1
            else: prefix = 0
            if prefix >= time and suffix[i] >= time: ans.append(i)
        return ans 
```
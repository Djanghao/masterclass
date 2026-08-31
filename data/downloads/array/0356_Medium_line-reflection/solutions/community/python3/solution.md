# [Python3] mirrored points

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/line-reflection/solutions/1048388/](https://leetcode.com/problems/line-reflection/solutions/1048388/)

---

**Algo**
Find the center and check if the reflected points exist. 

**Implementation**
```
class Solution:
    def isReflected(self, points: List[List[int]]) -> bool:
        seen = {}
        for x, y in points: seen.setdefault(y, set()).add(x)
        
        ans = set()
        for k in seen: 
            avg = sum(seen[k])/len(seen[k])
            for x in seen[k]:
                if 2*avg - x not in seen[k]: return False 
            ans.add(avg)
        return len(ans) == 1
```

```
class Solution:
    def isReflected(self, points: List[List[int]]) -> bool:
        points = {(x, y) for x, y in points}
        avg = sum(x for x, _ in points)/len(points)
        for x, y in points: 
            if (2*avg - x, y) not in points: return False 
        return True 
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(N)`
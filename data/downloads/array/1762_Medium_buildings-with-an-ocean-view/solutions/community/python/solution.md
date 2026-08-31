# Python Simple Monotonic Stack Solution O(n) time & space

**Author:** genefever
**Votes:** 13
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1316195/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1316195/)

---

```
class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        res = []
        
        for i, height in enumerate(heights):
            while res and heights[res[-1]] <= height:
                res.pop()
                
            res.append(i)
            
        return res
```
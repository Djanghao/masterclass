# [Python3] rotate matrix

**Author:** ye15
**Votes:** 103
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/1253880/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/1253880/)

---


```
class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        for _ in range(4): 
            if mat == target: return True
            mat = [list(x) for x in zip(*mat[::-1])]
        return False 
```
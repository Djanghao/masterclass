# recursion and memorisation

**Author:** ac1
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/294467/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/294467/)

---

Start with recursion  hit the TLE :D
```
    def minScoreTriangulation(self, A: List[int]) -> int:
        def backtrack(start,end):
            res = sys.maxsize
            if end -start +1< 3:
                    return 0
            for i in range(start+1,end):
                res = min(res,backtrack(start,i)+ backtrack(i,end)+ A[start]*A[end]*A[i])
            return res
        return backtrack(0,len(A)-1)
```
and use memorisation
```
class Solution:
    def minScoreTriangulation(self, A: List[int]) -> int:
        cache ={}
        def backtrack(start,end):
            res = sys.maxsize
            if end -start +1< 3:
                    return 0
            if (start,end) not in  cache:                
                for i in range(start+1,end):
                    res = min(res,backtrack(start,i)+ backtrack(i,end)+ A[start]*A[end]*A[i])
                    cache[(start,end)] = res
            return cache[(start,end)]
        return backtrack(0,len(A)-1)
```
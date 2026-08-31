# [Python3] permutations

**Author:** ye15
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1360746/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1360746/)

---

**Approach 1 - brute force**
```
class Solution:
    def maxCompatibilitySum(self, students: List[List[int]], mentors: List[List[int]]) -> int:
        m = len(students)
        
        score = [[0]*m for _ in range(m)]
        for i in range(m): 
            for j in range(m): 
                score[i][j] = sum(x == y for x, y in zip(students[i], mentors[j]))
        
        ans = 0 
        for perm in permutations(range(m)): 
            ans = max(ans, sum(score[i][j] for i, j in zip(perm, range(m))))
        return ans 
```

Edited on 7/26/2021
**Approach 2 - dp**
```
class Solution:
    def maxCompatibilitySum(self, students: List[List[int]], mentors: List[List[int]]) -> int:
        m = len(students)
        
        score = [[0]*m for _ in range(m)]
        for i in range(m): 
            for j in range(m): 
                score[i][j] = sum(x == y for x, y in zip(students[i], mentors[j]))
        
        @cache 
        def fn(mask, j): 
            """Return max score of assigning students in mask to first j mentors."""
            ans = 0 
            for i in range(m): 
                if not mask & (1<<i): 
                    ans = max(ans, fn(mask^(1<<i), j-1) + score[i][j])
            return ans 
        
        return fn(1<<m, m-1)
```
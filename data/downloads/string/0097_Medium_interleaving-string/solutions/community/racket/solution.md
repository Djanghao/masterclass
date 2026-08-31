# Easy python3 solution 98.39% in runtime only 36ms

**Author:** ayan_101
**Votes:** 2
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/3956707/](https://leetcode.com/problems/interleaving-string/solutions/3956707/)

---



I deserve upvotes !!

# Code
```
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1+s2)!=len(s3):return False
        dp={}
        def dfs(i,j):
            if i==len(s1) and j==len(s2):return True
            if (i,j) in dp:return dp[(i,j)]
            if i<len(s1) and s1[i]==s3[i+j] and dfs(i+1,j):return True
            if j<len(s2) and s2[j]==s3[i+j] and dfs(i,j+1):return True
            dp[(i,j)]=False
            return False
        return dfs(0,0)
```
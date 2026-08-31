# [Python3] dp

**Author:** ye15
**Votes:** 94
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/1550012/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/1550012/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/4001168494179e85482f91afbf0cd66b908544f3) for my solutions of weekly 265. 
```
class Solution:
    def possiblyEquals(self, s1: str, s2: str) -> bool:
        
        def gg(s): 
            """Return possible length"""
            ans = [int(s)]
            if len(s) == 2: 
                if s[1] != '0': ans.append(int(s[0]) + int(s[1]))
                return ans
            elif len(s) == 3: 
                if s[1] != '0': ans.append(int(s[:1]) + int(s[1:]))
                if s[2] != '0': ans.append(int(s[:2]) + int(s[2:]))
                if s[1] != '0' and s[2] != '0': ans.append(int(s[0]) + int(s[1]) + int(s[2]))
            return ans 
        
        @cache
        def fn(i, j, diff): 
            """Return True if s1[i:] matches s2[j:] with given differences."""
            if i == len(s1) and j == len(s2): return diff == 0
            if i < len(s1) and s1[i].isdigit(): 
                ii = i
                while ii < len(s1) and s1[ii].isdigit(): ii += 1
                for x in gg(s1[i:ii]): 
                    if fn(ii, j, diff-x): return True 
            elif j < len(s2) and s2[j].isdigit(): 
                jj = j 
                while jj < len(s2) and s2[jj].isdigit(): jj += 1
                for x in gg(s2[j:jj]): 
                    if fn(i, jj, diff+x): return True 
            elif diff == 0: 
                if i == len(s1) or j == len(s2) or s1[i] != s2[j]: return False 
                return fn(i+1, j+1, 0)
            elif diff > 0: 
                if i == len(s1): return False 
                return fn(i+1, j, diff-1)
            else: 
                if j == len(s2): return False 
                return fn(i, j+1, diff+1)
            
        return fn(0, 0, 0)
```

Updated implementation per @lee215, @alexeykonphoto and @lichuan199010. 
```
class Solution:
    def possiblyEquals(self, s1: str, s2: str) -> bool:
        
        def gg(s): 
            """Return possible length."""
            ans = {int(s)}
            for i in range(1, len(s)): 
                ans |= {x+y for x in gg(s[:i]) for y in gg(s[i:])}
            return ans
        
        @cache
        def fn(i, j, diff): 
            """Return True if s1[i:] matches s2[j:] with given differences."""
            if i == len(s1) and j == len(s2): return diff == 0
            if i < len(s1) and s1[i].isdigit(): 
                ii = i
                while ii < len(s1) and s1[ii].isdigit(): ii += 1
                for x in gg(s1[i:ii]): 
                    if fn(ii, j, diff-x): return True 
            elif j < len(s2) and s2[j].isdigit(): 
                jj = j 
                while jj < len(s2) and s2[jj].isdigit(): jj += 1
                for x in gg(s2[j:jj]): 
                    if fn(i, jj, diff+x): return True 
            elif diff == 0: 
                if i < len(s1) and j < len(s2) and s1[i] == s2[j]: return fn(i+1, j+1, 0)
            elif diff > 0: 
                if i < len(s1): return fn(i+1, j, diff-1)
            else: 
                if j < len(s2): return fn(i, j+1, diff+1)
            return False 
            
        return fn(0, 0, 0)
```
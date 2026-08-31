# [Python3] valid numbers

**Author:** ye15
**Votes:** 14
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/934654/](https://leetcode.com/problems/ambiguous-coordinates/solutions/934654/)

---

Algo
The key is to deal with extraneous zeros. Below rule gives the what's required
1) if a string has length 1, return it;
2) if a string with length larger than 1 and starts and ends with 0, it cannot contain valid number;
3) if a string starts with 0, return `0.xxx`;
4) if a string ends with 0, return `xxx0`;
5) otherwise, put decimal point in the `n-1` places. 

Implementation 
```
class Solution:
    def ambiguousCoordinates(self, s: str) -> List[str]:
        s = s.strip("(").strip(")")
        
        def fn(s): 
            """Return valid numbers from s."""
            if len(s) == 1: return [s]
            if s.startswith("0") and s.endswith("0"): return []
            if s.startswith("0"): return [s[:1] + "." + s[1:]]
            if s.endswith("0"): return [s]
            return [s[:i] + "." + s[i:] for i in range(1, len(s))] + [s]
        
        ans = []
        for i in range(1, len(s)): 
            for x in fn(s[:i]):
                for y in fn(s[i:]): 
                    ans.append(f"({x}, {y})")
        return ans  
```
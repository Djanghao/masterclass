# [Python3] O(1)

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/897976/](https://leetcode.com/problems/bulb-switcher-ii/solutions/897976/)

---

Key insight: 
It is not difficult to find out that there are not a lot of states since 
1) operations are reversible;
2) operations can be reproduced by other operations. 

To get a more concrete understanding, let's list the outcomes of given `m` and `n` up to 5. From the table, it is obvious that 
1) beyond 3, `n` and `m` become irrelevant because there are at most 8 states all of which become achievable when `m` and `n` are large enough; 
2) below 3, `fn(n, m) = fn(n-1, m-1) + fn(n-1, m)`. 

```
n/m 0 1 2 3 4 5		
0   1 1 1 1 1 1	 
1   1 2 2 2 2 2
2   1 3 4 4 4 4
3   1 4 7 8 8 8
4   1 4 7 8 8 8
5   1 4 7 8 8 8
```

```
class Solution:
    def flipLights(self, n: int, m: int) -> int:
        
        def fn(n, m): 
            """Return number of different status."""
            if m * n == 0: return 1
            return fn(n-1, m-1) + fn(n-1, m)
        
        return fn(min(n, 3), min(m, 3))
```
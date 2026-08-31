# Python Easy DP 2 approaches

**Author:** constantine786
**Votes:** 93
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/2065208/](https://leetcode.com/problems/ones-and-zeroes/solutions/2065208/)

---


1. ##### **Memoization(Top Down)**

```
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        counter=[[s.count("0"), s.count("1")] for s in strs]
        
        @cache
        def dp(i,j,idx):
            if i<0 or j<0:
                return -math.inf
            
            if idx==len(strs):
                return 0
            
            return max(dp(i,j,idx+1), 1 + dp(i-counter[idx][0], j-counter[idx][1], idx+1))
        return dp(m,n,0)
```


**Time - O(l * m * n)** - where `l` is length of `strs`
**Space - O(l * m * n)** - memo table


----

2. ##### **Tabulation(Bottom Up)**

```
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:            
        dp = [[0] * (n+1) for _ in range(m+1)]
        counter=[[s.count("0"), s.count("1")] for s in strs]
        
        for zeroes, ones in counter:
            for i in range(m, zeroes-1, -1):
                for j in range(n, ones-1, -1):                   
                    dp[i][j] = max(dp[i][j], 1+dp[i-zeroes][j-ones])
        
        return dp[-1][-1]
```

**Time - O(l * m * n)** - where `l` is length of `strs`
**Space - O(m * n)**

---

***Please upvote if you find it useful***
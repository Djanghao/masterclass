# [Python / Golang] Simple DP Solution with a Trick for Python

**Author:** yanrucheng
**Votes:** 14
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/806736/](https://leetcode.com/problems/stone-game-v/solutions/806736/)

---

**Idea**
The idea is straight forward. we just try out all the possibilities to find the answer. Naive brute force solution will lead to O(n!) complexity, so we need to store the interim results to improve the complexity to O(n^3).

**A trick for slower languages**
Since I got TLE for the O(n^3) solution in Python. I add a shortcut for a special case when all the elements within a specific range are the same. In this special case, we can get the results in O(logn) complexity.

**Complexity**
Time: O(n^3)
Space: O(n^2)

Please do not downvote unless you find it necessary. Please bro.

**Python**
```
from functools import lru_cache
class Solution:
    def stoneGameV(self, stoneValue: List[int]) -> int:
        presum = [0]
        for s in stoneValue:
            presum += presum[-1] + s,
            
        def sm(i, j):
            return presum[j + 1] - presum[i]
        
        @lru_cache(None)
        def helper(i, j):
            if i == j: return 0
            
            if all(stoneValue[k] == stoneValue[j] for k in range(i, j)):
                cnt = 0
                l = j - i + 1
                while l > 1:
                    l //= 2
                    cnt += l
                return cnt * stoneValue[j]                    
            
            res = 0
            for k in range(i, j):
                if sm(i, k) < sm(k + 1, j):
                    score = helper(i, k) + sm(i, k)
                elif sm(i, k) > sm(k + 1, j):
                    score = sm(k + 1, j) + helper(k + 1, j)
                else:                    
                    score = max(helper(i, k) + sm(i, k), sm(k + 1, j) + helper(k + 1, j))
                res = max(res, score)
            return res                
        
        return helper(0, len(stoneValue) - 1)
```


**Golang**
```
func stoneGameV(stoneValue []int) int {
    n := len(stoneValue)
    memo := make([][]int, n)
    for i := range memo {
        memo[i] = make([]int, n)
    }
    presum := make([]int, n + 1)
    for i := 1; i <= n; i++ {
        presum[i] = presum[i - 1] + stoneValue[i - 1]
    }
    sum := func(i, j int) int {return presum[j + 1] - presum[i]}
    
    
    for l := 2; l <= n; l++ { // l mean length
        for i := 0; i < n - l + 1; i++ {
            j := i + l - 1
            score := 0
            for k := i; k < j; k++ {
                switch {
                case sum(i, k) > sum(k + 1, j):
                    score = max(score, memo[k + 1][j] + sum(k + 1, j))
                case sum(i, k) < sum(k + 1, j):
                    score = max(score, memo[i][k] + sum(i, k))
                default:
                    tmp := max(memo[i][k] + sum(i, k), memo[k + 1][j] + sum(k + 1, j))
                    score = max(score, tmp)
                }
            }
            memo[i][j] = score
        }
    }
    return memo[0][n - 1]
}

func max(i, j int) int {
    if i < j {
        return j
    }
    return i
}
```
# golang Top-Down DP

**Author:** vergil0327
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2656048/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2656048/)

---

```go
func deleteString(s string) int {
    memo := map[int]int{}
    
    var dfs func(i int) int
    dfs = func(i int) int {        
        if i >= len(s) {
            return 0
        }
        
        if _, ok := memo[i]; ok {
            return memo[i]
        }
        
        // !!! base condition, 1 deletion for every substring at least
        memo[i] = 1
        
        for j:=1; j<= (len(s)-i)/2; j++ {
            pattern := s[i:i+j]
            target := s[i+j:i+j+len(pattern)]
            if pattern == target {
                memo[i] = max(memo[i], 1+dfs(i+j))
            }
        }
        
        return memo[i]
    }
    
    return dfs(0)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}
```
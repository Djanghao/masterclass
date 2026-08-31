# [Golang] DP: TopDown -> TD(cache) -> BottomUp(2D Array) -> BU(1D Array) -> BU(1D Array Opt)

**Author:** vasakris
**Votes:** 2
**Link:** [https://leetcode.com/problems/distinct-subsequences/solutions/3243548/](https://leetcode.com/problems/distinct-subsequences/solutions/3243548/)

---

# Code
```

/*------------------------------------------
            Top-Down Approach
  ------------------------------------------*/

func numDistinct(s string, t string) int {
    if len(s) < len(t) {
        return 0
    } else if len(s) == len(t) && s == t {
        return 1
    }

    count := 0
    findWays(0, 0, s, t, &count)
    return count
}

func findWays(idx1, idx2 int, s, t string, count *int) {
    if idx2 == len(t) {
        (*count)++
        return
    } else if idx1 == len(s) {
        return
    }

    if s[idx1] == t[idx2] {
        findWays(idx1+1, idx2+1, s, t, count)
    }
    findWays(idx1+1, idx2, s, t, count)
}

/*------------------------------------------
        Top-Down with Cache Approach
  ------------------------------------------*/

func numDistinct(s string, t string) int {
    if len(s) < len(t) {
        return 0
    } else if len(s) == len(t) && s == t {
        return 1
    }

    cache := make(map[string]int)
    return findWays(0, 0, s, t, cache)
}

func findWays(idx1, idx2 int, s, t string, cache map[string]int) int {
    if idx2 == len(t) {
        return 1
    } else if idx1 == len(s) {
        return 0
    }

    key := strconv.Itoa(idx1) + "-" + strconv.Itoa(idx2)
    if value, ok := cache[key]; ok {
        return value
    }

    count := 0
    if s[idx1] == t[idx2] {
        count += findWays(idx1+1, idx2+1, s, t, cache)
    }
    count += findWays(idx1+1, idx2, s, t, cache)
    cache[key] = count

    return count
}

/*
     r a b b i t

   1 0 0 0 0 0 0
r  1 1 0 0 0 0 0   
a  1 1 1 0 0 0 0
b  1 1 1 1 0 0 0
b  1 1 1 2 1 0 0
b  1 1 1 3 3 0 0
i  1 1 1 3 3 3 0
t  1 1 1 3 3 3 3

     b a g 
   1 0 0 0
b  1 1 0 0
a  1 1 1 0
b  1 2 1 0
g  1 2 1 1 
b  1 3 1 1
a  1 3 4 1
g  1 3 4 5

r a b b i t

3 3 3 3 1 1 1	r 
0 3 3 3 1 1 1	a
0 0 3 3 1 1 1	b
0 0 1 2 1 1 1	b
0 0 0 1 1 1 1	b
0 0 0 0 1 1 1	i
0 0 0 0 0 1 1 	t
0 0 0 0 0 0 1

*/

/*------------------------------------------
        Bottom-Up with 2D Array Approach
  ------------------------------------------*/

func numDistinct(s string, t string) int {
    m := len(s)
    n := len(t)
    
    dp := make([][]int, m+1)
    for r := 0; r <= m; r++ {
        dp[r] = make([]int, n+1)
    }
    
    for r := 0; r <= m; r++ {
        dp[r][0] = 1
    } 
    
    for r := 1; r <= m; r++ {
        for c := 1; c <= n; c++ {
            dp[r][c] = dp[r-1][c]
            
            if s[r-1] == t[c-1] {
                dp[r][c] += dp[r-1][c-1]
            }
        }
    }
    
    return dp[m][n]
}

/*------------------------------------------
        Bottom-Up with 1D Array Approach
  ------------------------------------------*/

func numDistinct(s string, t string) int {
    m := len(s)
    n := len(t)
    
    prev := make([]int, n+1)
    prev[0] = 1

    for r := 1; r <= m; r++ {
        curr := make([]int, n+1)
        curr[0] = 1
        for c := 1; c <= n; c++ {
            curr[c] = prev[c]
            
            if s[r-1] == t[c-1] {
                curr[c] += prev[c-1]
            }
        }
        prev = curr
    }
    
    return prev[n]
}

/*------------------------------------------
  Bottom-Up with 1D Optimized Array Approach
  ------------------------------------------*/

func numDistinct(s string, t string) int {
    m := len(s)
    n := len(t)
    
    dp := make([]int, n+1)
    dp[0] = 1

    for r := 1; r <= m; r++ {
        for c := n; c > 0; c-- {
            if s[r-1] == t[c-1] {
                dp[c] += dp[c-1]
            }
        }
    }
    
    return dp[n]
}

```
# [Go] Recursion | Memoization

**Author:** adithyasashasai
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4629523/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4629523/)

---

# Code
```
/*
1 1  0 0 1 0  1 1 1 1 1
0 1  1 1 1 0  0 0 1 1 0
F    F F      F F     F
*/
func minOperations(s1 string, s2 string, x int) int {
    next, d, p := make([]int, len(s1)), make([]bool, len(s1)), len(s1)

    for i := len(s1)-1; i >= 0; i-- {
        next[i] = p
        if s1[i] != s2[i] {
            p = i
        }
        d[i] = s1[i] == s2[i]
    }
    memo := make([][][]int, len(s1))
    for i := range memo {
        memo[i] = make([][]int, len(s1)) 
        for j := range memo[i] {
            memo[i][j] = make([]int, 2) 
            for k := range memo[i][j] {
                memo[i][j][k] = -2
            }
        }
    }
    var dfs func(i, j, f int) int 
    dfs = func(i, j, f int) int {
        if i == len(s1) {
            return 0
        }
        if i > j {
            return -1
        }
        if i == j {
            if (f == 0 && d[i]) || (f == 1 && !d[i])  {return 0}
            return -1
        }
        if memo[i][j][f] != -2 {
            return memo[i][j][f] 
        }
        ans := math.MaxInt
        if (f == 0 && d[i]) || (f == 1 && !d[i]) {
            ans =  dfs(i+1, j, 0)
        } else {
            if cur := dfs(i+1, j, 1); cur != -1 {
                ans =  min(ans, 1 + cur)
            }
            n := next[i]
            for n <= j {
                mid := dfs(i+1, n-1, 0)
                last := dfs(n+1, j, 0)
                if mid != -1 && last != -1 {
                    ans = min(ans, mid + last + x)
                }
                n = next[n]
            }
        }

        if ans == math.MaxInt {
            ans = -1
        }
        memo[i][j][f] = ans
        return ans
    }
    ans := dfs(0, len(s1)-1, 0)
    return ans
}

/*
func minOperations(s1 string, s2 string, x int) int {
    dp, d, s := make([]int, len(s1)), make([]bool, len(s1)), -1
    for i := 0; i < len(d); i++ {
        d[i] = s1[i] == s2[i]
        if s == -1 && !d[i] {
            s = i
        }
        dp[i] = -2
    }

    var dfs func(i int) int 
    dfs = func(i int) int {
        //fmt.Println(i)
        if i == len(s1) {
            return 0
        }
        if dp[i] != -2 {
            return dp[i]
        }
        ans, f := math.MaxInt, -1
        for j := i+1; j < len(s1); j++ {
            if d[j] { continue } 
            if f == -1 {
                f = 0
                ans = x
                continue
            }
            n := dfs(j)
            if n != -1 {
                ans += n
            } else {
                ans = math.MaxInt
            }
            break
        }
        if i + 1 < len(s1) {
            if d[i+1] {
                n := dfs(i+1)
                if n != -1 {
                    ans = min(ans, n+1)
                }
            } else {
                cur := 1
                for j := i+2; j < len(s1); j++ {
                    if d[j] { continue }
                    n := dfs(j)
                    if n != -1 {
                        cur += n
                    } else {
                        cur = math.MaxInt
                    }
                    break
                }
                ans = min(ans,cur)
            }
        }
        if ans == math.MaxInt {
            dp[i] = -1
        } else {
            dp[i] = ans
        }
        return dp[i]
    }
    if s == -1 {
        return 0
    }
    ans := dfs(s)
    fmt.Println(dp)
    return ans
}
*/
```
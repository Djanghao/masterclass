# DP Top-down, well explain

**Author:** xhunter1412
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/1667940/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/1667940/)

---

This solution  apply DP topdown. 
Let say `memo[x][y]` is the total number different palindromic subsequences.

Each state we have `x` and `y`

Bad case:
`x > y -> return 0`
`x == y -> return 1`
`x + 1 == y -> return 2` . Even `s[x] == s[y] or s[x] != s[y]`, the result still 2.

There are 2 situations 

**Case 1:** `s[x] == s[y]`
For example `b....b`, every Palindomic between `[x + 1 ; y - 1]` can be add with `'b' + palind subsequences + 'b'`.
So the result is `memo[x][y] = memo[x+1][y-1] * 2`.
Then, we need to check `b` or `bb` already inside `[x + 1 ; y - 1]` or not.
Initialize `prev` and `next` array to tell us the previous and the next position of character s[i].
So `if next of x == y -> memo[x][y] += 2` ( add `b` and `bb`)
Else `if next of x == prev of y > memo[x][y] += 1` (add `bb`)
Else `memo[x][y] -= memo[next of x + 1][prev of y -1]`

**Case 2:** `s[x] != s[y]`
`memo[x][y] = memo[x][y-1] + memo[x+1][y] - memo[x+1][y-1]`
```
func countPalindromicSubsequences(s string) int {
    memo := make([][]int, len(s))
    for i := range s {
        memo[i] = make([]int, len(s))
    }
    
    prev := make([]int, len(s))
    next := make([]int, len(s))
    
    track := make(map[byte]int)
    
    for i, c := range s {
        if pre, ok := track[byte(c)]; ok {
            prev[i] = pre
        } else {
            prev[i] = -1
        }
        track[byte(c)] = i
    }
    
    track = make(map[byte]int)
    
    for i := len(s) - 1; i >= 0 ; i -- {
        b := byte(s[i])
        if nex, ok := track[b]; ok {
            next[i] = nex
        } else {
            next[i] = len(s)
        }
        track[b] = i
    }
    
    dp(0, len(s) -1, s, prev, next, memo)
    return memo[0][len(s) - 1]
}

func dp(x, y int, s string, prev, next []int, memo [][]int) int {
    if x > y {
        return 0
    }
    
    if x == y {
        memo[x][y] = 1 
        return 1
    }
    if x + 1 == y {
        memo[x][y] = 2
        return 2
    }
    if memo[x][y] > 0 {
        return memo[x][y]
    }
    
    if s[x] == s[y] {
        memo[x][y] = dp(x + 1, y -1, s, prev, next, memo) * 2 
        nextx := next[x]
        prevy := prev[y]
        if nextx == y {
             memo[x][y] += 2
        } else if nextx == prevy {
            memo[x][y] += 1
        } else {
            memo[x][y] -= dp(nextx +1, prevy - 1, s, prev, next, memo)
        }
        
    } else {
        memo[x][y] = dp(x, y-1, s, prev, next, memo) + dp(x + 1, y, s, prev, next, memo) - dp(x + 1, y -1, s, prev, next, memo) 
    }
    memo[x][y] = (memo[x][y] + module) % module
    return memo[x][y] 
}


var  module int = 1e9 + 7
```
# 0ms runtime. 3 golang solutions with optimization and explaination. Recursive | Iterative | DP.

**Author:** broook
**Votes:** 14
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/963049/](https://leetcode.com/problems/wildcard-matching/solutions/963049/)

---

This is a wonderful problem, and deserves serious study.

1. Recursive solution.  It's not complicated. 

```
func isMatch(s string, p string) bool {
    if len(p) == 0 {
        return len(s) == 0
    }
    if len(s) > 0 && (s[0] == p[0] || p[0] == '?') {
        return isMatch(s[1:], p[1:])
    } else if p[0] == '*' {
        return isMatch(s, p[1:]) || (len(s) > 0 && isMatch(s[1:], p))
    }
    return false
}
```
Unfortunately it is judged Time Limit Exceeded.  The test cases is specially designed  for recursive algorithms.

<img src="https://assets.leetcode.com/users/images/de901b4d-393d-42e1-9a8c-c0c11a7218b6_1607409296.4703355.png" width="450px" />

Let's do some optimization works.
 
Optimization 1: Pruning unnecessary recursive calls.
Thinking about this testcase `assert.False(t, isMatch("bbc", "*b*a"))`. Every time we match `*`, if the string can't match the subsequent pattern, the recursive function will call itself two times, the call tree forks.

```
isMatch("bbc", "*b*a")         
  |
  |-isMatch("bbc", "b*a")   
  |   |
  |   |-isMatch("bc", "*a")    
  |       |
  |       |-isMatch("bc", "a")
  |       |
  |       |-isMatch("c", "*a")  // First fork
  |           |                 
  |           |-isMatch("c", "a")
  |           |
  |           |-isMatch("", "*a") // Second fork return false. This means that any suffix substring can't match the sub pattern 
  |                               // starts with the last `*`. "c","bc","bbc", none of them can match "*a". 
  |                               // **AND OF COURCE** they can't match any pattern ends with "*a", such as "b*a","*b*a". This's the untimate match.
  |
  |-isMatch("bc", "*b*a")  // Third fork, This fork branch is unnecessary, because the result is 
	  |                    // already known after calling isMatch("", "*a").
      |
      |-isMatch("bc", "b*a")
      |   |
      |   |-isMatch("c", "*a")
      |....  
```
Now we know that after matching the pattern starts with the last `*`, any recursive call fork is unnecessary.
To avoid alll the unnecessary recursive forks we only need to add a `lastStar` variant and set the `lastStar` to `true` after matching the pattern starts with the last `*`. 
So, here is the optimized solution:



```
func isMatch(s string, p string) bool { 
    var lastStar bool
    var helper func(s, p string) bool
    helper = func(s, p string) bool {
        if len(p) == 0 {
            return len(s) == 0
        }
        var matched bool
        if len(s) > 0 && (p[0] == '?' || s[0] == p[0]) {
            matched = helper(s[1:], p[1:])
        } else if p[0] == '*' {
            matched = len(p) == 1 || helper(s, p[1:]) // cut the pattern string first
            if !lastStar && !matched && len(s) > 0 {
                matched = helper(s[1:], p) // When running to this line for the first time, the pattern string must start with the last `*`, then cut the string.
                lastStar = true
            }
        }
        return matched
    }
    return helper(s, p)
}
```

Optimization 2: Two directions match.
About this testcase `s="abababababababa", p="*b*b*b*b*e"`, the solution do many useless work with the prefix containing many `*`, but the last char "a" doesn't match "e", and it's easy to get. If matching in two directions, back to front and front to back, it can save some time.

```go
func isMatch(s string, p string) bool {
    var lastStar, frontToBack bool
    var helper func(s, p string) bool
    helper = func(s, p string) bool {
        if len(p) == 0 {
            return len(s) == 0
        }
        var matched bool
        if frontToBack {
			if len(s) > 0 && (p[0] == '?' || s[0] == p[0]) {
				matched = helper(s[1:], p[1:])
			} else if p[0] == '*' {
				matched = len(p) == 1 || helper(s, p[1:])
				if !lastStar && !matched && len(s) > 0 {
					matched = helper(s[1:], p)
					lastStar = true
				}
			}
        } else {
            if len(s) > 0 && (p[len(p)-1] == '?' || s[len(s)-1] == p[len(p)-1]) {
                matched = helper(s[:len(s)-1], p[:len(p)-1])
            } else if p[len(p)-1] == '*' {
    			frontToBack = true
                matched = len(p) == 1 || helper(s, p) //Matching from front to back
            }
		}
        return matched
    }
    return helper(s, p)
}
```

2. Iterative solution.
This solution is based on the same idea of the optimized recursive solution. When matching `*`, first we compare the follow up chars, if it doesn't match, we just backtrack to the last star. 

```go
func isMatch(s string, p string) bool {
	var i, j, matched, lastStar int
    lastStar = -1
	for i < len(s) {
		if j < len(p) {
			if p[j] == '?' || s[i] == p[j] {
				i, j = i+ 1, j+ 1
				continue
			}
			if p[j] == '*' {
			    matched, lastStar = i, j
                j++
				continue
			}
		}
		if lastStar < 0 {
		    return false
        }
        matched++ // let s[i] matches '*'
        i, j = matched, lastStar+1
	}
	
	for ; j < len(p); j++ {
		if p[j] != '*' {
			return false
		}
	}
	return true
}
```

Optimization: Two directions match.

```go
func isMatch(s string, p string) bool {
    var i, j, matched, lastStar, lastI, lastJ int
	//match from end to front until the last star
    for lastI, lastJ = len(s)-1, len(p)-1; lastI >= 0 && lastJ >= 0 &&  p[lastJ] != '*'; {
	    if p[lastJ] == '?' || s[lastI] == p[lastJ] {
            lastI, lastJ = lastI-1, lastJ-1
        } else {
            return false
        }
    }
    if lastJ < 0 {
        return lastI < 0
    }
    if lastI < 0 {
        for j=0; j<=lastJ; j++ {
            if p[j] != '*' {
                return false
            }
        }
        return true
    }
	lastStar = -1
	//match from front to end
    for i <= lastI {
        if j <= lastJ {
            if p[j] == '?' || s[i] == p[j] {
                i, j = i+1, j+1
                continue
            }
            if p[j] == '*' {
                matched, lastStar = i, j
                j++
                continue
            }
        }
        if lastStar < 0 {
            return false
        }
        matched++
        i, j = matched, lastStar+1
    }

    for ; j <= lastJ; j++ {
        if p[j] != '*' {
            return false
        }
    }
    return true
}
```

Actually I think this solution is ugly. Bu it can get `0ms` running time.
<img src="https://assets.leetcode.com/users/images/dfb37fff-ed39-456b-95b1-be03e16e69fe_1607334056.0733168.png" width="500px" />

3. DP solution.

```
func isMatch(s string, p string) bool {
    if len(p) == 0 {
        return len(s) == 0
    }
    dp := make([][]bool, len(p) + 1)
    for i := 0; i < len(dp); i++ {
        dp[i] = make([]bool, len(s) + 1)
    }
    dp[0][0] = true
    for i:=1;i<=len(p);i++ {
        dp[i][0] = dp[i-1][0] && p[i-1] == '*'
        for j := 1; j <= len(s); j++ {
            switch p[i-1] {
            case '?':
                dp[i][j] = dp[i-1][j-1]
            case '*':
                dp[i][j] = dp[i-1][j] || dp[i][j-1]
            default:
                dp[i][j] = dp[i-1][j-1] && p[i-1] == s[j-1]
            }
        }
    }
    return dp[len(p)][len(s)]
}
```

Optimization:

1.About this testcase `s="abcdefghi", p="*fghi"`, after loop in which match `f`, the dp row is `[0,0,0,0,0,0,1,0,0,0]`, in the next loop which is to match `g`, we don't need start from the beginning char `a`. We just start from `f` which is true correspondingly in dp array . So by saving the first matched position of last loop  to variant `firstMatch`, we can start from `firstMatch` directly in the next loop.  Also We don't need match `gh` to pattern `f`, because all behind cells are False. So we can save the last matched position to `lastMatch`, if next pattern char isn't `*`, in next loop, we can stop at `lastMatch + 1`.
2.About this testcase `s="ddddddddfdfdfd", p="d*******d"`,  the continuous `*` is exactly same as the pattern "*" with only one star. We can shrink the redundant `*`s to single `*` at the beginning. 
3. By shrinking the pattern string, we can count the number of `non-*` chars. That can help to reduce loop length of matching `*`. In testcase `s="abcdefg", p="*?*?*?`, there are 3 `non-*` chars, so in the first loop of matching `*`, we can just stop matching at char `d`, because there are 3 more `non-*` chars in the subsequent pattern.
4. About this testcase `s="ddddddddfdfdfd", p="aaaaaaaaaaa"`, we don't need to run to the end to get the result from `dp[len(s)][len(p)]`.  After the first pattern `'a'` we already know the string doesn't match the pattern. The subsequent runs are meaningless.
5. Space optimization using an arrays instead of 2-d arrays. Reduce space from len(s)\\*len(p)  to len(s). 
```go
	...
	switch p[i-1] {
	case '?':
		dp[i][j] = dp[i-1][j-1]
	case '*':
		dp[i][j] = dp[i-1][j] || dp[i][j-1]
	...
```
In dp solution, determining a cell in the 2-d array need three cells which respectively are the left cell, the top cell and the left top cell.
|a|b|c|.|
|-|-|-|-|
|**d**|*e*|f|.|
|.|.|.|.|
In the example in the table above, Determining cell `e` depends on `a`,`b` and `d`.  
To optimize the space, We can use a temporary variant `dpCur` save the  temporary result of cell `e`, because cell `e` is needed in determing cell 'f'. We can  put `dpcur` into cell `e` after determing cell `f`.

```go
func isMatch(s string, p string) bool {
    if len(p) == 0 {
        return len(s) == 0
    }
    //shrink redundant `*`.
    var charCount int
    var b bytes.Buffer
    for i := 0; i < len(p); i++ {
        if p[i] != '*' || i == 0 || p[i] != p[i-1] {
            b.WriteByte(p[i])
            if p[i] != '*' {
                charCount++
            }
        }
    }
    if charCount > len(s) {
        return false
    }
    if b.Len() < len(p) {
        p = b.String()
    }
	
    var dp = make([]bool, len(s)+1)
    dp[0] = true
    var firstMatch,stopMatch, lastMatch,dpCur = 1,0,0,true
	
    for i := 1; i <= len(p); i++ {
        dpCur = dp[firstMatch-1] && p[i-1] == '*'
        matched := dpCur
        if p[i-1] == '*' {
            stopMatch = len(s) - charCount
        } else {
            charCount--
			stopMatch = lastMatch + 1
			// Don't worry about overflow if `stopMatch > len(s)`. It won't happen.
        }
        for j := firstMatch; j <= stopMatch; j++ {
            switch p[i-1] {
            case '?':
                dpCur, dp[j-1] = dp[j-1], dpCur
            case '*':
                dpCur, dp[j-1] = dpCur || dp[j], dpCur
            default:
                dpCur, dp[j-1] = dp[j-1] && p[i-1] == s[j-1], dpCur
            }
            if dpCur {
                if !matched {
                    firstMatch = j
                    matched = true
                }
                lastMatch = j
            }
        }
        if !matched {
            //we already know s[:j] doesn't match p[:i]. So we don't need more comparing.
            return false
        }
        dp[stopMatch] = dpCur
    }
    return dp[len(s)]
}
```

I will be really surprised if someone can keep reading to here.
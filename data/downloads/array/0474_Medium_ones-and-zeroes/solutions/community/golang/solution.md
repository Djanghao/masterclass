# Go, 16ms, beats 100%, very simple, with pseudocode

**Author:** beaum
**Votes:** 3
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/865836/](https://leetcode.com/problems/ones-and-zeroes/solutions/865836/)

---

```
func findMaxForm(strs []string, m int, n int) int {
    memo := make([][]int, m + 1)
    for i := range memo {
        memo[i] = make([]int, n + 1)
    }
    for _, s := range strs {
        z := strings.Count(s, "0")
        o := len(s) - z
        for i := m; i >= z; i -= 1 {
            for j := n; j >= o; j -= 1 {
                t := memo[i - z][j - o] + 1
                if t > memo[i][j] {
                    memo[i][j] = t
                }
            }
        }
    }
    return memo[m][n]
}
```

Pseudocode:
```
Create m+1 by n+1 int array M for memoization.
For each string S:
    Count zeros and ones into vars "zeros" and "ones".
	For each integer "i" between "m" and "zeros" inclusive:
		For each integer "j" between "n" and "ones" inclusive:
			If using string S along with best result from M[i - zeros][j - ones] improves the previous best score for M[i][j]:
				Then update M[i][j] with M[i - zeros][j - ones] + 1
Return highest score from M (will always be index m,n)
```
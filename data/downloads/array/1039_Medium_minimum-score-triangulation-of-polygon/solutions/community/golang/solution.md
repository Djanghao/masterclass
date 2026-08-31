# Go dfs with memo

**Author:** dchooyc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/4494812/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/4494812/)

---

```
func minScoreTriangulation(values []int) int {
    n := len(values)
    memo := make([][]int, n)
    for i := range memo { memo[i] = make([]int, n) }
    return dfs(0, n - 1, values, memo)
}

func dfs(i, j int, arr []int, memo [][]int) int {
    if memo[i][j] != 0 { return memo[i][j] }

    res := 0

    for k := i + 1; k < j; k++ {
        left := dfs(i, k, arr, memo)
        mid := arr[i] * arr[k] * arr[j]
        right := dfs(k, j, arr, memo)
        cur := left + mid + right
        if res == 0 || cur < res {
            res = cur
        }
    }

    memo[i][j] = res
    return res
}
```
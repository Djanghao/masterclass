# 👍Runtime 245 ms  Beats 83.33% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/5020518/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/5020518/)

---

# Code
```
func dfs(x, mask int, s string, con [][]int, have map[int]int) int64 {
	var r int64 = 0
	if x != 0 {
		mask ^= 1 << (s[x] - 'a')
		for i := 1 << 25; i > 0; i >>= 1 {
			if val, ok := have[mask^i]; ok {
				r += int64(val)
			}
		}
		r += int64(have[mask])
		have[mask]++
	}
	for _, y := range con[x] {
		r += dfs(y, mask, s, con, have)
	}
	return r
}

func countPalindromePaths(parent []int, s string) int64 {
	n := len(s)
	con := make([][]int, n)
	for i := 0; i < n; i++ {
		con[i] = []int{}
	}
	for i := 1; i < n; i++ {
		con[parent[i]] = append(con[parent[i]], i)
	}
	have := make(map[int]int)
	have[0] = 1
	return dfs(0, 0, s, con, have)
}
```
# 👍Runtime 167 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/5438208/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/5438208/)

---

# Code
```
const mod = 1e9 + 7

func colorTheGrid(m int, n int) int {
	state := make(map[int]int64)
	dfs(state, 0, m, -1, 0)
	set := make([]int, 0, len(state))
	for k := range state {
		set = append(set, k)
	}

	for i := 1; i < n; i++ {
		dp := make(map[int]int64)
		for _, a := range set {
			for _, b := range set {
				if a&b == 0 {
					dp[a] = (dp[a] + state[b]) % mod
				}
			}
		}
		state = dp
	}

	res := int64(0)
	for _, val := range state {
		res = (res + val) % mod
	}
	return int(res)
}

func dfs(state map[int]int64, j, m, prev, cur int) {
	if j == m {
		state[cur]++
		return
	}
	for i := 0; i < 3; i++ {
		if i == prev {
			continue
		}
		dfs(state, j+1, m, i, (cur<<3)|(1<<i))
	}
}
```
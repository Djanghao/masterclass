# Go solution || Beat 100%

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4789209/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4789209/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
const mx = 1e5 + 1

var isPrime [mx]bool

func init() {
	var primes []int
	for i := 2; i < mx; i++ {
		isPrime[i] = true
	}
	for i := 2; i < mx; i++ {
		if isPrime[i] {
			primes = append(primes, i)
		}
		for _, prime := range primes {
			if i*prime >= mx {
				break
			}
			isPrime[i*prime] = false
			if i%prime == 0 {
				break
			}
		}
	}
}

func countPaths(n int, edges [][]int) int64 {
	var g = make([][]int, n+1)
	for _, edge := range edges {
		var i, j = edge[0], edge[1]
		g[i] = append(g[i], j)
		g[j] = append(g[j], i)
	}

	var dfs func(int, int)
	var seen []int
	dfs = func(i, pre int) {
		seen = append(seen, i)
		for _, j := range g[i] {
			if j != pre && !isPrime[j] {
				dfs(j, i)
			}
		}
	}
	var ans int
	var count = make([]int, n+1)
	for i := 1; i <= n; i++ {
		if !isPrime[i] {
			continue
		}
		var cur int
		for _, j := range g[i] {
			if isPrime[j] {
				continue
			}
			if count[j] == 0 {
				seen = []int{}
				dfs(j, 0)
				var cnt = len(seen)
				for _, k := range seen {
					count[k] = cnt
				}
			}
			ans += count[j] * cur
			cur += count[j]
		}
		ans += cur
	}
	return int64(ans)
}
```
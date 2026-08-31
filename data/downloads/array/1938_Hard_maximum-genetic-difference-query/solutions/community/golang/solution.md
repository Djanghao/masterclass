# go solotion

**Author:** lainhdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/6106741/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/6106741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maxGeneticDifference(parents []int, queries [][]int) []int {
	n := len(parents)
	adj := make([][]int, n)
	for i, p := range parents {
		if p >= 0 && p < n {  
			adj[p] = append(adj[p], i)
		}
	}

	root := 0
	for i, p := range parents {
		if p == -1 {
			root = i
			break
		}
	}

	queryMap := make(map[int][][2]int)
	for i, q := range queries {
		queryMap[q[0]] = append(queryMap[q[0]], [2]int{i, q[1]})
	}

	const M = 18
	cnts := make([][]int, M)
	for i := range cnts {
		cnts[i] = make([]int, 1<<(M-i))
	}

	ans := make([]int, len(queries))

	var dfs func(int)
	dfs = func(node int) {
		for i := 0; i < M; i++ {
			cnts[i][node>>i]++
		}
		for _, q := range queryMap[node] {
			idx, val := q[0], q[1]
			res := 0
			for i := M - 1; i >= 0; i-- {
				bit := (val >> i) & 1
				c1, c2 := res*2+(1-bit), res*2+bit
				if cnts[i][c1] > 0 {
					res = c1
				} else {
					res = c2
				}
			}
			ans[idx] = res ^ val
		}
		for _, child := range adj[node] {
			dfs(child)
		}
		for i := 0; i < M; i++ {
			cnts[i][node>>i]--
		}
	}

	dfs(root)
	return ans
}
```
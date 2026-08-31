# 🔥 Go BFS Simulation || Beat 100% 🔥

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/5176847/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/5176847/)

---

# Intuition
Simple simulation.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func frogPosition(n int, edges [][]int, t int, target int) float64 {
	g := make([][]int, n+1)
	for _, edge := range edges {
		x, y := edge[0], edge[1]
		g[x] = append(g[x], y)
		g[y] = append(g[y], x)
	}
	visited := make([]bool, n+1)
	visited[0], visited[1] = true, true
	probabilities := make([]float64, n+1)
	probabilities[1] = 1
	cur := []int{1}
	for time := 0; time < t; time++ {
		var nxt []int
		for _, x := range cur {
			var cnt int
			for _, y := range g[x] {
				if !visited[y] {
					cnt++
					nxt = append(nxt, y)
				}
			}
			if cnt != 0 {
				for _, y := range g[x] {
					if !visited[y] {
						probabilities[y] = probabilities[x] / float64(cnt)
						visited[y] = true
					}
				}
				probabilities[x] = 0
			}
		}
		cur = nxt
	}
	return probabilities[target]
}
```
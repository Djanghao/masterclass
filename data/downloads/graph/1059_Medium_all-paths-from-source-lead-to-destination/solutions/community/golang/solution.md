# Go | DFS | Node coloring

**Author:** gudzon
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/5548479/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/5548479/)

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
```
const (
    white = 0
	grey  = 1
	black = 2
)

func leadsToDestination(n int, edges [][]int, source int, destination int) bool {
	graph := map[int][]int{}
	states := make([]int, n)

	for _, edge := range edges {
		graph[edge[0]] = append(graph[edge[0]], edge[1])
	}

	var dfs func(node int) bool
	dfs = func(node int) bool {
        if len(graph[node]) == 0 {
            return node == destination
        }

        if states[node] != white {
            return states[node] == black
        }

		states[node] = grey

		for _, next := range graph[node] {
			if !dfs(next) {
				return false
			}
		}

		states[node] = black

		return true
	}

	return dfs(source)
}
```
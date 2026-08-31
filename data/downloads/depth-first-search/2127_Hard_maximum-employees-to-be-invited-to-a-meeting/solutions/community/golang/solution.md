# Runtime 173 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/5558042/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/5558042/)

---

# Code
```
func maximumInvitations(favorite []int) int {
	n := len(favorite)
	graph := make([][]int, n)
	for i := range graph {
		graph[i] = []int{}
	}

	answer := 0
	pairs := [][]int{}

	for i := 0; i < n; i++ {
		if i == favorite[favorite[i]] {
			if i < favorite[i] {
				pairs = append(pairs, []int{i, favorite[i]})
			}
		} else {
			graph[favorite[i]] = append(graph[favorite[i]], i)
		}
	}

	visited := make([]bool, n)
	for _, pair := range pairs {
		answer += dfs(graph, pair[0], visited) + dfs(graph, pair[1], visited)
	}

	counter := make([]int, n)
	round := make([]int, n)

	rnd := 1
	circleMax := 0

	for i := 0; i < n; i++ {
		if visited[i] {
			continue
		}
		if round[i] != 0 {
			continue
		}

		cnt := 1
		j := i
		for counter[j] == 0 {
			counter[j] = cnt
			round[j] = rnd
			j = favorite[j]
			cnt++
		}
		if round[j] == rnd {
			circleMax = max(circleMax, cnt-counter[j])
		}
		rnd++
	}

	return max(circleMax, answer)
}

func dfs(graph [][]int, node int, visited []bool) int {
	visited[node] = true
	maxVal := 0
	for _, neighbor := range graph[node] {
		maxVal = max(maxVal, dfs(graph, neighbor, visited))
	}
	return maxVal + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```
# Golang DFS with very detailed comments [with runnable tests and ASCII graphs]

**Author:** Trane9991
**Votes:** 9
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/766939/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/766939/)

---

Inspired by: https://leetcode.com/problems/critical-connections-in-a-network/discuss/410345/Python-(98-Time-100-Memory)-clean-solution-with-explanaions-for-confused-people-like-me

[Runnable tests and visualized testcases here](https://play.golang.org/p/AewLt_WO2wM)

```go
func criticalConnections(n int, connections [][]int) [][]int {
	graph := make([][]int, n)

	for _, c := range connections {
		graph[c[0]] = append(graph[c[0]], c[1])
		graph[c[1]] = append(graph[c[1]], c[0])
	}

	return dfs(0, -1, 0, graph, make([]*int, n))
}

func dfs(cur, prev, depth int, graph [][]int, visited []*int) (res [][]int) {
	// marking node as visited and saving depth
	visited[cur] = &depth

	// go over neighbors
	for _, n := range graph[cur] {
		// do not check the node where we came from
		if n == prev {
			continue
		}

		// if we didn't see this node before, go check it
		if visited[n] == nil {
			res = append(res, dfs(n, cur, depth+1, graph, visited)...)
		}

		/* if there is "smaller" depth value
		   for the neighbor, this means, that they are conected
		   in more than one path, see example:

		   depth:    graph:       visited depth:
			 0:       0              0: 0
					  | \\            1: 0
			 1:       1 - 2          2: 0
					  |              3: 2
			 2:       3

			 DFS will go: 0 -> 1 -> 2
							   1 -> 3

			We can see, that 0, 1, 2 has "visited depth" of "0".
			This is because, we are storing the minimal depth
			of the neigbor, but excluding the one we came from.
			So even we got to 2 from 0, but it was still able
			to reach 0 in different path, because it's "visited depth"
			is the same as 0 it means that they are connected in more
			than one way.
		*/
		if *visited[cur] > *visited[n] {
			visited[cur] = visited[n]
		}

		// taking into account previous comment, we know
		// that neigbors connected in more then one way has
		// the same "visited depth". So if even that after
		// exploring all nodes, we see that neigbors "visited depth"
		// is bigger than current "deepth", this MUST be the Critical Link
		if *visited[n] > depth {
			res = append(res, []int{cur, n})
		}
	}

	return res
}
```
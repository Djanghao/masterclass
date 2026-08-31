# [Go] Backtracking beats 100% runtime

**Author:** skrulr
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/887894/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/887894/)

---

I can't emphasize enough the tricky part of the state update when iterating on possible solutions. 
A deep understanding of how slices `append` work in Go is required for a successful implementation of a backtracking solution.

See [this interesting Stack Overflow answer](https://stackoverflow.com/a/58726780/7939550) for more details.


```go
func allPathsSourceTarget(graph [][]int) [][]int {
	var paths [][]int
	n := len(graph)

	var backtrack func(int, []int)
	backtrack = func(node int, curPath []int) {
		if node == n-1 {
			paths = append(paths, curPath)
			return
		}
		lenCurPath := len(curPath)
		for  _, child := range graph[node] {
			tmp := make([]int, lenCurPath, lenCurPath+1)
			_ = copy(tmp, curPath)  // create a new empty slice in which we copy the current path
			tmp = append(tmp, child)
		 	backtrack(child, tmp)  // backtrack on a new instance of the current path - does not 'contaminate' the curPath variable.
		}
	}
	backtrack(0, []int{0})
	return paths
}
```
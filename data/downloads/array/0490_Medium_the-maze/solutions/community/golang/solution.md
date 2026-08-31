# Golang Solution || DFS T: O(m*n) S: O(m*n)

**Author:** houshengbo
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-maze/solutions/2555745/](https://leetcode.com/problems/the-maze/solutions/2555745/)

---

```
import (
	"strconv"
)

func hasPath(maze [][]int, start []int, destination []int) bool {
	if len(destination) != 2 && len(start) != 2 {
		return false
	}
	visited := map[string]struct{}{}
	return hasPathWithMemo(maze, start, destination, visited)
}

func match(start, destination []int) bool {
    return start[0] == destination[0] && start[1] == destination[1]
}

func hasPathWithMemo(maze [][]int, start []int, destination []int, visited map[string]struct{}) bool {
	key := strconv.Itoa(start[0]) + "," + strconv.Itoa(start[1])
	if _, ok := visited[key]; ok {
		return false
	}
	visited[key] = struct{}{}
	if match(start, destination) {
		return true
	}

	newColL, newColR := start[1]-1, start[1]+1
	newRowD, newRowU := start[0]+1, start[0]-1

	// Go up to the top
	for newRowU >= 0 && maze[newRowU][start[1]] == 0 {
		newRowU--
	}

	if hasPathWithMemo(maze, []int{newRowU + 1, start[1]}, destination, visited) {
		return true
	}

	// Go down to the bottom
	for newRowD < len(maze) && maze[newRowD][start[1]] == 0 {
		newRowD++
	}
	if hasPathWithMemo(maze, []int{newRowD - 1, start[1]}, destination, visited) {
		return true
	}

	// Go right the edge
	for newColR < len(maze[0]) && maze[start[0]][newColR] == 0 {
		newColR++
	}
	if hasPathWithMemo(maze, []int{start[0], newColR - 1}, destination, visited) {
		return true
	}

	// Go left to the edge
	for newColL >= 0 && maze[start[0]][newColL] == 0 {
		newColL--
	}
	if hasPathWithMemo(maze, []int{start[0], newColL + 1}, destination, visited) {
		return true
	}

	return false
}
```
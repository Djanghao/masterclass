# Simple BFS - Go

**Author:** jaliph
**Votes:** 1
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/5352066/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/5352066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The idea is to find minimum steps between each consecutive numbers on the grid. 

A simple BFS from 1 number to the very next number works. If such a path doesn't exist, return -1

# Approach
<!-- Describe your approach to solving the problem. -->

Find the consecutive numbers from the grid which are greater than 1s. 

Sort the list to traverse on them based on their ordering.

Do BFS on each pair, and count steps. add the steps to global sum.

On catch is how to handle the scenario that you always start from 0, 0 and the first entry in the list may not be 0, 0. To solve this. start from 0,0 by default and if such a 0, 0 already exist at start BFS will give 0. [BFS gives -1 if path not possible.]

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Coord struct {
	x   int
	y   int
	val int
}

func cutOffTree(forest [][]int) int {

	R := len(forest)
	C := len(forest[0])

	trees := []Coord{}

	for i := range forest {
		for j := range forest[i] {
			if forest[i][j] > 1 {
				trees = append(trees, Coord{i, j, forest[i][j]})
			}
		}
	}

	sort.Slice(trees, func(i, j int) bool {
		return trees[i].val < trees[j].val
	})

	paths := [][]int{
		{1, 0},
		{0, 1},
		{0, -1},
		{-1, 0},
	}

	bfs := func(sx, sy, dx, dy int) int {
		row := R
		col := C
		visited := make([][]bool, row)
		rows := make([]bool, row*col)
		for i := range visited {
			visited[i] = rows[i*C : (i+1)*C]
		}

		q := [][3]int{}
		q = append(q, [3]int{sx, sy, 0})
		visited[sx][sy] = true

		for len(q) > 0 {
			curr := q[0]
			q = q[1:]

			if curr[0] == dx && curr[1] == dy {
				return curr[2]
			}

			for _, p := range paths {
				nx := p[0] + curr[0]
				ny := p[1] + curr[1]

				if nx >= 0 && nx < R && ny >= 0 && ny < C && !visited[nx][ny] && forest[nx][ny] != 0 {
					visited[nx][ny] = true
					q = append(q, [3]int{nx, ny, curr[2] + 1})
				}
			}
		}
		return -1
	}

	count := 0
	start := Coord{x: 0, y: 0}
	for i := 0; i < len(trees); i++ {
		dist := bfs(start.x, start.y, trees[i].x, trees[i].y)
		if dist == -1 {
			return -1
		}
		start.x = trees[i].x
		start.y = trees[i].y
		count += dist
	}
	return count
}
```
# Runtime- Beats 100.00%

**Author:** rafatgofers
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/4864734/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/4864734/)

---


# Intuition
This function `minimumMoves` calculates the minimum number of moves needed to move a body of a 2D grid from one position to another. The body can be moved horizontally, vertically, or rotated 90 degrees clockwise or counterclockwise.

# Approach:
- The function uses a breadth-first search (BFS) approach to explore possible moves.
- It maintains a queue `q` to store the positions to be explored.
- It initializes a 2D array `vis` to keep track of visited positions to avoid revisiting.
- The `move` function is defined to check if a move is valid and enqueue the new position if it hasn't been visited.
- The function iterates through the queue, exploring possible moves until the target position is reached.

# Complexity:
- **Time Complexity:** The time complexity of this approach is O(n^2), where n is the size of the grid.
- **Space Complexity:** The space complexity is O(n^2) due to the queue and the visited array.

# Code
```
func minimumMoves(grid [][]int) int {
	n := len(grid)
	type pair struct{ a, b int }
	target := pair{n*n - 2, n*n - 1}
	q := []pair{pair{0, 1}}
	vis := make([][2]bool, n*n)
	vis[0][0] = true

	move := func(i1, j1, i2, j2 int) {
		if i1 >= 0 && i1 < n && j1 >= 0 && j1 < n && i2 >= 0 && i2 < n && j2 >= 0 && j2 < n {
			a, b := i1*n+j1, i2*n+j2
			status := 1
			if i1 == i2 {
				status = 0
			}
			if !vis[a][status] && grid[i1][j1] == 0 && grid[i2][j2] == 0 {
				q = append(q, pair{a, b})
				vis[a][status] = true
			}
		}
	}

	ans := 0
	for len(q) > 0 {
		for k := len(q); k > 0; k-- {
			p := q[0]
			q = q[1:]
			if p == target {
				return ans
			}
			a, b := p.a, p.b
			i1, j1 := a/n, a%n
			i2, j2 := b/n, b%n
			
			move(i1, j1+1, i2, j2+1)
			
			move(i1+1, j1, i2+1, j2)
			
			if i1 == i2 && i1+1 < n && grid[i1+1][j2] == 0 {
				move(i1, j1, i1+1, j1)
			}
		
			if j1 == j2 && j1+1 < n && grid[i2][j1+1] == 0 {
				move(i1, j1, i1, j1+1)
			}
		}
		ans++
	}
	return -1
}
```
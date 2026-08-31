# DFS and BFS solutions Python / use as `template code` for similar problems

**Author:** wxy0925
**Votes:** 4
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1646040/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1646040/)

---

DFS
```
class Solution(object):
    def pacificAtlantic(self, heights):
        """
        :type heights: List[List[int]]
        :rtype: List[List[int]]
        """
        # # check side case
        # if not heights:
        #     return
        
        
        rows, cols = len(heights), len(heights[0])
        dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        
        # like a worker hahaha
        def traverse(i, j, visited):
            if (i, j) in visited:
                return
            visited.add((i, j))
            # traverse nbrs
            for d in dirs:
                next_i, next_j = i + d[0], j + d[1]
                if 0 <= next_i < rows and 0 <= next_j < cols:
                    # question-specific checks:
                    if heights[next_i][next_j] >= heights[i][j]:
                        traverse(next_i, next_j, visited)
        
        pacific, atlantic = set(), set()
        for i in range(rows):
            traverse(i, 0, pacific)
            traverse(i, cols - 1, atlantic)
        for j in range(cols):
            traverse(0, j, pacific)
            traverse(rows - 1, j, atlantic)
            
        return [list(item) for item in pacific & atlantic]
```

BFS
```
class Solution:
    def pacificAtlantic(self, matrix):
        # check if the input is empty
        if not matrix or not matrix[0]:
            return []
        
        n_rows, n_cols = len(matrix), len(matrix[0])
        
        # queues for bfs
        pacific_queue = collections.deque()
        atlantic_queue = collections.deque()
        
        for i in range(n_rows):
            pacific_queue.append((i, 0))
            atlantic_queue.append((i, n_cols - 1))
        for j in range(n_cols):
            pacific_queue.append((0, j))
            atlantic_queue.append((n_rows - 1, j))
            
            
        # bfs
        def bfs(q):
            reachable = set()
            while q:
                r, c = q.popleft()
                reachable.add((r, c))
                for x, y in [(1, 0), (-1, 0), (0, -1), (0, +1)]:
                    new_r, new_c = r + x, c + y
                    
                    if new_r < 0 or new_r >= n_rows or new_c < 0 or new_c >= n_cols:
                        continue
                    if (new_r, new_c) in reachable:
                        continue
                    if matrix[new_r][new_c] < matrix[r][c]:
                        continue
                    q.append((new_r, new_c))
            return reachable
        
        
        pacific_reachable = bfs(pacific_queue)
        atlantic_reachable = bfs(atlantic_queue)
        
        return [list(item) for item in pacific_reachable & atlantic_reachable]
```

Golang
```
func pacificAtlantic(matrix [][]int) [][]int {
	if len(matrix) == 0 {
		return nil
	}
	n := len(matrix)
	m := len(matrix[0])
	if m == 0 {
		return nil
	}
	// mark cells that flow to Pacific
	var curr [][]int
	dx := []int{0, 0, -1, 1}
	dy := []int{-1, 1, 0, 0}
	pacific := make([][]bool, n)
	for i := range matrix {
		pacific[i] = make([]bool, m)
		pacific[i][0] = true
		curr = append(curr, []int{i, 0})
	}
	for j := range matrix[0] {
		pacific[0][j] = true
		curr = append(curr, []int{0, j})
	}
	for len(curr) != 0 {
		next := [][]int{}
		for _, c := range curr {
			for i := 0; i < 4; i++ {
				x := c[0] + dx[i]
				y := c[1] + dy[i]
				if x >= 0 && x < n && y >= 0 && y < m && !pacific[x][y] && matrix[x][y] >= matrix[c[0]][c[1]] {
					next = append(next, []int{x, y})
					pacific[x][y] = true
				}
			}
		}
		curr = next
	}
	//  mark cells that flow to Atlantic
	curr = [][]int{}
	atlantic := make([][]bool, n)
	for i := range matrix {
		atlantic[i] = make([]bool, m)
		atlantic[i][m-1] = true
		curr = append(curr, []int{i, m - 1})
	}
	for j := range matrix[0] {
		atlantic[n-1][j] = true
		curr = append(curr, []int{n - 1, j})
	}
	for len(curr) != 0 {
		next := [][]int{}
		for _, c := range curr {
			for i := 0; i < 4; i++ {
				x := c[0] + dx[i]
				y := c[1] + dy[i]
				if x >= 0 && x < n && y >= 0 && y < m && !atlantic[x][y] && matrix[x][y] >= matrix[c[0]][c[1]] {
					next = append(next, []int{x, y})
					atlantic[x][y] = true
				}
			}
		}
		curr = next
	}
	// find the list that flow to both oceans
	var res [][]int
	for i := range matrix {
		for j := range matrix[0] {
			if atlantic[i][j] && pacific[i][j] {
				res = append(res, []int{i, j})
			}
		}
	}
	return res
}

```
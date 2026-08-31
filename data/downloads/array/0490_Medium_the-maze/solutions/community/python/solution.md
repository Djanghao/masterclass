# Python DFS

**Author:** WangQiuc
**Votes:** 33
**Link:** [https://leetcode.com/problems/the-maze/solutions/269158/](https://leetcode.com/problems/the-maze/solutions/269158/)

---

It's a straight DFS problem.
The neighboring nodes here are not "adjacent" nodes but the closest nodes that are at the border or against a wall in horizontal & vertical directions. So in each direction, we just find that closest valid node (via while loop), check whether we visited it before, and then DFS this node.
Eventually, we just check whether we visit the destination before all reachable nodes are visited. 
```
def hasPath(maze, start, destination):
	m, n, seen = len(maze), len(maze[0]), set()
	def dfs(i, j):
		if [i, j] == destination: return True
		for dx, dy in ((0,-1),(0,1),(-1,0),(1,0)):
			x, y = i, j
			while 0 <= x+dx < m and 0 <= y+dy < n and not maze[x+dx][y+dy]:
				x, y = x+dx, y+dy
			if (x,y) not in seen: 
				seen.add((x,y))
				if dfs(x,y): return True
		return False
	return dfs(*start)
```
DFS complexity is O(|V|+|E|). In our maze, O(|V|) = O(|E|) = m * n. So time complexity is O(mn).
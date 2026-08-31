# [Python] Top Down DP

**Author:** rowe1227
**Votes:** 3
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/1023631/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/1023631/)

---

**Approach:**

1. For every space that is not a wall, find which spaces the cat and mouse can jump to from this space. (```cat_moves``` and ```mouse_moves```)

2. Find the starting locations of the cat, the mouse, and the food. (```cat```, ```mouse```, and ```food```)

3. Take an Alice and Bob style game approach to determine if there is a guaranteed path to victory for the mouse.  <br>
The exit conditions are:
**i.** if the mouse reaches the food return True
**ii.**  if the game runs out of turns or the cat reaches the food or the mouse return False<br>
If none of the exit conditions have been met:
**i.** and it is the cat's turn, try all possible cat moves, if any choice results in the mouse losing, return False
**ii.** and it is the mouse's turn, try all possible mouse moves, if any choice results in the mouse winning, return True

**Optimizations:**

1. The board is rather small (8 by 8 at most) so the outcome of any game that 
goes on for 1,000 moves can definitely be resolved in fewer moves.  By trial and
error 2&middot;R&middot;C is a satisfactory bound for the maximum number of turns.
*Note: since the cat moves on odd turns, it is important that this number is even.*

2. Caching the possible moves the cat and mouse can make from each position removes the
need to check if each move is valid (on the grid and not on a wall) within the helper function.

<br>

```python
def canMouseWin(self, grid: List[str], cj: int, mj: int) -> bool:

	def get_moves(m):
		"""Builds a map of locations cat/mouse can move to from any given (i,j)."""
		moves = collections.defaultdict(set)
		for i in range(R):
			for j in range(C):
				if grid[i][j] != '#':
					v = {(i,j)}
					for dy, dx in ((0, 1), (0, -1), (1, 0), (-1, 0)):
						for s in range(1, m+1):
							r, c = i + s*dy, j + s*dx
							if not (0 <= r < R and 0 <= c < C and grid[r][c] != '#'):
								break
							v.add((r,c))
					moves[(i,j)] = v
		return moves

	def get_locations():
		"""Returns the starting locations of the Mouse, Cat, and Food."""
		start = dict()
		for (i, j) in mouse_moves:
			if grid[i][j] in ('M','C','F'):
				start[grid[i][j]] = (i, j)
		return start['M'], start['C'], start['F']

	@functools.lru_cache(None)
	def helper(turn, cat, mouse):
		"""Returns True if mouse wins and False if cat wins."""
		# cat's turn
		if turn & 1:
			if (turn == 1) or {food, mouse} & cat_moves[cat]:
				return False
			return not any(not helper(turn-1, c, mouse) for c in cat_moves[cat])

		# mouse's turn
		if food in mouse_moves[mouse]:
			return True
		return any(helper(turn-1, cat, m) for m in mouse_moves[mouse])

	R, C = len(grid), len(grid[0])
	cat_moves = get_moves(cj)
	mouse_moves = get_moves(mj)
	mouse, cat, food = get_locations()

	return helper(2*R*C, cat, mouse)
```
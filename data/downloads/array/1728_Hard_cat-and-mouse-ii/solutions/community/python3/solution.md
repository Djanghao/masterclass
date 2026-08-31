# Python3 Clean & Commented Top-down DP with the early stopping trick

**Author:** GBLin5566
**Votes:** 54
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/1020616/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/1020616/)

---

The question is composed of sub-problems, which can be formatted as the dp problem.

The tricky part is that we don't need to do 1000 turns to determine the result.
Let's say the cat and the mouse decide to take only 1 step each time, how many turns it takes to search the whole grid?
Yes, m * n * 2 (mouse and cat, each takes m * n turns).
So we can early stop the search and return False (cat wins) when the turn exceeds m * n * 2.

~~Time Complexity: O((MN) ^ 3)~~
UPDATE2:
Because we iterate all jumps in each recursive function, the time complexity should be multiplied by (M + N).

**Time Complexity: O((MN) ^ 3 * (M + N))**
**Space Complexity: O((MN) ^ 3)**

Credits to @DBabichev.

UPDATE1:
We could further improve the constraint as well.
We calculate numbers of the available steps and make it the constraint of the turns.
This trick improves this code from 9372 ms	74.3 MB -> 5200 ms	57.5 MB.

```
class Solution:
    def canMouseWin(self, grid: List[str], catJump: int, mouseJump: int) -> bool:
        dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        m, n = len(grid), len(grid[0])
        mouse_pos = cat_pos = None
		available = 0 # available steps for mouse and cat
		# Search the start pos of mouse and cat
        for i in range(m):
            for j in range(n):
				if grid[i][j] != '#':
                    available += 1
                if grid[i][j] == 'M':
                    mouse_pos = (i, j)
                elif grid[i][j] == 'C':
                    cat_pos = (i, j)
        
        @functools.lru_cache(None)
        def dp(turn, mouse_pos, cat_pos):
            # if turn == m * n * 2:
			# We already search the whole grid (9372 ms 74.3 MB)
			if turn == available * 2:
				# We already search the whole touchable grid (5200 ms 57.5 MB)
                return False
            if turn % 2 == 0:
                # Mouse
                i, j = mouse_pos
                for di, dj in dirs:
                    for jump in range(mouseJump + 1):
						# Note that we want to do range(mouseJump + 1) instead of range(1, mouseJump + 1)
						# considering the case that we can stay at the same postion for next turn.
                        new_i, new_j = i + di * jump, j + dj * jump
                        if 0 <= new_i < m and 0 <= new_j < n and grid[new_i][new_j] != '#':
							# Valid pos
                            if dp(turn + 1, (new_i, new_j), cat_pos) or grid[new_i][new_j] == 'F':
                                return True
                        else:
							# Stop extending the jump since we cannot go further
                            break
                return False
            else:
                # Cat
                i, j = cat_pos
                for di, dj in dirs:
                    for jump in range(catJump + 1):
                        new_i, new_j = i + di * jump, j + dj * jump
                        if 0 <= new_i < m and 0 <= new_j < n and grid[new_i][new_j] != '#':
                            if not dp(turn + 1, mouse_pos, (new_i, new_j)) or (new_i, new_j) == mouse_pos or grid[new_i][new_j] == 'F':
							# This condition will also handle the case that the cat cannot jump through the mouse
                                return False
                        else:
                            break
                return True
				
        return dp(0, mouse_pos, cat_pos)
```
# Python DFS + Bitmask

**Author:** WangQiuc
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/1561375/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/1561375/)

---

The robot move towards one direction until it meets a border or obstacle. Then it makes a right turn.
Therefore, for each position `(i,j)`, a robot can have at most `4` different states which is the direction it's heading when it passed that position. So we can just use 4 bits to record that state in a visited map `V`. Just like the one we just to do a regular graph search. But this time, the value in `V` is not a single boolean bit but a 4-bit state.

So robot keeps moving in its current direction `dfs(new_i, new_j, d)`, or makes the right turn if it cannot move further `dfs(i, j, new_d)`.
If the direction `d` has already been visited in the position `(i,j)` or `d`th bit in `V[i][j]` has been set to 1, we stop the search.
Eventually we count all visited pisitions that `V[i][j]` is not `0`.
```
def numberOfCleanRooms(room)
	D = (0,1,0,-1,0)
	m, n = len(room), len(room[0])
	V = [[0] * n for _ in range(m)]

	def dfs(i, j, d):
		if V[i][j] >> d & 1:
			return
		V[i][j] |= 1 << d
		x, y = i+D[d], j+D[d+1]
		if 0 <= x < m and 0 <= y < n and not room[x][y]:
			return dfs(x, y, d)
		return dfs(i, j, (d+1) % 4)

	dfs(0, 0, 0)
	return sum(x != 0 for r in V for x in r)
```
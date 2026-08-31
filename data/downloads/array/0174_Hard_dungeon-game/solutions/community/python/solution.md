# [Python] Simple in-place DP solution, O(1) space

**Author:** arivard
**Votes:** 40
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/698961/](https://leetcode.com/problems/dungeon-game/solutions/698961/)

---

Traversing from bottom-right to top-left, we calculate how much hp is required to reach the princess from the current cell.

The first step is to calculate how much hp is required to save the princess upon reaching `dungeon[m-1][n-1]`:
`dungeon[i][j] = min(dungeon[i][j], 0) * -1 + 1`
For example:
If `dungeon[m-1][n-1] == -5`, then we need 6 hp.
If `dungeon[m-1][n-1] >= 0` then we only need 1 hp.

For every other cell we find the minimum hp required to reach the princess by going either down or right.
We subtract this minimum hp from the current cell's value to find how much hp would be needed to reach the princess from the current cell.
If this value is <=0, we change it to 1 because that means there is an abundance of hp in this cell and our minimum hp can never be <=0.

```
def calculateMinimumHP(self, dungeon):
	m, n = len(dungeon), len(dungeon[0])
	for i in range(m-1, -1, -1):
		for j in range(n-1, -1, -1):
			if i == m-1 and j == n-1:
				dungeon[i][j] = min(dungeon[i][j], 0) * -1 + 1
			elif i == m-1:
				dungeon[i][j] = max(dungeon[i][j+1] - dungeon[i][j], 1)
			elif j == n-1:
				dungeon[i][j] = max(dungeon[i+1][j] - dungeon[i][j], 1)
			else:
				dungeon[i][j] = max(min(dungeon[i][j+1], dungeon[i+1][j]) - dungeon[i][j], 1)
	return dungeon[0][0]
```

Inspired by [suryan0800's comment](https://leetcode.com/problems/dungeon-game/discuss/698271/Python-Short-DP-7-lines-O(mn)-top-down-explained/588576) and [DBabichev's great explanation](https://leetcode.com/problems/dungeon-game/discuss/698271/Python-Short-DP-7-lines-O(mn)-top-down-explained).
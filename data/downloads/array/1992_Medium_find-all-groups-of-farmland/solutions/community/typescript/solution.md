# 💯✅🔥JavaScript/TypeScript DFS solution

**Author:** zavacode
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5049366/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5049366/)

---

# Approach
Used DFS to traverse through different groups of farmlands and keep track of largest x-coordinate and y-coordinates(the bottom right)
Current `row` and `col` will be the smallest x-coordinate and y-coordinates(the top left)


# Complexity
- Time complexity: O(n*m)

- Space complexity: O(n*m)

# Code
```
function findFarmland(land: number[][]): number[][] {
    const rows = land.length
	const cols = land[0].length
	const farmland: number[][] = []

	function dfs(r: number, c: number, bottomRight: number[]) {
		if (r < 0 || r >= rows || c < 0 || c >= cols || land[r][c] === 0) {
			return
		}

		land[r][c] = 0

		bottomRight[0] = Math.max(bottomRight[0], r)
		bottomRight[1] = Math.max(bottomRight[1], c)
        
		dfs(r + 1, c, bottomRight)
		dfs(r, c + 1, bottomRight)
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (land[r][c] === 1) {
				const bottomRight = [r, c]
				dfs(r, c, bottomRight)

				farmland.push([r, c, bottomRight[0], bottomRight[1]])
			}
		}
	}

	return farmland
};
```
# JavaScript Solution w/ Comments

**Author:** qkrrbtjd90
**Votes:** 2
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/1418437/](https://leetcode.com/problems/coloring-a-border/solutions/1418437/)

---

```
/**
 * Color the cells which belong to same connected component of the starting cell
 * that doesn't have 4 valid adjacent cells with the same value as that of grid[row][col].
 * *Time: O(N x M)
 * *Space: O(N x M)
 */
// Runtime: 96 ms, faster than 66.67% of JavaScript online submissions for Coloring A Border.
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions for Coloring A Border.
const colorBorder1 = function (grid, row, col, color) {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const visited = new Set();
	const pixel = grid[row][col];

	const traverse = (x, y) => {
		const key = `${x}, ${y}`;

		if (visited.has(key)) return 1;

		if (x < 0 || x === grid.length) return 0;
		if (y < 0 || y === grid[0].length) return 0;
		if (grid[x][y] !== pixel) return 0;

		visited.add(key);

		let invalid = 1;
		directions.forEach(([dx, dy]) => {
			invalid *= traverse(x + dx, y + dy);
		});

		// if all 4 adjacents are the same, don't change
		// if any of the adjacent are different, change color
		if (invalid) return 1;
		else grid[x][y] = color;

		return 1;
	};

	traverse(row, col);
	return grid;
};

/**
 * *Time: O(N x M)
 * *Space: O(N x M)
 */
// Runtime: 73 ms, faster than 100.00% of JavaScript online submissions for Coloring A Border.
// Memory Usage: 46.5 MB, less than 45.83% of JavaScript online submissions for Coloring A Border.
const colorBorder = (grid, row, col, color) => {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const pixel = grid[row][col];

	// find borders and mark visited: -pixel
	const traverse = (x, y) => {
		if (x < 0 || x >= grid.length) return;
		if (y < 0 || y >= grid[0].length) return;
		if (grid[x][y] !== pixel) return;

		grid[x][y] = -pixel; // mark visited

		directions.forEach(([dx, dy]) => {
			traverse(x + dx, y + dy);
		});

		// check if all adjacents have same color
		const invalid = directions.every(([dx, dy]) => {
			// check if valid x AND y boundary
			const validX = x > 0 && x < grid.length - 1;
			const validY = y > 0 && y < grid[0].length - 1;

			if (validX && validY) {
				const adjacent = grid[x + dx][y + dy];

				return pixel === Math.abs(adjacent);
			}
		});

		// revert color if all adjacents are same color
		if (invalid) grid[x][y] = pixel;
	};

	traverse(row, col);

	// find marked borders and overwrite with new color
	for (let r = 0; r < grid.length; ++r)
		for (let c = 0; c < grid[r].length; ++c) {
			const cv = grid[r][c];

			if (cv < 0) grid[r][c] = color;
		}

	return grid;
};
```
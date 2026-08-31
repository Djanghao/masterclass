# Depth-First Search w/ Groups, Explanation + Comments (Typescript)

**Author:** jbernier
**Votes:** 2
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/5061276/](https://leetcode.com/problems/making-a-large-island/solutions/5061276/)

---

# Intuition

We can solve this with depth-first search, but how do we avoid recomputing the same cells over and over again?

The solution is to assign unique group IDs to each island on the initial grid, and calculate their respective areas.

Then we can iterate through the grid looking for all 0s, and find the area that would result from flipping it to 1 by retrieving all the surrounding groupIDs and summing their areas + 1 (for the flipped cell).

We can modify the `grid` input directly by replacing 1s with their groupIDs to make finding the groupID of a cell easier.

# Approach

First we'll turn all islands of 1s into distinct groups, assigning each island a `groupId` starting from `2, 3, 4, ...` (to distinguish them from the default `1` and `0`). We'll update the 1s in `grid` with their respective groupIds.

```
[1, 1, 0]
[1, 0, 0]
[0, 1, 1]
```

Will turn into:

```
[2, 2, 0]
[2, 0, 0]
[0, 3, 3]
```

We create a hashmap `groupMap = new Map<number, number>()` mapping `groupIndex` to its area.

`groupMap = { 2: 3, 3: 2}`

Now we must find `maxArea`

`maxArea` must be at least as large as the largest group in the case where the grid is initialized to all 1s.

We'll find all 0s in the grid, and for each `grid[row][col] === 0`, we'll check its immediate neighbors. For every neighbor with a `groupId`, we'll sum up the areas of each group (`groupMap.get(groupId) = area of group`).

The area from flipping `row, col` from 0 to 1 then equals this sum + 1 (since flipping the 0 to 1 adds `1` to the area).

# Complexity

`N` is the length and width of the grid.

- Time complexity: $$O(N^2)$$

- Space complexity: $$O(N^2)$$. This is due to the depth-first search traversal over the grid.

# Code
```
function largestIsland(grid: number[][]): number {
  const n = grid.length;

  // Given row and col, returns all neighbors
  const getNeighbors = (row: number, col: number): [number, number][] => {
    const arr : [number, number][] = [];
    if (row > 0) arr.push([row - 1, col]);
    if (row < n - 1) arr.push([row + 1, col]);
    if (col > 0) arr.push([row, col - 1]);
    if (col < n - 1) arr.push([row, col + 1]);
    return arr;
  }

  // Sets grid[i][j] and all surrounding 1s to groupIndex,
  // and returns area of this island
  const dfs = (i: number, j: number, groupIndex: number) => {
    let maxArea = 1;
    grid[i][j] = groupIndex;
    const neighbors = getNeighbors(i, j);
    for (const [row, col] of neighbors) {
      if (grid[row][col] === 1) {
        grid[row][col] = groupIndex;
        maxArea += dfs(row, col, groupIndex);
      }
    }
    return maxArea;
  }

  // Maps group index to area (groupIndex, groupArea)
  const groupMap = new Map<number, number>();
  // Group index. Start at 2 because 1 is taken
  let groupIndex = 2;

  // Find all groups and their areas, populating (group, area) map
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        groupMap.set(groupIndex, dfs(i, j, groupIndex));
        groupIndex++;
      } 
    }
  }

  // Max area must be at least as large as the largest group
  // (If grid has no 0s, then maxArea = area of largest group)
  let maxArea = 0;
  for (const [groupIndex, area] of groupMap) {
    maxArea = Math.max(maxArea, area);
  }

  // Find all 0s and the areas that would result from turning them to 1s
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        // Keep track of groupIndexes encountered here
        const groupIndexes = new Set<number>();
        const neighbors = getNeighbors(i, j);
        for (const [row, col] of neighbors) {
          if (grid[row][col] > 1) {
            groupIndexes.add(grid[row][col])
          }
        }
        let localMaxArea = 1; // init to 1 since flipping 0 to 1
        // Sum all areas of the groupIndexes surrounding i, j
        for (const groupIndex of groupIndexes) {
          localMaxArea += groupMap.get(groupIndex)!;
        }
        maxArea = Math.max(maxArea, localMaxArea)
      }
    }
  }

  return maxArea;
};
```
# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/contain-virus/solutions/4572650/](https://leetcode.com/problems/contain-virus/solutions/4572650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Region {
  // as need to de-dupe the elements.
  // If N rows and M cols.
  // Total elements = NxM.
  // Given row and col calculate X as: X = row * M + col.
  // Given X calculate row and col as: row = X / M and col = X % M.

  // Infected nodes represented by 1.
  infected = new Set<number>();

  // Uninfected neighbors represented by 0 are the ones this region can infect if not contained.
  uninfectedNeighbors = new Set<number>();

  // Number of walls required to contain all the infected nodes (1s) in this region.
  // Note that two infected 1s can infect the same 0, so in this case we need two walls to save one 0 from two 1s.
  wallsRequired = 0;
}

function containVirus(grid: number[][]): number {
  if (grid == null || grid.length == 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  let result = 0;

  while (true) {
    const regions: Region[] = [];

    // Find all the regions using DFS (or can also use BFS).
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] == 1 && !visited[row][col]) {
          const region = new Region();
          dfs(grid, row, col, visited, region);

          // Add region to list of regions only if it can cause infection.
          if (region.uninfectedNeighbors.size > 0) {
            regions.push(region);
          }
        }
      }
    }

    // No more regions that can cause further infection, we are done.
    if (regions.length == 0) {
      break;
    }

    // Sort the regions. Region which can infected most neighbors first.
    regions.sort((o1, o2) => {
      return o2.uninfectedNeighbors.size - o1.uninfectedNeighbors.size;
    });

    // Build wall around region which can infect most neighbors.
    const regionThatCauseMostInfection = regions.shift();
    result += regionThatCauseMostInfection.wallsRequired;

    for (const neighbor of regionThatCauseMostInfection.infected) {
      const row = Math.floor(neighbor / cols);
      const col = neighbor % cols;

      // Choosing 2 as to denote that this cell is now contained
      // and will not cause any more infection.
      grid[row][col] = 2;
    }

    // For remaining regions, expand (neighbors are now infected).
    for (const region of regions) {
      for (const neighbor of region.uninfectedNeighbors) {
        const row = Math.floor(neighbor / cols);
        const col = neighbor % cols;
        grid[row][col] = 1;
      }
    }
  }

  return result;
}


function dfs(grid: number[][], row: number, col: number, visited: boolean[][], region: Region) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == 2) {
    return;
  }

  if (grid[row][col] == 1) {
    // 1 is already infected.
    // Add to the list, since we are using Set it will be deduped if added multiple times.
    region.infected.add(row * cols + col);

    // If already visited, return as we do not want to go into infinite recursion.
    if (visited[row][col]) {
      return;
    }
  }

  visited[row][col] = true;

  if (grid[row][col] == 0) {
    // If 0 it is uninfected neighbor, we need a wall.
    // Remeber we can reach this 0 multiple times from different infected neighbors i.e. 1s,
    // and this will account for numbers of walls need to be built around this 0.
    region.wallsRequired++;

    // Add to uninfected list, it will be de-duped as we use Set.
    region.uninfectedNeighbors.add(row * cols + col);
    return;
  }

  // Visit neighbors.
  dfs(grid, row + 1, col, visited, region);
  dfs(grid, row - 1, col, visited, region);
  dfs(grid, row, col + 1, visited, region);
  dfs(grid, row, col - 1, visited, region);
}
```
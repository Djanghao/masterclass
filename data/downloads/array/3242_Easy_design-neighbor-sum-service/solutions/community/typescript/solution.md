# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5811627/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5811627/)

---

We make a class with two methods and initialize a grid and valueToPosition Map to save each value with their position in the grid and inside the grid we loop through the directions

first, we retrieve the position of the value in the grid using the map. 

We then calculate the sum of the values that are directly above, below, left, and right of the current position. 

We check if each neighbor is within the bounds of the grid before adding its value to the sum.

Similarly, we calculate the sum of diagonal neighbors, which are at the four diagonal positions. Again, we ensure these positions are valid before summing.

# Complexity
- Time complexity: 170ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 60.35mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class NeighborSum {
  grid: number[][]
  valueToPosition: Map<number, [number, number]>
  
  constructor(grid: number[][]) {
      this.grid = grid
      this.valueToPosition = new Map()
    
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          this.valueToPosition.set(grid[i][j], [i, j])
        }
      }
  }

  adjacentSum(value: number): number {
    let pos = this.valueToPosition.get(value)
    if (!pos) {
      throw new Error(`Value ${value} not found in the grid.`);
    }
    let [i, j] = pos
    const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    let sum = 0
    
    for (let [di, dj] of direction) {
      let newI = i + di
      let newJ = j + dj
      
      if (newI >= 0 && newI < this.grid.length && newJ >= 0 && newJ < this.grid.length) {
        sum += this.grid[newI][newJ]
      }
    }
    return sum
  }

  diagonalSum(value: number): number {
      let pos = this.valueToPosition.get(value)

      if (!pos) {
        throw new Error(`Value ${value} not found in the grid.`);
      }

      let [i, j] = pos
      
      const direction = [[-1, -1], [1, 1], [-1, 1], [1, -1]]
      let sum = 0
      
      for (let [di, dj] of direction) {
        let newI = i + di
        let newJ = j + dj
        
        if (newI >= 0 && newI < this.grid.length && newJ >= 0 && newJ < this.grid.length) {
          sum += this.grid[newI][newJ]
        }
      }
    return sum
  }
}
```
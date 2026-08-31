# [Python3] DRY and straightforward solutions

**Author:** yourick
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5662110/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5662110/)

---

#### Straightforward solutions:
###### Because we have distinct elements in the range `[0, n2 - 1]` just map each value to their position (use array instead dictionary, it's faster).
```python3 []
class NeighborSum:

    def __init__(self, grid: List[List[int]]):
        self.grid = grid
        self.size = len(grid)
        self.positions = [None] * self.size ** 2
        
        for i, j in product(range(self.size), range(self.size)):
            self.positions[grid[i][j]] = i, j

    def adjacentSum(self, value: int) -> int:
        i, j = self.positions[value]
        sm = 0
        sm += self.grid[i-1][j] if i >= 1 else 0 # top
        sm += self.grid[i+1][j] if i+1 < self.size else 0 # bottom
        sm += self.grid[i][j-1] if j >= 1 else 0 # left
        sm += self.grid[i][j+1] if j+1 < self.size else 0 # right

        return sm

    
    def diagonalSum(self, value: int) -> int:
        i, j = self.positions[value]
        sm = 0
        sm += self.grid[i-1][j-1] if i >= 1 and j >= 1 else 0 # top left
        sm += self.grid[i+1][j+1] if i+1 < self.size and j+1 < self.size else 0 # bottom right
        sm += self.grid[i-1][j+1] if i >= 1 and j+1 < self.size else 0 # top right
        sm += self.grid[i+1][j-1] if i+1 < self.size and j >= 1 else 0 # bottome left

        return sm
```
#### DRY solutions:
###### You can notice that both methods `adjacentSum` and `diagonalSum` are almost the same. Difference is only in coordinates  what we need to sum up. Let\u044Ds move the similar part of code into the new method `calculateSum` and will pass needed coordinates shift via parameters for adjacent and diagonal methods. This code is shorter but slower than the code above because of additional checks of every adjacent/diagonal coordinates existence.
```python3 []
class NeighborSum:

    def __init__(self, grid: List[List[int]]):
        self.grid = grid
        self.size = len(grid)
        self.positions = [None] * self.size ** 2
        self.adjacent = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        self.diagonal = [(-1, -1), (1, 1), (-1, 1), (1, -1)]
        
        for i, j in product(range(self.size), range(self.size)):
            self.positions[grid[i][j]] = i, j

    def adjacentSum(self, value: int) -> int:
        return self.calculateSum(value, self.adjacent)

    def diagonalSum(self, value: int) -> int:
        return self.calculateSum(value, self.diagonal)
        
    def calculateSum(self, value, neighborDiff):
        i, j = self.positions[value]
        sm = 0
        for di, dj in neighborDiff:
            ii, jj = i + di, j + dj
            if 0 <= ii < self.size and 0 <= jj < self.size:
                sm += self.grid[ii][jj]
        return sm
```
![Screenshot 2024-08-19 at 22.16.20.png](./images/0.png)

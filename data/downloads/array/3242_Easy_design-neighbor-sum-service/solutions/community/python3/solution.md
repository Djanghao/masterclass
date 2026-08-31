# ✅Easy Solution

**Author:** Durjoybarua5327
**Votes:** 12
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583276/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583276/)

---

**Python solution:**
```

class neighborSum:

    def __init__(self, grid: List[List[int]]):
        self.grid=grid
        self.l=len(grid)
        self.position = {grid[i][j]: (i, j) for i in range(self.l)  for j in range(self.l)}

    def adjacentSum(self, value: int) -> int:
        i, j = self.position[value]
        adjacent = [
            (i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)
        ]
        sum = 0
        for a, b in adjacent:
            if 0 <= a < self.l and 0 <= b < self.l:
                sum += self.grid[a][b]
        return sum

    def diagonalSum(self, value: int) -> int:
        if value not in self.position:
            return 0
        i, j = self.position[value]
        diagonal= [
            (i - 1, j - 1), (i - 1, j + 1), (i + 1, j - 1), (i + 1, j + 1)
        ]
        sum = 0
        for x, y in diagonal:
            if 0 <= x < self.l and 0 <= y < self.l:
                sum += self.grid[x][y]
        return sum


# Your neighborSum object will be instantiated and called as such:
# obj = neighborSum(grid)
# param_1 = obj.adjacentSum(value)
# param_2 = obj.diagonalSum(value)
```


**C++ solution:**

```

class neighborSum {
private:
    vector<vector<int>> grid;
    int l;
    unordered_map<int, pair<int, int>> position;

public:
    neighborSum(const vector<vector<int>>& grid) : grid(grid), l(grid.size()) {
        for (int i = 0; i < l; ++i) {
            for (int j = 0; j < l; ++j) {
                position[grid[i][j]] = {i, j};
            }
        }
    }

    int adjacentSum(int value) {
        if (position.find(value) == position.end()) {
            return 0;
        }
        auto [i, j] = position[value];
        int sum = 0;
        vector<pair<int, int>> adjacent = {
            {i - 1, j}, {i + 1, j}, {i, j - 1}, {i, j + 1}
        };
        for (const auto& [a, b] : adjacent) {
            if (0 <= a && a < l && 0 <= b && b < l) {
                sum += grid[a][b];
            }
        }
        return sum;
    }

    int diagonalSum(int value) {
        if (position.find(value) == position.end()) {
            return 0;
        }
        auto [i, j] = position[value];
        int sum = 0;
        vector<pair<int, int>> diagonal = {
            {i - 1, j - 1}, {i - 1, j + 1}, {i + 1, j - 1}, {i + 1, j + 1}
        };
        for (const auto& [x, y] : diagonal) {
            if (0 <= x && x < l && 0 <= y && y < l) {
                sum += grid[x][y];
            }
        }
        return sum;
    }
};
```
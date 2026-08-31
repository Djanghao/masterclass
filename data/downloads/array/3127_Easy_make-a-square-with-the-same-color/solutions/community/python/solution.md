# Easy solution - 27/04/2024 contest

**Author:** MangeurDeSushi
**Votes:** 12
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5080132/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5080132/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We just check for the 4 top left square if there is at least 3 square with the same color under, on the right, and under on the right, if that's the case, we can just modify one of this square to have 4 squares with the same color.
don't hesitate to upvote if you like the solution

```python3 []
class Solution:
    def canMakeSquare(self, grid: List[List[str]]) -> bool:
        def change(x, y):
            colors = [grid[x][y], grid[x][y+1], grid[x+1][y], grid[x+1][y+1]]
            count = {'B': 0, 'W': 0}
            for c in colors:
                count[c] += 1
            return count['B'] >= 3 or count['W'] >= 3

        for i in range(2):
            for j in range(2):
                if change(i, j):
                    return True
        return False
```
``` cpp []
class Solution {
public:
    bool canMakeSquare(vector<vector<char>>& grid) {
        return change(grid, 0, 0) || change(grid, 0, 1) 
        || change(grid, 1, 0) || change(grid, 1, 1);
    }

private:
    bool change(vector<vector<char>>& grid, int x, int y) {
        char colors[4] = {grid[x][y], grid[x][y + 1], grid[x + 1][y], grid[x + 1][y + 1]};
        int countB = 0;
        int countW = 0;
        for (char c : colors) {
            if (c == 'B')
                countB++;
            else
                countW++;
        }
        return countB >= 3 || countW >= 3;
    }
};
```
```java []
class Solution {
    public boolean canMakeSquare(char[][] grid) {
        return change(grid, 0, 0) || change(grid, 0, 1) 
        || change(grid, 1, 0) || change(grid, 1, 1);
    }

    private boolean change(char[][] grid, int x, int y) {
        char[] colors = {grid[x][y], grid[x][y + 1], grid[x + 1][y], grid[x + 1][y + 1]};
        int countB = 0;
        int countW = 0;
        for (char c : colors) {
            if (c == 'B')
                countB++;
            else
                countW++;
        }
        return countB >= 3 || countW >= 3;
    }
}
```


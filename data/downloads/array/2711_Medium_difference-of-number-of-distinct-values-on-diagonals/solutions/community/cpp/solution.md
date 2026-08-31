# Easy sol with explanation

**Author:** imanishkumar7545
**Votes:** 13
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3570396/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3570396/)

---

# Intuition


To achieve this, the code defines two functions: findtop and findbottom.

1. findtop function counts the distinct values in the top-left diagonal of a cell by traversing upward and leftward from the cell, keeping track of the encountered values.

2. findbottom function counts the distinct values in the bottom-right diagonal of a cell by traversing downward and rightward from the cell, keeping track of the encountered values.

Assign this difference as the value for the corresponding cell in the answer grid.
In the end, you need to return the answer grid with these calculated values.
# Code
```
class Solution {
public:
    int numRows, numCols;

    int countDistinctTopLeft(int row, int col, vector<vector<int>>& grid) {
        set<int> distinctValues;
        row--; col--;
        while (row >= 0 && col >= 0) {
            distinctValues.insert(grid[row][col]);
            row--; col--;
        }
        return distinctValues.size();
    }

    int countDistinctBottomRight(int row, int col, vector<vector<int>>& grid) {
        set<int> distinctValues;
        row++; col++;
        while (row < numRows && col < numCols) {
            distinctValues.insert(grid[row][col]);
            row++; col++;
        }
        return distinctValues.size();
    }

    vector<vector<int>> differenceOfDistinctValues(vector<vector<int>>& grid) {
        numRows = grid.size();
        numCols = grid[0].size();
        vector<vector<int>> result(numRows, vector<int>(numCols, 0));

        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                int distinctTopLeft = countDistinctTopLeft(row, col, grid);
                int distinctBottomRight = countDistinctBottomRight(row, col, grid);
                result[row][col] = abs(distinctTopLeft - distinctBottomRight);
            }
        }

        return result;
    }
};

```
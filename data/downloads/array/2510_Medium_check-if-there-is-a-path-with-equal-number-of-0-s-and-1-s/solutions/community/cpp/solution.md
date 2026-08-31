# C++ Dynamic programming with explanation, simple code

**Author:** user7836f
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3583606/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3583606/)

---

# Intuition
If there are *N* ways to reach tile *X*, than there is a way with the smollest amount of "1" and the way with the biggest amount of "1".
If the mollest amount is *A* and the biggest is *B*, than for each value *S* in the range *[A, B]*,  there is a way to the tile *X*, such that the number of "1" on this way is equal to *S*.
In other words, if the way with the smollest possible number of "1", contains 3 of them, and the the way with the biggest possible number of "1" contains 6, than there are ways with 3, 4, 5 and 6 ones.

# Approach
Let's iterate through grid and remember the minimum and the maximum number of 1-s we've seen for each tile.
We should have the equal number of 0 and 1 in the path, so this numbe should be equal to *(number of rows + number of columns) / 2*
if for the last tile, the number of 1-s (*expected*) is between minimum and maximum numbers of 1-s, than there is a path to the last tile, which contains exactly *expected* number of 1-s.

# Complexity
- Time complexity:
O(n * m), n - number of rows, m - number of cols

- Space complexity:
O(m), m - number of columns

# Code
```
class Solution {
public:
    static const int MIN = 0;
    static const int MAX = 1;

    bool isThereAPath(vector<vector<int>>& grid) {
        const int rows = grid.size();
        const int cols = grid[0].size();

        const int expected = (rows + cols) / 2;
        if (expected * 2 == rows + cols) {
            return false;
        } 

        std::vector<std::vector<int>> memo(cols + 1, std::vector<int>(2));

        for (int row = 1; row <= rows; ++row) {
            for (int col = 1; col <= cols; ++col) {
                memo[col][MIN] = std::min(memo[col][MIN], memo[col - 1][MIN]);
                memo[col][MAX] = std::max(memo[col][MAX], memo[col - 1][MAX]);

                if (grid[row - 1][col - 1] == 1) {
                    ++memo[col][MIN];
                    ++memo[col][MAX];
                }
            }
        }

        return memo[cols][MIN] <= expected && expected <= memo[cols][MAX];
    }
};
```
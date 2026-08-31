# Easy-understanding concise C++ O(mn) solution

**Author:** xero10
**Votes:** 36
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/83385/](https://leetcode.com/problems/bomb-enemy/solutions/83385/)

---

Borrow the idea from [Product of Array Except Self][1]. 

Create a 2D array `count`, where `count[i][j]` indicates how many enemies can be bombed if placing a bomb here. For each row/column, use `head` to keep track of how many enemies can be bombed from the beginning to current position, use `tail` to record how many enemies can be bombed from the end to current position. Then update `count[i][j]`.

For `head`, If **grid[i][j] == \u2018W\u2019**, set it to **0**; else if **grid[i][j] == \u2018E\u2019**, **add 1** to it. Same for `tail`.

We can combine the updating of `head` and `tail` into one loop so that each row/column will only be traversed once.


----------

    class Solution {
    public:
        int maxKilledEnemies(vector<vector<char>>& grid) {
            int i, j, row = grid.size(), col, result, head, tail;
            if(row == 0 || (col = grid[0].size()) == 0)
                return 0;
            vector<vector<int> > count(row, vector<int>(col, 0));
            for(i = 0; i < row; i++) {
                for(head = tail = j = 0; j < col; j++) {
                    count[i][j] = grid[i][j] != '0' ? 0 : (count[i][j] + head);
                    count[i][col - 1 - j] = grid[i][col - 1 - j] != '0' ? 0 : (count[i][col - 1 - j] + tail);
                    head = grid[i][j] == 'W' ? 0 : (head + (grid[i][j] == 'E' ? 1 : 0));
                    tail = grid[i][col - 1 - j] == 'W' ? 0 : (tail + (grid[i][col - 1 - j] == 'E' ? 1 : 0));
                }
            }
            for(j = 0; j < col; j++) {
                for(head = tail = i = 0; i < row; i++) {
                    count[i][j] = grid[i][j] != '0' ? 0 : (count[i][j] + head);
                    count[row - 1 - i][j] = grid[row - 1 - i][j] != '0' ? 0 : (count[row - 1 - i][j] + tail);
                    head = grid[i][j] == 'W' ? 0 : (head + (grid[i][j] == 'E' ? 1 : 0));
                    tail = grid[row - 1 - i][j] == 'W' ? 0 : (tail + (grid[row - 1 - i][j] == 'E' ? 1 : 0));
                }
            }
            for(i = result = 0; i < row; i++) {
                for(j = 0; j < col; j++) {
                    result = max(result, count[i][j]);
                }
            }
            return result;
        }
    };


  [1]: https://leetcode.com/problems/product-of-array-except-self/
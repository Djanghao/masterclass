# C++ Fastest O(M^2N^2) || BFS + BIT Masking || With Complexity Analysis and Explanation

**Author:** Peak_2250_MID_in_King-of-Glory
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/2070685/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/2070685/)

---

Here we use bit masking to represent the status of the matrix.
EX:
Matrix
10
01
will be represented as 01010.  
(The last 0 is only padding, and we use 1 to represent 0 in the grid, and 0 to represent 1 in the grid)
So our target is 11110 (The last is only padding)

Then I store row change and col change for each row and col.
Row_change[0] = 11000
Row_change[1] = 00110
Col_change[0] = 10100
Col_change[1] = 01010

Prepare this row_change and col_change takes O(MN + MN) = O(MN) time according to the loop

Then doing BFS, for each state, we just need to do two "|" operation with the pre-calculated row_change and col_change to get next state.
Since I used visited to record possible state, we will traverse at most O(MN) state, and for each state, we will change the state of O(MN) combination of any 1 row and any 1 column.

Total Complexity: O(MN + MN * MN) = O(M^2N^2)

Upvote if you like my solution, I will always post the "most" time-efficient solutions.
```
    int removeOnes(vector<vector<int>>& grid) {
        int cur_mapping = 0;
        int m = grid.size(), n = grid[0].size();
        int cur = m * n;
        int target = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                cur_mapping |= (grid[i][j] ^ 1) << cur;
                target |= 1 << cur;
                --cur;
            }
        }
        queue<int> q;
        q.push(cur_mapping);
        unordered_set<int> visited;
        visited.insert(cur_mapping);
        
        vector<int> row_change(m, 0);
        vector<int> col_change(n, 0);
        for (int i = 0; i < m; ++i) {
            cur = m * n - i * n;
            cur_mapping = 0;
            for (int j = 0; j < n; ++j) {
                cur_mapping |= 1 << cur;
                --cur;
            }
            row_change[i] = cur_mapping;
        }
        for (int i = 0; i < n; ++i) {
            cur_mapping = 0;
            cur = m * n - i;
            for (int j = 0; j < m; ++j) {
                cur_mapping |= 1 << cur;
                cur -= n;
            }
            col_change[i] = cur_mapping;
        }
        int step = 0;
        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                int tmp = q.front();
                q.pop();
                if (tmp == target) return step;
                for (int r = 0; r < m; ++r) {
                    for (int c = 0; c < n; ++c) {
                        if (grid[r][c] != 1) continue;
                        int next = tmp;
                        next |= row_change[r];
                        next |= col_change[c];
                        if (visited.count(next) == 0) {
                            visited.insert(next);
                            q.push(next);
                        }
                    }
                }
            }
            ++step;
        }
        return -1;
    }
```
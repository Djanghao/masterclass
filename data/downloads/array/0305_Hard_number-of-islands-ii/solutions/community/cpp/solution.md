# C++ union-find solution with Path Compression

**Author:** lchen77
**Votes:** 24
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/75485/](https://leetcode.com/problems/number-of-islands-ii/solutions/75485/)

---

This is a C++ implementation based @yavinci 's solution, which implemented using Java. For more detailed Explanations, please see [https://leetcode.com/discuss/69572/easiest-java-solution-with-explanations][1] 


    vector<int> numIslands2(int m, int n, vector<pair<int, int>>& positions) {
        vector<int> res;
        roots = vector<int>(m * n, -1);
        vector<pair<int, int>> dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        int island = 0;
        for (auto pos : positions) {
            int x = pos.first, y = pos.second, idx_p = x * n + y;
            roots[idx_p] = idx_p;
            ++island;
            for (auto dir : dirs) {
                int row = x + dir.first, col = y + dir.second, idx_new = row * n + col;
                if (row >= 0 && row < m && col >= 0 && col < n && roots[idx_new] != -1) {
                    int rootNew = findRoot(idx_new), rootPos = findRoot(idx_p);
                    if (rootPos != rootNew) {
                        roots[rootPos] = rootNew;
                        --island;
                    }
                }
            }
            res.push_back(island);
        }
        return res;
    }

    private:
    vector<int> roots;
    int findRoot(int idx) {
        while(idx != roots[idx]) {
            roots[idx] = roots[roots[idx]]; 
            idx = roots[idx];
        }
        return idx;
    }


  [1]: https://leetcode.com/discuss/69572/easiest-java-solution-with-explanations
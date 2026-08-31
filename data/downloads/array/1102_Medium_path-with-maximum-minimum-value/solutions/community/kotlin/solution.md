# C++: O(m*n*logmn) time and O(m*n + logmn) space with PQ

**Author:** kotlinvim
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/1067065/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/1067065/)

---

````
   int maximumMinimumPath(vector<vector<int>>& A) {
        if (A.empty() || A[0].empty()) return 0;

        const int m = A.size(), n = A[0].size();
        const vector<int> dx = {1, -1, 0, 0};
        const vector<int> dy = {0, 0, 1, -1};

        priority_queue<tuple<int, int, int>> maxHeap;
        vector<vector<bool>> seen(m, vector<bool>(n, false));
        maxHeap.push({A[0][0], 0, 0});
        seen[0][0] = true;
        
        int minVal = INT_MAX;
        while (!maxHeap.empty()) {
            auto [v, x, y] = maxHeap.top(); maxHeap.pop();
            minVal = min(minVal, v);
            if (x == m - 1 && y == n - 1) return minVal;
            for (int k = 0; k < 4; k++) {
                int i = x + dx[k];
                int j = y + dy[k];
                if (i < 0 || i >= m || j < 0 || j >= n || seen[i][j]) continue;
                maxHeap.push({A[i][j], i, j});
                seen[i][j] = true;
            }
        }
        return 0;
    }
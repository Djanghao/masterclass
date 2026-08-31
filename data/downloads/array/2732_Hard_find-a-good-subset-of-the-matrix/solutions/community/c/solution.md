# [C++/Java] Only Check the Subsets with Size 1 or 2 w/ Explanation

**Author:** Xiangcan
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622292/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622292/)

---

For `n >= 4`, `n choose 2` is larger than `5`.
Hence, if we choose a subset A with size >= `4`, we can always choose a subset B with size equal to `2`.
For example, for a subset size of 4, we have 6 choices: `(1,2) (1,3),(1,4) (2,3) (2,4) (3,4)` . 
```
1 1 1 0 0 0
1 0 0 1 1 0
0 1 0 1 0 1
0 0 1 0 1 1
```
However, `n <= 5`. We will always have at least one choice left to choose 2 rows.

Then we only need to check subset with size 1 or 2.

C++:
```
class Solution {
public:
    vector<int> goodSubsetofBinaryMatrix(vector<vector<int>>& grid) {
        vector<int> res;
        int m = grid.size(), n = grid[0].size();
        for (int i = 0; i < m; i++) {
            bool all_zero = true;
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 0) {
                    all_zero = false;
                    break;
                }
            }
            if (all_zero) {
                res.push_back(i);
                return res;
            }
        }
        for (int i = 0; i < m; i++) {
            for (int ii = i + 1; ii < m; ii++) {
                bool all_zero = true;
                for (int j = 0; j < n; j++) {
                    if ((grid[i][j] & grid[ii][j]) > 0) {
                        all_zero = false;
                        break;
                    }
                }
                if (all_zero) {
                    res.push_back(i);
                    res.push_back(ii);
                    return res;
                }
            }
        }
        return res;
    }
};
```

Java:
```
class Solution {
    public List<Integer> goodSubsetofBinaryMatrix(int[][] grid) {
        List<Integer> res = new ArrayList<>();
        int m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; i++) {
            boolean allZero = true;
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 0) {
                    allZero = false;
                    break;
                }
            }
            if (allZero) {
                res.add(i);
                return res;
            }
        }
        
        for (int i = 0; i < m; i++) {
            for (int ii = i + 1; ii < m; ii++) {
                boolean allZero = true;
                for (int j = 0; j < n; j++) {
                    if ((grid[i][j] & grid[ii][j]) > 0) {
                        allZero = false;
                        break;
                    }
                }
                if (allZero) {
                    res.add(i);
                    res.add(ii);
                    return res;
                }
            }
        }
        return res;
    }
}
```
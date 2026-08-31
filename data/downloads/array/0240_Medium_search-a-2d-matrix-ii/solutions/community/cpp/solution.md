# C++ search from top-right

**Author:** jianchao-li
**Votes:** 605
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/66139/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/66139/)

---

Search from the **top-right** element and reduce the search space by one row or column at each time.

```
[[ 1,  4,  7, 11, 15],
 [ 2,  5,  8, 12, 19], 
 [ 3,  6,  9, 16, 22],
 [10, 13, 14, 17, 24],
 [18, 21, 23, 26, 30]]
```

Suppose we want to search for `12` in the above matrix. compare `12` with the top-right element `nums[0][4] = 15`. Since `12 < 15`, `12` cannot appear in the column of `15` since all elements in that column are greater than or equal to `15`. Now we reduce the search space by one column (the last column).

We further compare `12` with the top-right element of the remaining matrix, which is `nums[0][3] = 11`. Since `12 > 11`, `12` cannot appear in the row of `11` since all elements in this row are less than or equal to `11` (the last column has been discarded). Now we reduce the search space by one row (the first row).

We move on to compare `12` with the top-right element of the remaining matrix, which is `nums[1][3] = 12`. Since it is equal to `12`, we return `true`.

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size(), n = m ? matrix[0].size() : 0, r = 0, c = n - 1;
        while (r < m && c >= 0) {
            if (matrix[r][c] == target) {
                return true;
            }
            matrix[r][c] > target ? c-- : r++;
        }
        return false;
    }
};
```
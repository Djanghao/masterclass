# ✅ C++ One-Loop Easy Solution | Column-first and Row-first Approaches

**Author:** archit91
**Votes:** 161
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/1317151/](https://leetcode.com/problems/reshape-the-matrix/solutions/1317151/)

---

There's nothing much to this problem - Just check if total elements in both matrices will be same and then transform. I have mentioned two approaches below.

----

\u2714\uFE0F ***Solution (Row-First Approach)***

Iterate each row column-by-column, wrap around when you reach the end on one row and move to the next row. Here, we are copying all elements of one row and then moving on to the next row.

```
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = size(mat), n = size(mat[0]), total = m * n;
        if(r * c != total) return mat;
        vector<vector<int>> ans(r, vector<int>(c));
        for(int i = 0; i < total; i++) 
            ans[i / c][i % c] = mat[i / n][i % n];
        return ans;
    }
};
```

<blockquote>
<details>
<summary><b>\u2714\uFE0F Commented Solution</b></summary>


If the above appraoch was not clear, you can refer the below commented code -

```
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = size(mat), n = size(mat[0]), total = m * n;
        if(r * c != total) return mat;             // return if total elements don't match
        vector<vector<int>> ans(r, vector<int>(c));
        int i = 0, j = 0, new_i = 0, new_j = 0;    // i, j iterates over old matrix | new_i, new_j iterates over new matrix
        while(total--) {
            ans[new_i][new_j] = mat[i][j]; 
            j++, new_j++;                          // move to next column in both matrix
            if(j == n) j = 0, i++;                 // start from beginning of next row when you reach the end of row in old matrix
            if(new_j == c) new_j = 0, new_i++;     // start from beginning of next row when you reach the end of row in new matrix
        }
        return ans;
    }
};
```

</details>
</blockquote>

***Time Complexity :*** `O(r*c)`
***Space Complexity :*** `O(1)`, ignoring output space complexity


---

\u2714\uFE0F ***Solution - II (Column-First Appraoch)***

All other posts have mentioned the first approach. It might be a good follow-up to try implementing it using column-first approach.

Iterate each column row-by-row, wrap around when you reach the end on one column and then move to the next column. Here, we are copying all elements of one column and then moving on to the next column.

```
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = size(mat), n = size(mat[0]), total = m * n;
        if(r * c != total) return mat;   
        vector<vector<int>> ans(r, vector<int>(c));
        for(int col = 0; col < n; col++) {
            for(int row = 0; row < m; row++) {
                int new_row = (n * row + col) / c;
                int new_col = (n * row + col) % c;
                ans[new_row][new_col] = mat[row][col];                
            }
        }
        return ans;
    }
};
```

<blockquote>
<details>
<summary><b>\u2714\uFE0F Single-Loop Solution</b></summary>

If anyone figures out a cleaner code than the following version, please let me know :)

```
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = size(mat), n = size(mat[0]), total = m * n;
        if(r * c != total) return mat;   
        vector<vector<int>> ans(r, vector<int>(c));
        for(int i = 0; i < total; i++) 
            ans[(i%m * n + i/m) / c][(i%m * n + i/m) % c] = mat[i % m][i / m];
        return ans;
    }
};
```


</details>
</blockquote>

***Time Complexity :*** `O(r*c)`
***Space Complexity :*** `O(1)`, ignoring output space complexity

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, comment below \uD83D\uDC47 

---
---
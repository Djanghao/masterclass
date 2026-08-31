# C++ easy recursive solution.

**Author:** wisest
**Votes:** 76
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/446712/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/446712/)

---

- tip 1 :
If you want to flip x, you can use **XOR**. 
If **x** is 0, **x ^ 1** is **1**.
If **x** is 1, **x ^ 1** is **0**.
so, **x ^= 1** means **flip x**.
- tip 2
If you select one cell and flip this cell with adjacent cell, matrix will be **changed**.
But if you take this action **twice**(on the same cell), matrix will be **not changed**.
- tip 3
Matrix maximum size **9** in this problem.
If you consider **all the case** in maxinum size matrix whether a cell flip or not, **512** cases exist.
So bruteforce solution can be accepted without TL(Time Limit).

```c++
class Solution {
public:
    int n, m;
    vector<vector<int>>& flip(vector<vector<int>>& mat, int y, int x) {
        mat[y][x] ^= 1;
        if(y - 1 >= 0) mat[y-1][x] ^= 1;
        if(y + 1 <  n) mat[y+1][x] ^= 1;
        if(x - 1 >= 0) mat[y][x-1] ^= 1;
        if(x + 1 <  m) mat[y][x+1] ^= 1;
        return mat;
    }

    bool isZeroMat(vector<vector<int>>& mat) {
        for(auto i = 0; i < n; ++i)
            for(auto j = 0; j < m; ++j)
                if(mat[i][j])
                    return false;
        return true;
    }

    int FlipOrNotFlip(vector<vector<int>> mat, int y, int x) {
        if(x == m) y++, x = 0;
        if(y == n) return isZeroMat(mat) ? 0:10000;

        auto ret1 = FlipOrNotFlip(mat, y, x+1);
        auto ret2 = FlipOrNotFlip(flip(mat, y, x), y, x+1) + 1;
        return min(ret1, ret2);
    }

    int minFlips(vector<vector<int>>& mat) {
        n = mat.size(), m = mat[0].size();
        auto ret = FlipOrNotFlip(mat, 0, 0);
        return (ret >= 10000 ? -1 : ret);
    }
};
```

In this code, ret1 means the count when (y, x) cell **not** flipped.
```
auto ret1 = FlipOrNotFlip(mat, y, x+1);
```

In this code, ret2 means the count when (y, x) cell flipped.
```
auto ret2 = FlipOrNotFlip(flip(mat, y, x), y, x+1) + 1;
```

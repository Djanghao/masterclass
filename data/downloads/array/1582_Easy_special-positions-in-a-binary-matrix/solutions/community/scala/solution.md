# Brute ➡️ Optimal ||[Java/C++] 2 approach || Fully explained ||

**Author:** Shivansu_7
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4398840/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4398840/)

---

# Approach Brute Force
1. Traverse the matrix and for every 1 encounter, check the rows and corresponding column.
2. If corresponding row and column doesn't contain 1, then we will increment our result.

# Complexity
- Time complexity:$$O(n*m(n+m))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    private boolean verifyZeros(int[][] mat, int x, int y) {
        for(int i=0; i<mat.length; i++) {
            if(i != x) {
                if(mat[i][y]==1) {
                    return false;
                }
            }
        }
        for(int i=0; i<mat[0].length; i++) {
            if(i != y) {
                if(mat[x][i]==1) {
                    return false;
                }
            }
        }
        return true;
    }

    public int numSpecial(int[][] mat) {
        int res = 0;
        int n = mat.length, m = mat[0].length;

        for(int i=0; i<n; i++) {
            for(int j=0;j<m; j++) {
                if(mat[i][j]==1) {
                    if(verifyZeros(mat, i, j)) {
                        res++;
                    }
                }
            }
        }
        return res;
    }
}
```
```C++ []
class Solution {
    private boolean verifyZeros(int[][] mat, int x, int y) {
        for(int i=0; i<mat.length; i++) {
            if(i != x) {
                if(mat[i][y]==1) {
                    return false;
                }
            }
        }
        for(int i=0; i<mat[0].length; i++) {
            if(i != y) {
                if(mat[x][i]==1) {
                    return false;
                }
            }
        }
        return true;
    }

    public int numSpecial(int[][] mat) {
        int res = 0;
        int n = mat.length, m = mat[0].length;

        for(int i=0; i<n; i++) {
            for(int j=0;j<m; j++) {
                if(mat[i][j]==1) {
                    if(verifyZeros(mat, i, j)) {
                        res++;
                    }
                }
            }
        }
        return res;
    }
}
```
# Approach Optimal
1. Make two array name row and column, of the length of matrix.length and matrix[0].length respectively.
2. Traverse  the matrix, and if we encounter 1, increment the corresponding row and col array by 1.
3. Again traverse the matrix and  if we encounter 1 at the matrix and 1 in row array and 1 in column array simultaneously, increment the result.
4. Return the result.


# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n+m)$$


```Java []
class Solution {
    public int numSpecial(int[][] mat) {
        int res = 0;
        int n = mat.length, m = mat[0].length;

        int[] row = new int[n];
        int[] col = new int[m];

        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(mat[i][j]==1) {
                    row[i]++;
                    col[j]++;
                }
            }
        }

          for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(mat[i][j]==1 && row[i]==1 && col[j]==1) {
                    res++;
                }
            }
        }        
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int numSpecial(vector<vector<int>>& mat) {
        int res = 0;
        int n = mat.size();
        int m = mat[0].size();

        std::vector<int> row(n, 0);
        std::vector<int> col(m, 0);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (mat[i][j] == 1) {
                    row[i]++;
                    col[j]++;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (mat[i][j] == 1 && row[i] == 1 && col[j] == 1) {
                    res++;
                }
            }
        }

        return res;
    }
};
```



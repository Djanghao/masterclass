# Share my Java 2-D Binary Indexed Tree Solution

**Author:** jeantimex
**Votes:** 23
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/75917/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/75917/)

---

Based on the [1-D solution][1] in problem [Range Sum Query - Mutable][2], we can extend it to solve this 2-D problem. 

Initializing the binary indexed tree takes `O(mn*logm*logn)` time, both `update()` and `getSum()` take `O(logm*logn)` time. The `arr[][]` is used to keep a backup of the `matrix[][]` so that we know the difference of the updated element and use that to update the binary indexed tree. The idea of calculating  `sumRegion()` is the same as in [Range Sum Query 2D - Immutable][3]. 

    public class NumMatrix {
      int m, n;
      int[][] arr;    // stores matrix[][]
      int[][] BITree; // 2-D binary indexed tree
      
      public NumMatrix(int[][] matrix) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return;
        }
        
        m = matrix.length;
        n = matrix[0].length;
        
        arr = new int[m][n];
        BITree = new int[m + 1][n + 1];
        
        for (int i = 0; i < m; i++) {
          for (int j = 0; j < n; j++) {
            update(i, j, matrix[i][j]); // init BITree[][]
            arr[i][j] = matrix[i][j];   // init arr[][]
          }
        }
      }
      
      public void update(int i, int j, int val) {
        int diff = val - arr[i][j];  // get the diff
        arr[i][j] = val;             // update arr[][]
          
        i++; j++;
        while (i <= m) {
          int k = j;
          while (k <= n) {
            BITree[i][k] += diff; // update BITree[][]
            k += k & (-k); // update column index to that of parent
          }
          i += i & (-i);   // update row index to that of parent
        }
      }
      
      int getSum(int i, int j) {
        int sum = 0;
        
        i++; j++;
        while (i > 0) {
          int k = j;
          while (k > 0) {
            sum += BITree[i][k]; // accumulate the sum
            k -= k & (-k); // move column index to parent node
          }
          i -= i & (-i);   // move row index to parent node
        }
        return sum;
      }
      
      public int sumRegion(int i1, int j1, int i2, int j2) {
        return getSum(i2, j2) - getSum(i1-1, j2) - getSum(i2, j1-1) + getSum(i1-1, j1-1);
      }
    }


  [1]: https://leetcode.com/discuss/72551/share-my-java-binary-indexed-tree-solution
  [2]: https://leetcode.com/problems/range-sum-query-mutable/
  [3]: https://leetcode.com/problems/range-sum-query-2d-immutable/
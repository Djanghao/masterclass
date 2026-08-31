# Java 14ms relative short & easy to code solution with explanation. O(mn) time O(mn) space. DFS + DP

**Author:** EdickCoding
**Votes:** 68
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/78313/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/78313/)

---

The idea is simple and intuitive:  
    1. For each cell, try it's left, right, up and down for smaller number.  
    2. If it's smaller, means we are on the right track and we should keep going. If larger, stop and return.  
    3. Treat each cell as a start cell. Calculate and memorize the longest distance for this cell, so we don't need to calculate it again in the future.  

Questions and advices are welcome.

    public class Solution {
        public int longestIncreasingPath(int[][] matrix) {
            if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
                return 0;
            }
            int[][] cache = new int[matrix.length][matrix[0].length];
            int max = 0;
            for (int i = 0; i < matrix.length; i++) {
                for (int j = 0; j < matrix[0].length; j++) {
                    int length = findSmallAround(i, j, matrix, cache, Integer.MAX_VALUE);
                    max = Math.max(length, max);
                }
            }
            return max;
        }
        private int findSmallAround(int i, int j, int[][] matrix, int[][] cache, int pre) {
            // if out of bond OR current cell value larger than previous cell value.
            if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || matrix[i][j] >= pre) {
                return 0;
            }
            // if calculated before, no need to do it again
            if (cache[i][j] > 0) {
                return cache[i][j];
            } else {
                int cur = matrix[i][j];
                int tempMax = 0;
                tempMax = Math.max(findSmallAround(i - 1, j, matrix, cache, cur), tempMax);
                tempMax = Math.max(findSmallAround(i + 1, j, matrix, cache, cur), tempMax);
                tempMax = Math.max(findSmallAround(i, j - 1, matrix, cache, cur), tempMax);
                tempMax = Math.max(findSmallAround(i, j + 1, matrix, cache, cur), tempMax);
                cache[i][j] = ++tempMax;
                return tempMax;
            }
        }
    }
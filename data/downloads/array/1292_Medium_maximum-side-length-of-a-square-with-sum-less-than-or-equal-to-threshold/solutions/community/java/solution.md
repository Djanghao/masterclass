# Java Binary Search and Prefix Sum with comments

**Author:** phuongnguyen00
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/971810/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/971810/)

---

```
class Solution {
    public int maxSideLength(int[][] mat, int threshold) {

        // Binary search solution
        
        int numRows = mat.length;
        int numCols = mat[0].length;
        
        // First, calculate the prefix sum matrix
        int[][] prefixSum = new int[numRows + 1][numCols + 1];
        // add padding so that edge cases are dealt with more smoothly.
        // we keep the prefixSum of mat[0][0] at prefixSum[1][1] and so on
        
        for (int r = 1; r <= numRows; r++) {
            for (int c = 1; c <= numCols; c++) {
                prefixSum[r][c] = prefixSum[r - 1][c] + prefixSum[r][c-1] - prefixSum[r-1][c-1] + mat[r-1][c-1];
            }
        }
        
        int lower = 0;
        int upper = Math.min(numRows, numCols) - 1;
        // size = number of extended columns
        
        // Use binary search to guess the size 
        while (lower <= upper) {
            int size = lower + (upper - lower)/2;
            // r and c of prefix sum matrix
            int minSumSubMat = Integer.MAX_VALUE;
            
            // With the current size, find the smallest sum starting from different places in the matrix
            for (int r = 1; r + size <= numRows; r++) {
                for (int c = 1; c + size <= numCols; c++) {
                   int sumSubMat = prefixSum[r + size][c + size] - 
                        prefixSum[r-1][c + size] - 
                        prefixSum[r + size][c - 1] + 
                        prefixSum[r-1][c-1];
                    // the added part is subtracted twice
                    if (sumSubMat < minSumSubMat) minSumSubMat = sumSubMat;
                }
            }
            
            if (minSumSubMat <= threshold) {
                lower = size + 1;
            } else {
                upper = size - 1;
            }
        }
        
        return lower;
    }
}
```
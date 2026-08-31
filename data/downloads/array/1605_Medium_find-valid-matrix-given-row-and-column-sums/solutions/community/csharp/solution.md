# Easy C# Solution beats 100%

**Author:** Javahir
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5504894/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5504894/)

---

# Complexity
- Time complexity: O(r\u22C5c)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(r\u22C5c)

Where r is rowSum.Length and c is colSum.Length
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[][] RestoreMatrix(int[] rowSum, int[] colSum) {
        int[][] matrix = new int[rowSum.Length][];
        int n = 0;
        for(int i =0; i < rowSum.Length; i++){
            matrix[i] = new int[colSum.Length];
        }

        for(int j= 0;  j< colSum.Length; j++){
            for(int i=0; i < rowSum.Length; i++){
                n = Math.Min(rowSum[i], colSum[j]);
                matrix[i][j] = n;
                rowSum[i] -= n;
                colSum[j] -= n;
            }
        }

        return matrix;
    }
}
```
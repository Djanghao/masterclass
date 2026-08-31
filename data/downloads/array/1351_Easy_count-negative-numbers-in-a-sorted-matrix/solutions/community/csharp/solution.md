# C#, simple solution, O(m+n) time

**Author:** edevyatkin
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/538953/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/538953/)

---

```
public class Solution {
    public int CountNegatives(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        int count = 0;
        for (int i = 0; i < m; i++) {
            while (n > 0) {
                if (grid[i][n-1] >= 0)
                    break;
                count += (m-i);
                n--;
            }
        }
        return count;
    }
}
```
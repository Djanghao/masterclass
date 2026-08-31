# Java solution (with explanation)

**Author:** RKxYiiyk2
**Votes:** 225
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1698026/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1698026/)

---

**Explanation** - I found hints to be somewhat poorly worded. Here's an explanation of the logic. Let's say there are some number of 1s in the first row. To get to all 0s matrix it is obvious that we must flip those 1s. If we flip the first row itself then any 0 will turn into 1. So instead we flip all the columns that have 1 in the first row. Now if we think a little deeply, we can realize that we can never flip columns again, because if we do, then 0s in first row will turn to 1s again. So our only option is to flip rows now (starting from second row since first row is already all 0s). Now to get all 0s in the final matrix each row ought to have either only 0s or only 1s. If it has only 0s we don't flip it, if it has only 1s then we flip it. If in any row all the elements are not same, it means it is not possible to get all 0s matrix.
```
public class Solution {
   public boolean removeOnes(int[][] g) {
      int m = g.length, n = g[0].length;
      
      IntStream.range(0,n).forEach(j -> {
         if (g[0][j] == 1) flipColumn(j,g); 
      });
      
      for (int i = 1; i < m; i++) {
         for (int j = 1; j < n; j++) {
             if (g[i][j] != g[i][j-1]) return false;
         }
      }
      return true;
   }

   private void flipColumn(int j, int[][] g) {
      IntStream.range(0,g.length).forEach(i -> {
         g[i][j] = 1 - g[i][j];
      });
   }
}
```
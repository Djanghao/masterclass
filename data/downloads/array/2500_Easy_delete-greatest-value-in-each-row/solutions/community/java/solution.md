# Beginner friendly Java Solution

**Author:** HimanshuBhoir
**Votes:** 18
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2899447/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2899447/)

---


# Complexity
- Time complexity:
O(n*mlogm)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int deleteGreatestValue(int[][] grid) {
        for(int i=0; i<grid.length; i++)    Arrays.sort(grid[i]);
        int res = 0;
        for(int i=0; i<grid[0].length; i++){
            int max = 0;
            for(int j=0; j<grid.length; j++)    
                max = Math.max(max, grid[j][i]);
            res += max;
        }
        return res;
    }
}
```
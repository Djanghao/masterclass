# Easy Java Solution || Matrix

**Author:** DevKD
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648895/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648895/)

---

# Maximum Sum of an Hourglass
**Easy Java Solution**

**Approach:**
1.) Running the for loop for row-2 times
2.) Running the inner for loop col-2 times
3.) Calculating the sum and updating the ans

```
class Solution {
    public int maxSum(int[][] grid) {
        int ans=0;
        for(int i=0;i<grid.length-2;i++){
            //Running the for loop for the row-2  times
            for(int j=0;j<grid[0].length-2;j++){
                //Running the inner for loop for the col-2  times
                int sum=grid[i][j]+grid[i][j+1]+grid[i][j+2]+grid[i+1][j+1]+grid[i+2][j]+grid[i+2][j+1]+grid[i+2][j+2];
                ans=Math.max(ans,sum);
            }
        }
        return ans;
    }
}
```
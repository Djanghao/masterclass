# Beginner friendly [Java/JavaScript/Python[ Solution

**Author:** HimanshuBhoir
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2670555/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2670555/)

---

**Java**
```
class Solution {
    public int maxSum(int[][] grid) {
        int sum = 0, max = 0;
        for(int i=0; i<grid.length-2; i++){
            for(int j = 0; j<grid[0].length-2; j++){
                sum = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];
                max = Math.max(max, sum);
            }
        }
        return max;
    }
}
```
**JavaScript**
```
var maxSum = function(grid) {
    let sum = max = 0
    for(let i=0; i<grid.length-2; i++){
        for(let j = 0; j<grid[0].length-2; j++){
            sum = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]
            max = Math.max(max, sum)
        }
    }
    return max
};
```
**Python**
```
class Solution(object):
    def maxSum(self, grid):
        sm = mx = 0
        for i in range(len(grid)-2):
            for j in range(len(grid[0])-2):
                sm = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]
                mx = max(mx, sm)
        return mx
```
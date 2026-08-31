# BEATS 100% DART solution, only code

**Author:** Mohamed_Sadeck
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5075246/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5075246/)

---

# Code
```
class Solution {
  int minFallingPathSum(List<List<int>> grid) {
    final len = grid.length;
    final maxValue = double.maxFinite.toInt();
    List<List<int>> dp = List.generate(len, (_) => List.generate(len, (_) => -1));
    for(int j=0;j<len;j++){
        dp[0][j]=grid[0][j];
    }
    for(int i=1;i<len;i++){
        for(int j=0;j<len;j++){
            int temp  = maxValue;
            for(int k=0;k<len;k++){
                if(j!=k){
                    temp = min(temp,grid[i][j]+dp[i-1][k]);
                }
            }
            dp[i][j]=temp;
        }
    }
    return dp.last.reduce((curr,next)=>curr<next?curr:next);
  }
}
```
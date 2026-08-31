# 7 liner Python solution(48ms) + JavaScript solution(56ms) + Java solution(1ms)

**Author:** jerrycychen
**Votes:** 7
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/417313/](https://leetcode.com/problems/dungeon-game/solutions/417313/)

---

dp[r][c]: min health required to reach bottom right

**Python(48ms)**
```
class Solution(object):
    def calculateMinimumHP(self, dungeon):
		nrows, ncols = len(dungeon), len(dungeon[0])
        dp = [[float('inf')]*(ncols+1) for _ in range(nrows+1)]
        dp[nrows-1][ncols] = dp[nrows][ncols-1] = 1
        for r in range(nrows-1, -1, -1):
            for c in range(ncols-1, -1, -1):
                dp[r][c] = max(1, min(dp[r+1][c], dp[r][c+1]) - dungeon[r][c])
        return dp[0][0]
```

**JavaScript(56ms)**
```
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    var nrows = dungeon.length;
    var ncols = dungeon[0].length;
    
    var dp = [];
    for (var r=0; r<nrows+1; r++) {
        dp[r] = [];
        for (var c=0;c<ncols+1;c++) {
            dp[r][c] = Number.MAX_SAFE_INTEGER;
        }
    }
    dp[nrows-1][ncols] = dp[nrows][ncols-1] = 1;
    
    for (var r=nrows-1;r>=0;r--) {
        for (var c=ncols-1;c>=0;c--) {
            dp[r][c] = Math.max(1, Math.min(dp[r+1][c], dp[r][c+1])-dungeon[r][c]);
        }
    }
    return dp[0][0];
};
```

**Java(1ms)**
```
class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        int nrows = dungeon.length;
        int ncols = dungeon[0].length;
        int[][] dp = new int[nrows+1][ncols+1];
        for(int[] r:dp){
            Arrays.fill(r, Integer.MAX_VALUE);
        }
        dp[nrows-1][ncols] = dp[nrows][ncols-1] = 1;
        for(int r=nrows-1;r>=0;r--){
            for(int c=ncols-1;c>=0;c--){
                dp[r][c] = Math.max(1, Math.min(dp[r+1][c], dp[r][c+1])-dungeon[r][c]);
            }
        }
        return dp[0][0];
    }
}
```
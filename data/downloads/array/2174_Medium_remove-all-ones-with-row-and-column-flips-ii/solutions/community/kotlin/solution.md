# Kotlin - DFS + Backtrack

**Author:** alialialiiiiii
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/2366435/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/2366435/)

---

Reference https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/discuss/2248774/Java-oror-Explained-in-detail-how-DFS-and-Backtrack-would-work-oror-TC-and-SC-Explained
```
class Solution {
    fun removeOnes(grid: Array<IntArray>): Int {
        val numOfR = grid.size
        val numOfC = grid[0].size
        var result = Integer.MAX_VALUE
        for( r in 0.. numOfR - 1){
            for( c in 0.. numOfC - 1){
                if(grid[r][c] == 1){
                    val cacheR = IntArray(numOfC)
                    for( i in 0.. numOfC - 1){
                        cacheR[i] = grid[r][i]
                        grid[r][i] = 0
                    }
                    
                    val cacheC = IntArray(numOfR)
                    for( i in 0.. numOfR - 1){
                        cacheC[i] = grid[i][c]
                         grid[i][c] = 0
                    }
                
                    result = minOf(result , removeOnes( grid) + 1)
                    
                    for( i in 0.. numOfR - 1){
                        grid[i][c] = cacheC[i]
                    }
                    
                    for( i in 0.. numOfC - 1){
                        grid[r][i] = cacheR[i]
                    }
                }
            }
        }
         return if (result == Integer.MAX_VALUE) 0 else result
    }
}

```
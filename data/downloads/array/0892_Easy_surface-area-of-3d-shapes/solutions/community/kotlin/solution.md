# Easy Kotlin Solution

**Author:** Sahil14_11
**Votes:** 1
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/1613222/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/1613222/)

---

```
class Solution {
    fun surfaceArea(grid: Array<IntArray>): Int {
        var area=0
        for(i in 0 until grid.size){
            for(j in 0 until grid.size){
                if(grid[i][j]!=0){
                    area+=grid[i][j]*4+2
                }
                if(i<grid.size-1){
                    area-=minOf(grid[i][j],grid[i+1][j])*2
                }
                if(j<grid.size-1){
                    area-=minOf(grid[i][j],grid[i][j+1])*2
                }
            }
        }
        return area
    }
}
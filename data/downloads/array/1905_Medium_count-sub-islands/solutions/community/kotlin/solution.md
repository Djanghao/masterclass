# Kotlin || DFS || Very Elegant Solution

**Author:** mahrezz
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/2619990/](https://leetcode.com/problems/count-sub-islands/solutions/2619990/)

---

```
class Solution {
    fun countSubIslands(grid1: Array<IntArray>, grid2: Array<IntArray>): Int {
        
        val visited = Array(grid2.size){BooleanArray(grid2[0].size){false}}
        
        
        fun dfs(row: Int, col: Int, list: MutableList<IntArray>){
            val inBoundries = row >= 0 && col >=0 && row < grid2.size && col < grid2[0].size
            
            if(!inBoundries || grid2[row][col] == 0 || visited[row][col]) return 
            visited[row][col] = true
        
            list.add(intArrayOf(row,col))
            
            if(grid1[row][col] != 1){
                list.add(0,intArrayOf(-1,-1)) //mark this subIsland is not valid
            }
            
            for(direction in arrayOf(intArrayOf(-1,0),intArrayOf(1,0),intArrayOf(0,-1),intArrayOf(0,1))){
                dfs(row + direction[0], col + direction[1], list)
            }
            
        }
        
        
        var ans = 0
        
        for(row in 0 until grid2.size){
            for(col in 0 until grid2[0].size){
                if(!visited[row][col] && grid2[row][col] == 1){
                    
                    val subIsland = mutableListOf<IntArray>()
                    dfs(row,col,subIsland)
                    if(subIsland.isNotEmpty() && subIsland[0][0] != -1) ans++

                }
            }
        }
 
        return ans
        
    }
}
```
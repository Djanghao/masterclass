# [Kotlin] 1091. Shortest Path in Binary Matrix. BFS + reuse of the matrix

**Author:** havran
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/1066000/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/1066000/)

---

```
data class Triple(val i:Int,val j:Int, val dist:Int)
    
class Solution {
    companion object{
        val dirX = intArrayOf(1, -1,  1, -1, -1, 1, 0 , 0)
        val dirY = intArrayOf(1,  1, -1, -1,  0, 0, 1, -1)
        
        fun Array<IntArray>.inBounds(i:Int, j:Int)= i>=0 && i<this.size && j>=0 && j<this[i].size
    }
    
    fun shortestPathBinaryMatrix(grid: Array<IntArray>): Int {
        if( grid[0][0]==1 
                || grid[grid.size - 1][grid[0].size - 1]==1){
            return -1
        }
        
        if((grid.size==1 && grid[0].size == 1)){
            return 1
        }
        
        bfsItterative(grid)
        
        return if(grid[grid.size - 1][grid.size - 1]==0) -1 else grid[grid.size - 1][grid[0].size - 1]
    }
    
    fun bfsRecursive(grid: Array<IntArray>, i:Int, j:Int, dist:Int) {        
        for(d in 0 until dirX.size){
            val newX = i + dirX[d]
            val newY = j + dirY[d]
            
            if(grid.inBounds(newX, newY) 
               && (grid[newX][newY]==0 || grid[newX][newY] > dist + 2)){
                
              grid[newX][newY] = dist + 2
                
              bfsRecursive(grid, newX, newY, dist+1)
            }
        }
    }
    
    fun bfsItterative(grid: Array<IntArray>) {     
        val q = ArrayDeque<Triple>()
        q.addLast(Triple(0,0,0))
       
        while(!q.isEmpty()){
            val (i,j, dist) = q.removeFirst()
            
            for(d in 0 until dirX.size){
                val newX = i + dirX[d]
                val newY = j + dirY[d]

                if(grid.inBounds(newX, newY) 
                   && (grid[newX][newY]==0 || grid[newX][newY] > dist + 2)){

                   grid[newX][newY] = dist + 2

                   q.addLast(Triple(newX, newY, dist+1))
                }
            }
        }
    }
}
```
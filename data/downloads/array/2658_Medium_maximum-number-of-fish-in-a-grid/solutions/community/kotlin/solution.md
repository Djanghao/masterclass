# BFS Approach

**Author:** yadunath
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5529377/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5529377/)

---

# Intuition

Find the total fish from all the water starting points

# Approach
Do bfs from all the not visited water and 
# Complexity
- Time complexity:
 O(m * n)
- Space complexity:
O (m * n)
# Code
```
class Solution {
    fun findMaxFish(grid: Array<IntArray>): Int {
        
        val m = grid.size
        val n = grid[0].size
        var visited = Array(m) {IntArray(n) { -1 }}
        val dR = intArrayOf(1, -1 ,0, 0)
        val dC = intArrayOf(0, 0, 1, -1)
        fun bfs(r: Int,c: Int) : Int {
            var q : Queue<Pair<Int,Int>> = LinkedList()
            var totalFish = grid[r][c]
            visited[r][c] = 0
            q.add(Pair(r,c))

            while(q.isNotEmpty()) {

                val node = q.remove()
                
                for(i in 0..3) {
                    val nR = node.first + dR[i]
                    val nC = node.second + dC[i]

                    if(nR >= 0 && nR < m && nC >= 0 && nC < n && visited[nR][nC] == -1 && grid[nR][nC] > 0) {
                        visited[nR][nC] = 0
                        q.add(Pair(nR,nC))
                        totalFish += grid[nR][nC]
                    }
                }
            }
            return totalFish
        }
        var result = 0
        for(i in 0..m - 1){
            for(j in 0..n - 1){
                if(grid[i][j] > 0 && visited[i][j] == -1) {
                    val total = bfs(i,j)
                    result = Math.max(result,total)
                }
            }
        }
        return result
    }
}
```
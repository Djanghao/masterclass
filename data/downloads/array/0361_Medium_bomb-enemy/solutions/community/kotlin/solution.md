# O(N*M) solution || Dynamic programming

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/5923962/](https://leetcode.com/problems/bomb-enemy/solutions/5923962/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N*M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(4*N*M)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun fillMatrix(lToR: Array<IntArray>,
                   rToL: Array<IntArray>,
                   tToB: Array<IntArray>,
                   bToT: Array<IntArray>,
                    grid: Array<CharArray>) {
        val r = grid.size
        val c = grid[0].size
        // left to right
        for(i in 0..r-1){
            var ans = 0
            for(col in 0..c-1){
                if(grid[i][col] == 'W'){
                    ans = 0
                } else if(grid[i][col] == 'E') {
                    ans++           
                }
                lToR[i][col] = ans
            }
        }
        // Right to Left
        for(i in 0..r-1){
            var ans = 0
            for(col in c-1 downTo 0){
                if(grid[i][col] == 'W'){
                    ans = 0
                } else if(grid[i][col] == 'E') {
                    ans++           
                }
                rToL[i][col] = ans
            }
        }

        // Top to bottom
         for(i in 0..c-1){
            var ans = 0
            for(row in 0..r-1){
                if(grid[row][i] == 'W'){
                    ans = 0
                } else if(grid[row][i] == 'E') {
                    ans++           
                }
                tToB[row][i] = ans
            }
        }
        // Bottom to top
         for(i in 0..c-1){
            var ans = 0
            for(row in r-1 downTo 0){
                if(grid[row][i] == 'W'){
                    ans = 0
                } else if(grid[row][i] == 'E') {
                    ans++           
                }
                bToT[row][i] = ans
            }
        }
    }
    fun maxKilledEnemies(grid: Array<CharArray>): Int {
        val r = grid.size
        val c = grid[0].size
        var mx = 0
        val lToR = Array(r){IntArray(c){0}}
        val rToL = Array(r){IntArray(c){0}}
        val tToB = Array(r){IntArray(c){0}}
        val bToT = Array(r){IntArray(c){0}}
        fillMatrix(lToR,rToL,tToB,bToT,grid)
        for(i in 0..r-1){
            for(j in 0..c-1) {
                if(grid[i][j] == '0') {
                   // println("i =$i and j = $j")
                    val enemyInRow = lToR[i][j] + rToL[i][j]
                    // println("enemyInRow = $enemyInRow")
                    val enemyInCol = tToB[i][j] + bToT[i][j]
                   // println("enemyInCol = $enemyInCol")
                    mx = max(enemyInRow+enemyInCol, mx)
                }
            }
        }
        return mx
    }
}
```
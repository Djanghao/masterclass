# Kotlin BEATS 98% APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/1936825/](https://leetcode.com/problems/shift-2d-grid/solutions/1936825/)

---


	class Solution {
    
	fun shiftGrid(grid: Array<IntArray>, k: Int): List<List<Int>> {
	
		val result = MutableList(grid.size) { MutableList<Int>(grid[0].size) { 0 } } 
		
        for (i in grid.indices) { 
            for (j in grid[0].indices) {
                val n = (i + (j + k) / grid[0].size) % grid.size
                val m = (j + k) % grid[0].size

                result[n][m] = grid[i][j]
            }
        }
        
        return result
    }
	}
# Kotlin Best Solution

**Author:** progp
**Votes:** 5
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/4385456/](https://leetcode.com/problems/making-a-large-island/solutions/4385456/)

---


# Code
```
class Solution {
fun largestIsland(grid: Array<IntArray>): Int {
        if (grid.isEmpty()) return 0
        val R = grid.size
        val C = grid[0].size
        val dsu = DSU(R * C)
        val dirs = listOf(0 to 1, 0 to -1, 1 to 0, -1 to 0)
        var maxArea = 0
        
        fun encode(r: Int, c: Int) = r * C + c
        
        fun isLegal(x: Int, y: Int) = x in 0 until R && y in 0 until C
        
        for (i in 0 until R) {
            for (j in 0 until C) {
                if (grid[i][j] == 1) {
                    val currentCell = encode(i, j)
                    for ((deltaI, deltaJ) in dirs) {
                        val (newX, newY) = i + deltaI to j + deltaJ
                        if (isLegal(newX, newY).not()) continue
                        if (grid[newX][newY] != 1) continue
                        val newCell = encode(newX, newY)
                        dsu.union(currentCell, newCell)
                    }
                }
            }
        }
        
        maxArea = dsu.maxSize
        
        for (i in 0 until R) {
            for (j in 0 until C) {
                if (grid[i][j] == 0) {
                    val seen: MutableSet<Int> = HashSet()
                    val currentCell = encode(i, j)
                    var currentAns = 1
                    for ((deltaI, deltaJ) in dirs) {
                        val (newX, newY) = i + deltaI to j + deltaJ
                        if (isLegal(newX, newY).not()) continue
                        if (grid[newX][newY] != 1) continue
                        val newCell = encode(newX, newY)
                        val newCellParent = dsu.find(newCell)
                        if (seen.contains(newCellParent).not()) {
                            currentAns += dsu.size[newCellParent]
                            seen.add(newCellParent)
                        }
                    }
                    maxArea = maxOf(maxArea, currentAns)
                }
            }
        }
        return maxArea
    }
 }
class DSU(val N: Int) {
    val parent = IntArray(N)
    val size = IntArray(N)
    var maxSize = 1
    
    init {
        makeSet()
    }
    
    private fun makeSet() {
        for (i in 0 until N) {
            parent[i] = i
            size[i] = 1
        }
    }
    
    fun find(x: Int): Int {
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }
    
    fun union(x: Int, y: Int): Boolean {
        val (xP, yP) = find(x) to find(y)
        if (xP == yP) return false
        if (size[xP] > size[yP]) {
            size[xP] += size[yP]
            parent[yP] = xP
            maxSize = maxOf(maxSize, size[xP])
        } else {
            size[yP] += size[xP]
            parent[xP] = yP
            maxSize = maxOf(maxSize, size[yP])
        }
        return true
    }
}
```
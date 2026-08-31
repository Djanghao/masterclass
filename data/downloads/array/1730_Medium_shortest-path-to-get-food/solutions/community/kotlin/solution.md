# Kotlin Solution

**Author:** IAmShaarawy
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/5117123/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/5117123/)

---

# Code
```
class Solution {

    data class Node(
        val i:Int,
        val j:Int,
        val distance:Int
    )

    fun getFood(grid: Array<CharArray>): Int {
        val (si, sj) = findStartPoint(grid)?: return -1
        var result = 0
        val seen  = mutableSetOf<String>()
        val queue: Queue<Node> = LinkedList()
        queue.add(Node(si, sj, 0))
        seen.add("$si $sj")

        while(queue.isNotEmpty()){
            val (li, lj, distance) = queue.remove()
            if(grid[li][lj]=='#') return distance
            for((i, j) in findNeighbors(li, lj, grid)){
                if(!seen.contains("$i $j")){
                    seen.add("$i $j")
                    queue.add(Node(i, j, distance+1))
                }
            }
        }
        return -1
    }

    fun findStartPoint(grid: Array<CharArray>):Pair<Int,Int>?{
        for(i in grid.indices){
            for(j in grid[0].indices){
                if(grid[i][j]=='*'){
                    return i to j
                }
            }
        }
        return null
    }

    val directions = arrayOf(
        0 to 1,
        1 to 0,
        0 to -1,
        -1 to 0,
    )

    fun findNeighbors(ii:Int, ij:Int, grid: Array<CharArray>): List<Pair<Int,Int>>{
        val result = mutableListOf<Pair<Int,Int>>()
        for((i, j) in directions){
            val ni = i + ii
            val nj = j + ij
            if(ni >= 0 && ni < grid.size && nj >= 0 && nj < grid[0].size && grid[ni][nj] != 'X'){
                result.add(ni to nj)
            }
        }
        return result
    }
}
```
# BFS from buidings to houses

**Author:** pegasus_1
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5057128/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5057128/)

---

# Approach
 Do BFS from each building to each point , and see a point is reachable from all buildings

# Complexity
- Time complexity:O(NM)* noOFBuildings

- Space complexity:O(NM)

# Code
```
class Solution {
    class Point(var x: Int, var y: Int, var dist: Int)
    var list = mutableListOf<Point>()
    fun shortestDistance(grid: Array<IntArray>): Int {
        for(i in 0..grid.size-1) {
            for(j in 0..grid[i].size-1) {
                if(grid[i][j] == 1) {
                    list.add(Point(i, j, 0))
                }
            }
        }
        var arr = Array(grid.size) {
            Array(grid[0].size) {
                0
            }
        }
        var count = Array(grid.size) {
            Array(grid[0].size) {
                0
            }
        }
        for(point in list) {
             val vis = Array(grid.size) {
                Array<Boolean>(grid[0].size) {
                    false
                }
             }
             val queue = LinkedList<Point>()
             queue.add(point)
             while(!queue.isEmpty()) {
               val point = queue.poll()
               val x = point.x
               val y = point.y
               val dist = point.dist
               if(!vis[x][y]) {
                 arr[x][y] = arr[x][y] + dist
                 count[x][y] = count[x][y] + 1
                 vis[x][y] = true
                addToQueueIfPossible(queue, x+1, y, grid, dist, vis)
                addToQueueIfPossible(queue, x-1, y, grid, dist, vis)
                addToQueueIfPossible(queue, x, y+1, grid, dist, vis)
                addToQueueIfPossible(queue, x, y-1, grid, dist, vis)
               } 
             }
        }
        var min = Integer.MAX_VALUE
        val len = list.size
        for(i in 0..arr.size-1) {
            for(j in 0..arr[0].size-1) {
                if(count[i][j] == len && arr[i][j]!=0 && arr[i][j] < min) {
                    min = arr[i][j]
                }
            }
        }
        if(min == Integer.MAX_VALUE)return -1
        return min
    }

    fun addToQueueIfPossible(queue: LinkedList<Point>, x: Int, y: Int, grid: Array<IntArray>, dist: Int, vis : Array<Array<Boolean>>) {
        if(x < 0 || y < 0 || x >= grid.size || y >= grid[0].size) return
        if(vis[x][y]) return
        if(grid[x][y] != 0) return
        queue.add(Point(x, y, dist+1))
    }
}
```
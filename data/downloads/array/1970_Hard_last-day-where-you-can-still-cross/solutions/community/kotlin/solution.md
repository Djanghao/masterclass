# DFS + Binary Search

**Author:** bylazy
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3700014/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3700014/)

---

# Intuition
As hint says DFS for path search and BS for last day search

# Approach
First lets build a grid (size row*col) where each cell value is equal to the day when it was flooded, so for example when 
```
cells = [[1,1],[2,1],[1,2],[2,2]] 
```
the grid is:

1 3
2 4

Now it is easy to check when cell is land at day d: 
```
if d - grid[c][r] < 0
``` 

DFS realisation uses this check, so now its possible to do Binary Search with days 1 .. row*col


# Complexity
- Time complexity:
O(days* log(days)) (days = row*col)

- Space complexity:
O(days)

# Code
```
class Solution {
    fun latestDayToCross(row: Int, col: Int, cells: Array<IntArray>): Int {
        val g = Array(row){IntArray(col) {0}}
        cells.forEachIndexed{d, c ->
            g[c[0]-1][c[1]-1] = d+1
        }        //Building grid
        fun dfs(c: Int, r: Int, x: Int, y: Int, d: Int, v: Array<BooleanArray> = Array(row){BooleanArray(col){false}}): Boolean {        
            v[y][x] = true // v for 'Visited'
            if (x < 0 || y < 0 || x >= c || y >= r) return false
            if (d - g[y][x] >= 0) return false // cell is flooded at day d
            if (y == row-1) return true    // last row reached        
            val down = if (y != row-1 && !v[y+1][x]) dfs(c,r,x,y+1,d,v) else false
            val up = if (y != 0 && !v[y-1][x]) dfs(c,r,x,y-1,d,v) else false
            val left = if (x != 0 && !v[y][x-1]) dfs(c,r,x-1,y,d,v) else false
            val right = if (x != col-1 && !v[y][x+1]) dfs(c,r,x+1,y,d,v) else false
            return down || up || left || right
        }
        var s = 1 
        var e = row*col
        while (s < e) {
            val day = (s + e) / 2            
            var way = g[0].mapIndexed{i, v -> if (day - v < 0) dfs(col,row,i,0,day) else false}.any{it == true}        
            if (way) s = day+1 else e = day
        }   //binary search
        return s-1
    }
}
```
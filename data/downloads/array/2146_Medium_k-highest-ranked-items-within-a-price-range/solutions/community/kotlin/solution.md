# [ Kotlin ] BFS + PriorityQueue

**Author:** droidJ
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/4898593/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/4898593/)

---

# Intuition
Graph : BFS + minHeap

# Approach
Use an array to present the current status 
int[ steps, price, row, col ]

# Complexity
- Time complexity: n *log(n) | n is the total items of grid.


# Code
```
class Solution {
    val dirs = arrayOf( intArrayOf( 0, 1 ), intArrayOf( 0, -1 ), intArrayOf( 1, 0 ) , intArrayOf( -1, 0  ) ) // 4 dirs 
    fun highestRankedKItems(grid: Array<IntArray>, pricing: IntArray, start: IntArray, k: Int): List<List<Int>> {
        // use BFS to buid Heap -> use k & heap to return result 
        val rows = grid.size 
        val cols = grid[0].size 
        val seen = Array( rows ){ IntArray( cols) } // by default all 0s 

        val minHeap = PriorityQueue<IntArray>{ a, b -> // Heap sort by 1. distance( steps ) 2. price ( low ) 3. row (smaller ) 4. col ( smaller )
            if( a[0] != b[0] ) a[0]-b[0] // sptes  shorter
            else if( a[1] != b[1] ) a[1]-b[1] // price smaller
            else if( a[2] != b[2] ) a[2]-b[2] // row smaller
            else a[3]-b[3] // col smaller 
        } 

        val q = LinkedList<IntArray>()
        val sRow = start[0]
        val sCol = start[1]
        q.add( intArrayOf( 0, grid[sRow][sCol], sRow, sCol ) ) // int[ steps, price, row, col ]
        seen[sRow][sCol] = 1 // visited 

        while( q.isNotEmpty() ){ // BFS 
            val size = q.size 
            for( i in 0 until size ){ // for each level 
                val ( steps, price, row, col ) = q.remove()
                if( price >= pricing[0] && price <= pricing[1] ) { // price valid 
                    minHeap.add( intArrayOf( steps, grid[row][col], row, col) )
                }

                for( dir in dirs ){ // next : in bound && not a blocker && not visited 
                    val nextRow = row + dir[0]
                    val nextCol = col + dir[1]
                    if( nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols ) continue // out bound 
                    if( seen[nextRow][nextCol] == 1 ) continue  // seen 
                    if( grid[nextRow][nextCol] == 0 ) continue // blocker
                     
                    seen[nextRow][nextCol] = 1 // marked as visited 
                    val next = intArrayOf( steps+1, grid[nextRow][nextCol], nextRow, nextCol)
                    q.add( next )
                }
            }
        }
       
        val res = mutableListOf< List<Int> >()  // handle heap & k 
        for( i in 0 until k ){
            if( minHeap.isNotEmpty() ){
                val ( steps, price, row, col ) = minHeap.remove()
                res.add( mutableListOf<Int>( row, col ) )
            }
        }
        return res
    }
}
```
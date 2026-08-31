# Readable Kotlin 216 ms (100%) 38.5 MB (100%)

**Author:** user0271V
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1626613/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1626613/)

---

Given `d` is the max length of a diagonal  `d = min(m, n)`:
- **Time complexity** guesstimate is `O(n*m * d*log(d))`, because we go througn each of the `m*n` elements and spend `d*log(d)` time adding it to the heap.
- **Space complexity** is probably `O(d)`.

Please correct the complexities if they're off.

```kotlin
class Solution {
    fun diagonalSort(mat: Array<IntArray>): Array<IntArray> {
        sortRowDiagonals(mat)
        sortColDiagonals(mat)
        return mat
    }
    
	// Sort diagonals starting from the top row.
    fun sortRowDiagonals(mat: Array<IntArray>) {
        val height = mat.size
        val width = mat[0].size
		// Using min heap for sorting.
        val queue = PriorityQueue<Int>()
       
	    // Skip the last top-right one as it's always just 1 cell.
        for (col in 0..(width-2)) {
		
		    // add every element of the diagonal into the heap
            var x = col
            var y = 0
            while (x < width && y < height) {
                queue.add(mat[y++][x++])
            }
            
			// put every (now sorted ascending) element back into the matrix
            x = col
            y = 0
            while (x < width && y < height) {
                mat[y++][x++] = queue.poll()
            }
        }
    }
    
	// Sort every diagonal starting from the left column.
    fun sortColDiagonals(mat: Array<IntArray>) {
        val height = mat.size
        val width = mat[0].size
        val queue = PriorityQueue<Int>()
        
		// skip the top-left one, because it's also the first diagonal sorted by `sortRow..`
		// skip the bottom-left one as it's always a single square
        for (row in 1..(height-2)) {
            var y = row
            var x = 0
            while (x < width && y < height) {
                queue.add(mat[y++][x++])
            }
            
            y = row
            x = 0
            while (x < width && y < height) {
                mat[y++][x++] = queue.poll()
            }
        }
    }
}
```
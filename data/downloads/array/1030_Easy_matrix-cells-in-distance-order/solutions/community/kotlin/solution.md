# Kotlin O(mn) solution that uses a list of lists that gets flattened

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/5400621/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/5400621/)

---

```
fun allCellsDistOrder(rows: Int, cols: Int, rCenter: Int, cCenter: Int): Array<IntArray> {
	/*
	The target coord is (rCenter, cCenter).

	Let maxDistance be the max distance from the target coord to any other coord in the matrix.
	*/
	val maxDistance: Int =
		max(rCenter, rows - 1 - rCenter) + max(cCenter, cols - 1 - cCenter)

	/*
	Let coordLists be a list of lists where the list at index 0 will contain an int array for the
	coord that has a distance of 0 from the target coord and the list at index 1 will contain int
	arrays for the coords that have a distance of 1 from the target coord and so on.
	*/
	val coordLists: List<ArrayList<IntArray>> =
		List(size = maxDistance + 1, init = { ArrayList() })

	for (row: Int in 0 until rows) {
		val verticalDistance: Int = abs(rCenter - row)

		for (col: Int in 0 until cols) {
			val distance: Int = verticalDistance + abs(cCenter - col)
			coordLists[distance].add(intArrayOf(row, col))
		}
	}

	return coordLists.flatten().toTypedArray()
}
```
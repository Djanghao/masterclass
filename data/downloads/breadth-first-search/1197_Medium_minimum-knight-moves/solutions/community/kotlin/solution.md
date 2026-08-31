# Kotlin Solution

**Author:** c2sarwar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/1584501/](https://leetcode.com/problems/minimum-knight-moves/solutions/1584501/)

---

```
internal class Index(var x: Int, var y: Int)

fun minKnightMoves(x: Int, y: Int): Int {
	var result = 0
	// For search
	val indexes: Queue<Index> = LinkedList()
	indexes.add(Index(0, 0))
	// Valid coordinates
	val xCors = intArrayOf(-2, -2, -1, -1, 1, 1, 2, 2)
	val yCors = intArrayOf(-1, 1, -2, 2, -2, 2, -1, 1)
	val visited = mutableSetOf<String>()
	visited.add("0,0")
	while (!indexes.isEmpty()) {
		val size = indexes.size
		repeat((0 until size).count()) {
			val index = indexes.remove()
			val corX = index.x
			val corY = index.y
			if (corX == abs(x) && corY == abs(y)) {
				return result
			}
			xCors.indices.forEach { j ->
				val newX = corX + xCors[j]
				val newY = corY + yCors[j]
				val key = "$newX,$newY"
				if (!visited.contains(key) && newX > -2 && newY > -2) {
					visited.add(key)
					indexes.add(Index(newX, newY))
				}
			}
		}
		++result
	}
	return -1
}
```
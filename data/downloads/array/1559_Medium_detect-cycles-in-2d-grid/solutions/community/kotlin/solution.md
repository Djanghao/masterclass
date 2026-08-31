# 2 approaches : DSU and DFS

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/950664/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/950664/)

---

**DSU**
```
fun containsCycle(grid: Array<CharArray>): Boolean {
	val R = grid.size
	val C = grid[0].size
	val dsu = DSU(R * C)

	fun encode(r: Int, c: Int) = r * C + c // 2d to 1d since dsu operates in 1d

	for (i in 0 until R) {
		for (j in 0 until C) {
			if (i > 0 && grid[i - 1][j] == grid[i][j]) {
				if (dsu.union(encode(i - 1, j), encode(i, j)).not()) return true
			}
			if (j > 0 && grid[i][j - 1] == grid[i][j]) {
				if (dsu.union(encode(i, j - 1), encode(i, j)).not()) return true
			}
		}
	}
	return false
}

class DSU(val N: Int) {
    private val parent = IntArray(N)
    private val size = IntArray(N)
    
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
        } else {
            size[yP] += size[xP]
            parent[xP] = yP
        }
        return true
    }
}
```

**DFS**
```
fun containsCycle(grid: Array<CharArray>): Boolean {
        val R = grid.size
        val C = grid[0].size
        val (WHITE, GRAY, BLACK) = listOf(0, 1, 2)
        val dirs = listOf(listOf(-1, 0), listOf(1, 0), listOf(0, 1), listOf(0, -1))
        val color = Array(R) { IntArray(C) }

        fun dfs(r: Int, c: Int, pR: Int = -1, pC: Int = -1): Boolean {
            color[r][c] = GRAY
            for ((dX, dY) in dirs) {
                val (newR, newC) = dX + r to dY + c
                if (
                    newR in 0 until R && newC in 0 until C &&
                    grid[newR][newC] == grid[r][c] &&
                    newR != pR && newC != pC
                ) {
                    val newColor = color[newR][newC]
                    if (newColor == WHITE && dfs(newR, newC, r, c)) {
                        return true
                    } else if (newColor == GRAY) {
                        return true
                    }
                }
            }
            color[r][c] = BLACK
            return false
        }
        for (i in 0 until R) {
            for (j in 0 until C) {
                if (color[i][j] == WHITE) {
                    if (dfs(i, j)) return true
                }
            }
        }

        return false
    }
```

Source: https://discord.com/channels/612060087900438538/612587060099940372/746766333814767636

# Kotlin 300ms / bfs + bit manipulation /  Detailed explanation

**Author:** SatanBriber
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694833/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694833/)

---

Let's break down problem to 2 tasks
1) Traverse the grid and find optimal path to one node
2) Mainatain the state of the keys

To tackle the first one we need to use bfs, because unlike dfs it will give us optimal solution from the first time we will visit the cell
We simply should maintain the matrix "visited" [x, y]

Example: https://leetcode.com/problems/shortest-path-to-get-food/

The second one is much harder, we also need to add state of keys such as
[x, y, key], since we can visit the cell with different set of keys,  naive approach is to create variable of set such us 

```
private class State(
        val x: Int,
        val y: Int,
        val steps: Int,
        var keys: SetOf<Char>
    )
```

but it will give us Time out exception because we need to do multiply Set.copy operations, so we need to divise a constant time approach

We know that we will have at max 6 keys, so imagine the chain such as
63 = 111111 in binary implementation, next is quick summary of operations

get key **index** -> (key.toInt() - 'a'.toInt()) -> 'c' - 'a' -> 2
get key cell -> 1 shl index -> 1 shl 2 -> 100
check if present in chain -> 010 and 001 -> 000
add to chain -> 010 or 001 -> 011

Good example, a bit easier since you can keep dynamite as is, try it as a practice!
https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/

```
class Solution {
    val directions = arrayOf(
        0 to -1,
        0 to 1,
        1 to 0,
        -1 to 0
    )

    private class State(
        val x: Int,
        val y: Int,
        val steps: Int,
        var keys: Int
    )

    fun shortestPathAllKeys(grid: Array<String>): Int {
        val queue = LinkedList<State>()
        val n = grid.size
        val m = grid[0].length

        var start = 0 to 0
        val keys = mutableSetOf<Char>()
        val locks = mutableSetOf<Char>()
        var allKeys = 0

        for (i in 0 until n) {
            for (j in 0 until m) {
                when (grid[i][j]) {
                    '@' -> start = i to j
                    in 'a'..'f' -> {
                        keys.add(grid[i][j])
                        allKeys += 1 shl (grid[i][j].toInt() - 'a'.toInt())
                    }

                    in 'A'..'F' -> locks.add(grid[i][j])
                }
            }
        }

        queue.add(State(start.first, start.second, 0, 0))

        return traverse(grid, queue, allKeys, keys, locks)
    }

    private fun traverse(
        grid: Array<String>,
        queue: LinkedList<State>,
        allKeys: Int,
        keys: MutableSet<Char>,
        locks: MutableSet<Char>
    ): Int {
        val n = grid.size
        val m = grid[0].length
        val visited = Array(n) {
            Array(m) {
                IntArray(allKeys + 1) {
                    -1
                }
            }
        }

        while (queue.isNotEmpty()) {
            val node = queue.poll()
            visited[node.x][node.y][node.keys] = node.steps

            for ((i, j) in directions) {
                val newX = node.x + i
                val newY = node.y + j
                if (newX in 0 until n && newY in 0 until m && grid[newX][newY] != '#') {
                    val step = State(
                        newX, newY, node.steps + 1, node.keys
                    )
                    
                    val s = grid[newX][newY]
                    if (keys.contains(s)) {
                        val decoded = 1 shl (s.toInt() - 'a'.toInt()) 
                        step.keys = step.keys or decoded
                    } else if (locks.contains(s)) {
                        val decoded = 1 shl (s.toInt() - 'A'.toInt())
                        if ((step.keys and decoded) == 0) continue
                    }
                    
                    if (step.keys == allKeys) return step.steps
                    
                    if (visited[newX][newY][step.keys] == -1) {
                        visited[newX][newY][step.keys] = step.steps
                        queue.add(step)
                    }
                }
            }
        }
        return -1
    }
}
```
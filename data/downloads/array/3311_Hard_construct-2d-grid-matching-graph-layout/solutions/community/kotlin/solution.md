# kotlin code

**Author:** _-arthur-_
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5881711/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5881711/)

---

# Code
```kotlin []
class Solution {
    fun constructGridLayout(n: Int, edges: Array<IntArray>): Array<IntArray> {
        val adj = HashMap<Int, HashSet<Int>>()

        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]

            adj.computeIfAbsent(u){ HashSet<Int>() }.add(v)
            adj.computeIfAbsent(v){ HashSet<Int>() }.add(u)
        }

        var start = -1
        var min = Int.MAX_VALUE

        for ((k, v) in adj) {
            if (min > v.size) {
                start = k
                min = v.size
            }
        }
        
        var queue = LinkedList<Int>()
        val visit = HashMap<Int, IntArray>()

        queue.offer(start)

        var h = 0
        var w = 0


        while (queue.isNotEmpty()) {
            val curr = queue.poll()

            if (curr == start) {
                visit.put(start, intArrayOf(0, 0))

                val directs = arrayOf(intArrayOf(0, 1), intArrayOf(1, 0))
                var idx = 0

                for (next in adj.getOrDefault(curr, mutableListOf<Int>())) {
                    val direct = directs[idx++]
                    queue.add(next)
                    visit.put(next, intArrayOf(direct[0], direct[1]))

                    h = maxOf(h, direct[0] + 1)
                    w = maxOf(w, direct[1] + 1)
                }
            } else {
                for (next in adj.getOrDefault(curr, mutableListOf<Int>())) {
                    if(visit.containsKey(next)) continue

                    queue.add(next)
                    var row = -1
                    var col = -1
                    var connected = 0

                    for (cell in adj.getOrDefault(next, mutableListOf<Int>())) {
                        if (!visit.containsKey(cell)) continue

                        val crd = visit.get(cell)!!
                        val y = crd[0]
                        val x = crd[1]

                        row = maxOf(row, y)
                        col = maxOf(col, x)
                        connected += 1
                    }

                    if (connected == 1) {
                        if (row == 0) {
                            visit.put(next, intArrayOf(row, col + 1))

                            w = maxOf(w, col + 2)
                        }

                        if (col == 0) {
                            visit.put(next, intArrayOf(row + 1, col))

                            h = maxOf(h, row + 2)
                        }
                    } else {
                        visit.put(next, intArrayOf(row, col))
                    }
                }
            }
        }

        val result = Array(h){ IntArray(w) }

        for ( (v, crd) in visit) {
            result[crd[0]][crd[1]] = v
        }


        return result
    }
}
```
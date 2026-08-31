# :: Kotlin :: READABLE SOLUTION

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/cat-and-mouse/solutions/3412329/](https://leetcode.com/problems/cat-and-mouse/solutions/3412329/)

---


# Code
```
data class Turn(val mouse: Int, val cat: Int, val turn: Int)


class Solution {
    val DRAW = 0
    val MOUSE_WIN = 1
    val CAT_WIN = 2

    val MOUSE_TURN = 1
    val CAT_TURN = 2

    fun catMouseGame(graph: Array<IntArray>): Int {
        val n = graph.size
        val status = Array(n){ Array(n){ IntArray(3){ DRAW } } }
        val indegree = Array(n){ Array(n){ IntArray(3){ 0 } } }

        for (mouse in 0 until n) {
            for (cat in 0 until n) {
                indegree[mouse][cat][MOUSE_TURN] = graph[mouse].size
                indegree[mouse][cat][CAT_TURN] = graph[cat].filter{ it > 0 }.size
            }
        }

        val queue = LinkedList<Turn>()
        for (cat in 0 until n) {
            for (turn in MOUSE_TURN..CAT_TURN) {
                status[0][cat][turn] = MOUSE_WIN
                queue.offer(Turn(0, cat, turn))

                if ( cat > 0) {
                    status[cat][cat][turn] = CAT_WIN
                    queue.offer(Turn(cat, cat, turn))
                }
            }
        }

        while(!queue.isEmpty()) {
            val curr = queue.poll()
            val statusSoFar = status[curr.mouse][curr.cat][curr.turn]

            for (parent in parents(curr, graph)) {
                val statusOfParent = status[parent.mouse][parent.cat][parent.turn]
                if (statusOfParent != DRAW) continue

                if ( (parent.turn == MOUSE_TURN && statusSoFar == MOUSE_WIN) 
                  || (parent.turn == CAT_TURN   && statusSoFar == CAT_WIN) ) { 
                    status[parent.mouse][parent.cat][parent.turn] = statusSoFar
                    queue.add(parent)
                } else if ( --indegree[parent.mouse][parent.cat][parent.turn] == 0 ) {
                    status[parent.mouse][parent.cat][parent.turn] = if (parent.turn == MOUSE_TURN) CAT_WIN else MOUSE_WIN
                    queue.add(parent)
                }
            }
        }

        return status[1][2][MOUSE_TURN]
    } 

    fun parents(curr: Turn, graph: Array<IntArray>): List<Turn> {
        val result = mutableListOf<Turn>()

        if (curr.turn == CAT_TURN) {
            for (mouse in graph[curr.mouse]) {
                result.add(Turn(mouse, curr.cat, MOUSE_TURN))
            }
        } else {
            for (cat in graph[curr.cat]) {
                if (cat == 0) continue
                result.add(Turn(curr.mouse, cat, CAT_TURN))
            }
        }

        return result
    }
}
```
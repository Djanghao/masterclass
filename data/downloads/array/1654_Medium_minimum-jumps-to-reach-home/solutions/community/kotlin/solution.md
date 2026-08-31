# BFS

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/936339/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/936339/)

---

Neighbours is formed by the current state of the node.
If current state has moved forward, then we can go either back or forward.
If current state has moved backward, then we can only go forward.


```
    fun minimumJumps(forbidden: IntArray, a: Int, b: Int, target: Int): Int {
        val banned = forbidden.toSet()
		val max = forbidden.max()!! + a + b + target
        val queue: Queue<Pair<Int, Boolean>> = LinkedList()
        val dist: MutableMap<Pair<Int, Boolean>, Int> = HashMap()
        queue.offer(0 to true)
        dist[0 to true] = 0
        
        fun neighbours(node: Pair<Int, Boolean>): List<Pair<Int, Boolean>> {
            val ans: MutableList<Pair<Int, Boolean>> = ArrayList()
            var (loc, canGoBack) = node
            var newLoc = loc + a
            if (newLoc < max && banned.contains(newLoc).not()) {
                ans.add(newLoc to true)
            }
            if (canGoBack) {
                newLoc = loc - b
                if (newLoc >= 0 && banned.contains(newLoc).not()) {
                    ans.add(newLoc to false)
                }
            }
            return ans
        }
        
        while (queue.isNotEmpty()) {
            val node = queue.poll()
            if (node.first == target) {
                return dist[node]!!
            }
            for (nei in neighbours(node)) {
                if (dist.contains(nei).not()) {
                    dist[nei] = 1 + dist[node]!!
                    queue.offer(nei)
                }
            }
        }
        
        return -1
    }
```

Source: https://bit.ly/36AlnAl
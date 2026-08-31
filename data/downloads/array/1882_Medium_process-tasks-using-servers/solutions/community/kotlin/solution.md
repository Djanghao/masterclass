# Beats 100%

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/4458391/](https://leetcode.com/problems/process-tasks-using-servers/solutions/4458391/)

---

# Code
```
class Solution {
    fun assignTasks(servers: IntArray, tasks: IntArray): IntArray {
        val freeServers = PriorityQueue<Server> { a, b ->
            if (a.size == b.size) {
                a.index.compareTo(b.index)
            } else {
                a.size.compareTo(b.size)
            }
        }
        val busyServers = PriorityQueue<Server> { a, b ->
            if (a.timeAtFree == b.timeAtFree) {
                if (a.size == b.size) {
                    a.index.compareTo(b.index)
                } else {
                    a.size.compareTo(b.size)
                }
            } else {
                a.timeAtFree.compareTo(b.timeAtFree)
            }
        }
        servers.forEachIndexed { index, i -> freeServers.offer(Server(index, i, 0)) }

        val ans = IntArray(tasks.size)

        var i = 0
        var time = 0
        while (i <= tasks.lastIndex) {
            while (busyServers.isNotEmpty() && busyServers.peek().timeAtFree <= time) {
                freeServers.offer(busyServers.poll())
            }

            if (freeServers.isEmpty() && busyServers.isNotEmpty()) {
                time = busyServers.peek().timeAtFree
                continue
            }

            val task = tasks[i]
            val server = freeServers.poll()
            ans[i] = server.index
            busyServers.offer(server.copy(timeAtFree = time + task))
            i++
            time = maxOf(time, i)
        }

        return ans
    }

    data class Server(val index: Int, val size: Int, val timeAtFree: Int)
}
```
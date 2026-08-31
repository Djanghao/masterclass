# Min Heap (PriorityQueue) and Ordered Set (TreeSet) in Kotlin

**Author:** dirlik
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/3928951/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/3928951/)

---

Improved version of my [basic solution](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/3928920/basic-brute-force-style-approach-in-kotlin-o-n-k-and-o-k/). Using an ordered set to store only the available servers and a priority queue to keep end times cuts down run time and storage significantly.
# Intuition
Store available servers in an ordered set, since the requests come in order. Keep a min heap of times when servers are going to become available again. Loop through requests and add servers to available/busy according to the time.

# Approach
- Add all servers to available set.
- Loop through requests.
- If the current time is greater than the available times of servers in the busy server heap, add them to the available server set.
- Check if the k % i server, or the next one is available. If it is not then take the first available server. **Bonus of using ordered set**.
- Increment requests taken counter for the server and add it to the busy heap.
- Loop through requests taken and return the servers with the most.


# Complexity
- Time complexity: $$O(n*log(n))$$

- Space complexity: $$O(maxOf(n, k))$$ worst case (full set/heap)

# Code
```
class Solution {
    fun busiestServers(k: Int, arrival: IntArray, load: IntArray): List<Int> {
        val availableServers = TreeSet<Int>() { a, b -> a - b }
        val busyServers = PriorityQueue<Pair<Int, Int>>() { a, b -> a.second - b.second } // Pair of (server, availableTime)
        val requestsTaken = IntArray(k) { 0 }

        for (i in 0 until k) {
            availableServers.add(i)
        }

        for (requestNumber in 0 until arrival.size) {
            while (busyServers.isNotEmpty() && busyServers.peek().second <= arrival[requestNumber]) {
                availableServers.add(busyServers.poll().first)
            }

            if (availableServers.isNotEmpty()) {
                val server = availableServers.ceiling(requestNumber % k) ?: availableServers.first()
                requestsTaken[server]++
                availableServers.remove(server)
                busyServers.offer(Pair(server, arrival[requestNumber] + load[requestNumber]))
            }
        }

        var maxLoad = 0
        var result = mutableListOf<Int>()
        for ((server, load) in requestsTaken.withIndex()) {
            if (load > maxLoad) {
                maxLoad = load
                result = mutableListOf(server)
            } else if (load == maxLoad) {
                result.add(server)
            }
        }

        return result
    }
}
```
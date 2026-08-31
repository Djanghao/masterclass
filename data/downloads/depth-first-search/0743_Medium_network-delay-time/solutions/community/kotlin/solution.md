# Kotlin | Dijkstra, Bellman-Ford, SPFA, SPFA+heap

**Author:** SamoylenkoDmitry
**Votes:** 3
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/2036864/](https://leetcode.com/problems/network-delay-time/solutions/2036864/)

---

```
const val MAX = Int.MAX_VALUE/2
data class P (val to: Int, val totalTime: Int)
data class Edge (val to: Int, val time: Int)
class Solution {
    
    //Bellman-Ford
    fun networkDelayTimeB(times: Array<IntArray>, n: Int, k: Int): Int {
        val timeTo = IntArray(n) { MAX }
        timeTo[k-1] = 0
        repeat(n-1) {
            times.forEach { (from,to,time)->
                timeTo[to-1] = minOf(timeTo[from-1] + time, timeTo[to-1])
            }
        }
        return when(val result = timeTo.max()!!) {
            MAX -> -1
            else -> result
        }
    }
    
    
    //Dijkstra
    fun networkDelayTimeD(times: Array<IntArray>, n: Int, k: Int): Int {
        val fromTo = mutableMapOf<Int, MutableList<Edge>>()
        times.forEach { (from,to,time)->
            fromTo.getOrPut(from, { mutableListOf() }) += Edge(to, time)
        }
        val queue = PriorityQueue<P>(compareBy<P>{ it.totalTime })
        val visited = mutableSetOf<Int>()
        queue.add(P(k, 0))
        var maxTime = 0
        while (queue.isNotEmpty()) {
            val (from, totalTime) = queue.poll()
            if (visited.add(from-1)) {
                maxTime = maxOf(maxTime, totalTime)
                if (visited.size == n) return maxTime
                fromTo[from]?.forEach { (to,time)->
                    queue += P(to, time + totalTime)
                }
            }
        }
        return -1
    }
    
    //Shortest Path FAster
    fun networkDelayTimeS(times: Array<IntArray>, n: Int, k: Int): Int {
        val timeTo = IntArray(n) { MAX }
        timeTo[k-1] = 0
        val fromTo = mutableMapOf<Int, MutableList<Edge>>()
        times.forEach { (from,to,time)->
            fromTo.getOrPut(from-1, { mutableListOf() }) += Edge(to-1, time)
        }
        val queue = ArrayDeque<Int>()
        queue.add(k-1)
        while (queue.isNotEmpty()) {
            val from = queue.poll()
            fromTo[from]?.forEach { (to,time)->
                if (timeTo[from] + time < timeTo[to]) {
                    timeTo[to] = timeTo[from] + time
                    queue += to
                }
            }
        }
        return when(val result = timeTo.max()!!) {
            MAX -> -1
            else -> result
        }
    }
    
    //Shortest Path FAster + heap
    fun networkDelayTime(times: Array<IntArray>, n: Int, k: Int): Int {
        val timeTo = IntArray(n) { MAX }
        timeTo[k-1] = 0
        val fromTo = mutableMapOf<Int, MutableList<Edge>>()
        times.forEach { (from,to,time)->
            fromTo.getOrPut(from-1, { mutableListOf() }) += Edge(to-1, time)
        }
        val queue = PriorityQueue<P>(compareBy<P>{ it.totalTime })
        queue.add(P(k-1, 0))
        while (queue.isNotEmpty()) {
            val (from, totalTime) = queue.poll()
            fromTo[from]?.forEach { (to,time)->
                val newTime = totalTime + time
                if (newTime < timeTo[to]) {
                    timeTo[to] = newTime 
                    queue += P(to, newTime)
                }
            }
        }
        return when(val result = timeTo.max()!!) {
            MAX -> -1
            else -> result
        }
    }
}
```
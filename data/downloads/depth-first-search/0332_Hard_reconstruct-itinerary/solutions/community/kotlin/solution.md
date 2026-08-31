# Kotlin 95% faster, DFS

**Author:** kremlev182
**Votes:** 3
**Link:** [https://leetcode.com/problems/reconstruct-itinerary/solutions/1876511/](https://leetcode.com/problems/reconstruct-itinerary/solutions/1876511/)

---

``` 
class Solution {
    fun findItinerary(tickets: List<List<String>>): List<String> {
        val res = mutableListOf<String>()
        //to push el in alp order
        val map = HashMap<String, PriorityQueue<String>>()

        //init map
        for (t in tickets) {
            map.getOrPut(t[0]) { PriorityQueue() }.add(t[1])
        }

        fun dfs(departure: String) {
            while (map.contains(departure) && !map[departure]!!.isEmpty()) {
                dfs(map[departure]!!.poll())
            }
            res.add(0, departure)
        }

        dfs("JFK")

        return res
    }
}
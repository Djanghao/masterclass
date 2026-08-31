# Kotlin solution

**Author:** regxl
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/3967751/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/3967751/)

---



# Code
```
class Solution {
    fun countPaths(n: Int, roads: Array<IntArray>): Int {
        val time = Array(n){Long.MAX_VALUE}
        val count = Array<Long>(n){0}
        val graph = Array(n){ArrayList<Pair<Int, Long>>()}
        for(edge in roads){
            graph[edge[0]].add(Pair(edge[1], edge[2].toLong()))
            graph[edge[1]].add(Pair(edge[0], edge[2].toLong()))
        }
        val mod = (1e9+7).toLong()
        val q = PriorityQueue<Pair<Long, Int>>(){a,b -> (a.first - b.first).toInt()}
        q.offer(Pair(0,0))
        time[0] = 0
        count[0] = 1
        while(q.isNotEmpty()){
            val p = q.poll()
            for(adjNode in graph[p.second]){
                val node = adjNode.first
                val t = adjNode.second
                if(t + p.first < time[node]){
                    time[node] = t + p.first
                    count[node] = count[p.second]
                    q.offer(Pair(time[node], node))
                }
                else if(t + p.first == time[node]){
                    count[node] = (count[node] + count[p.second]) % mod 
                }
            }
        }
        return count[n-1].toInt()
    }
}
```
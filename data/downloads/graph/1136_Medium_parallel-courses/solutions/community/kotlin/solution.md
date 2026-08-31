# Kotlin, Topologic Sort Time: O(V+E) Space: O(V)

**Author:** Axzra
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/4940031/](https://leetcode.com/problems/parallel-courses/solutions/4940031/)

---


```
class Solution {
    fun minimumSemesters(n: Int, relations: Array<IntArray>): Int {
        var preReqs = IntArray(n) { 0 }
        val req = HashMap<Int, HashSet<Int>>()
        relations.forEach { r ->
            val (prev, next) = r
            preReqs[next-1] += 1
            val reqs = req.getOrDefault(prev, HashSet<Int>())
            reqs.add(next)
            req[prev] = reqs
        }

        val q = LinkedList<Int>()
        for(i in 0 until preReqs.size) {
            if(preReqs[i] == 0) q.add(i+1)
        }

        if(q.isEmpty()) return -1
        var visited = 0
        var sems = 0
        while(!q.isEmpty()) {
            val size = q.size
            for(i in 0 until size) {
                val course = q.poll()
                visited += 1
                if(req.contains(course)) {
                    val links = req[course]!!
                    links.forEach { l ->
                        preReqs[l-1] -= 1
                        if(preReqs[l-1] == 0) {
                            q.add(l)
                        }
                    }
                }
            }
            sems += 1
        }

        if(visited != n) return -1
        return sems
    }
}
```
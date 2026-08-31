# Union find Kotlin

**Author:** seonwoo960000
**Votes:** 0
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/1578789/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/1578789/)

---

- parent : parent element of specified element in the union 
- group : contains all elements in the (union)group 
- prohibited : contains all elements that can't coexist with elements in specified (union)group 
```
class Solution {
    fun friendRequests(n: Int, restrictions: Array<IntArray>, requests: Array<IntArray>): BooleanArray {
        val parent = MutableList<Int>(n) { it }
        val group = MutableList<HashSet<Int>>(n) { hashSetOf(it) }
        val prohibited = MutableList<HashSet<Int>>(n) { hashSetOf() }

        for (res in restrictions) {
            val (u, v) = res
            prohibited[u].add(v)
            prohibited[v].add(u)
        }

        val result = mutableListOf<Boolean>()
        for (req in requests) {
            val (u, v) = req
            val pu = findParent(u, parent)
            val pv = findParent(v, parent)
            if (prohibited[pu].any { x -> group[pv].contains(x) } || prohibited[pv].any { x -> group[pu].contains(x) }) {
                result.add(false)
            } else {
                result.add(true) 
                parent[pv] = pu 
                prohibited[pu].addAll(prohibited[pv])
                group[pu].addAll(group[pv])
            }
        }
        
        return result.toBooleanArray()
    }
    
    private fun findParent(u: Int, parent: MutableList<Int>): Int {
        if (parent[u] == u) return u 
        
        parent[u] = findParent(parent[u], parent) 
        return parent[u]
    }
}
```
# Union Find, easy and beats > 90% and > 90%

**Author:** CalicoLight
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/5598529/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/5598529/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun earliestAcq(logs: Array<IntArray>, n: Int): Int {
        val t = TreeMap<Int, Pair<Int, Int>>()
        for(l in logs) {
            t.put(l[0], Pair(l[1], l[2]))
        }
        val u = UnionFind(n)
        var counter = 0
        t.forEach() { (k, v) ->
            if(u.union(v.first, v.second)) {
                counter++
            }
            if(counter == n-1) return k
        }
        return -1
    }
}

class UnionFind(val size: Int) {
    val root = IntArray(size) { 0 }
    val rank = IntArray(size) { 1 }

    init {
        for(i in 0 until size) {
            root[i] = i
        }
    }

    fun find(a: Int): Int {
        if(root[a] == a) {
            return a
        }

        root[a] = find(root[a])
        return root[a]
    }

    fun union(a: Int, b: Int): Boolean {
        val rootA = find(a)
        val rootB = find(b)

        return if(rootA != rootB) {
            if(rank[rootA] > rank[rootB]) {
                root[rootB] = rootA
            } else if (rank[rootA] < rank[rootB]) {
                root[rootA] = rootB
            } else {
                root[rootA] = rootB
                rank[rootB]++
            }
            true
        } else {
            false
        }
    }
}
```
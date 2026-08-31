# [Kotlin] DFS | Directed Graph

**Author:** subhag-dev
**Votes:** 1
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/4645547/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/4645547/)

---

# Intuition
Build a directed graph out of given bombs based on their ranges (or reachability)

# Approach
1. Build the graph as an adjacency list
2. DFS from each bomb as starting point and calculate number of total bombs detonated
3. Keep track of maximum of the step 2 evaluation, which is our answer 

# Complexity
- Time complexity:
O(n*n)

- Space complexity:
O(n*n)

# Code
```
class Solution {

    private var n = 0
    private lateinit var adj: Array<MutableList<Int> >
        
    fun inRange(bomb: IntArray, target: IntArray): Boolean {
        val x = bomb[0]; val y = bomb[1]; val r = bomb[2];
        val x1 = target[0]; val y1 = target[1];
        val xx = (x1-x).toLong() * (x1-x).toLong()
        val yy = (y1-y).toLong() * (y1-y).toLong()
        val rr = r.toLong() * r.toLong()
        return xx + yy <= rr
    }

    fun init(bombs: Array<IntArray>) {
        n = bombs.size
        adj = Array(n) { mutableListOf<Int>() }
        for (i in 0 until n) {
            for (j in 0 until n) {
                if (j != i && inRange(bombs[i], bombs[j])) {
                    adj[i].add(j)
                }
            }
        }
    }

    fun dfs(u: Int, visited: BooleanArray) {
        if (visited[u]) return
        visited[u] = true
        for (v in adj[u]) {
            dfs(v, visited)
        }
    }

    fun maximumDetonation(bombs: Array<IntArray>): Int {
        init(bombs)
        var best = 0; 
        for (i in 0 until n) {
            var cnt = 0;
            val visited = BooleanArray(n) { false } 
            dfs(i, visited)
            for (j in 0 until n) {
                if (visited[j]) {
                    cnt++
                }
            }
            best = maxOf(best, cnt)
        }
        return best
    }

}
```
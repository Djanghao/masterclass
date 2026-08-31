# 🚀️🔥️ Kotlin/Java O(n) DFS - without HashMap

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3344113/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3344113/)

---

# Approach
Hints tells us that:
1. Each node can be a part of at most single cycle (because there is at most 1 edge coming out of it).
2. We'll need to visit every node at most 1 time to find the answer.

So basically we need to traverse it somehow with these additions:
- We can use DFS
- We have to start from every node, because the graph is not guaranteed to be single connected component
- We need to save how far away was each node in current iteration - we'll need it, so we'll know it has been encountered in current iteration and how far we are from it.

# Complexity
- Time complexity:
$$O(n)$$ - we need to visit every node

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    private lateinit var distance: HashMap<Int, Int>
    private lateinit var visited: BooleanArray
    private lateinit var edges: IntArray

    fun longestCycle(edges: IntArray): Int {
        this.edges = edges
        visited = BooleanArray(edges.size)
        distance = hashMapOf()
        var longestCycle = -1
        for (v in edges.indices) {
            if (visited[v]) continue
            distance = hashMapOf()
            longestCycle = maxOf(longestCycle, dfs(v, -1))
        }
        return longestCycle
    }

    private fun dfs(node: Int, parent: Int): Int {
        if (visited[node]) return -1
        visited[node] = true
        distance[node] = (distance[parent] ?: 0) + 1

        val next = edges[node]
        if (next == -1) return -1

        if (distance.containsKey(next)) {
            return distance[node]!! - distance[next]!! + 1
        }
        return dfs(next, node)
    }
}
```

After playing around with it, I found out we don't even need to keep distances, if we just compute it while returning back via call stack.

# Code 
```
class Solution {
    private HashSet<Integer> currentlyVisited;
    private boolean[] visited;
    private int[] edges;

    public int longestCycle(int[] edges) {
        this.edges = edges;
        int longestCycle = -1;
        visited = new boolean[edges.length];
        for (int v = 0; v < edges.length; v++) {
            if (visited[v]) continue;
            currentlyVisited = new HashSet<>();
            longestCycle = Math.max(dfs(v, -1), longestCycle);
        }
        return longestCycle;
    }

    private int lastCycle = -1;

    private int dfs(int node, int parent) {
        if (visited[node]) return -1;
        visited[node] = true;
        currentlyVisited.add(node);

        int next = edges[node];
        if (next == -1) return -1;

        if (currentlyVisited.contains(next)) {
            lastCycle = next;
            return 1;
        }

        int res = dfs(next, node);

        if (lastCycle != -1) {
            if (lastCycle == node) {
                lastCycle = -1;
            }

            return res + 1;
        } else {
            return res;
        }
    }
}
```


---

\uD83D\uDC4D\uFE0F\uD83D\uDC4D\uFE0F If you like this solution or find it helpful, please upvote this post. \uD83D\uDC4D\uFE0F\uD83D\uDC4D\uFE0F
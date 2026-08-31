# [Java/Python] Keep 3 Biggest Neighbours

**Author:** lee215
**Votes:** 134
**Link:** [https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/1953706/](https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/1953706/)

---

# **Intuition**
We don't need to check all possible sequences,
but only some big nodes.
<br>

# **Explanation**
For each edge `(i, j)` in `edges`,
we find a neighbour `ii` of node `i`,
we find a neighbour `jj` of node `i`,
If `ii, i, j,jj` has no duplicate, then that's a valid sequence.

Ad the intuition mentioned,
we don't have to enumearte all neignbours,
but only some nodes with big value.

But how many is enough?
I'll say 3.
For example, we have `ii, i, j` now,
we can enumerate 3 of node `j` biggest neighbour,
there must be at least one node different node `ii` and node `i`.

So we need to iterate all edges `(i, j)`,
for each node we keep at most 3 biggest neighbour, which this can be done in `O(3)` or `O(log3)`.
<br>

# **Complexity**
Time `O(n + m)`
Space `O(n + m)`
<br>

**Java**
```java
    public int maximumScore(int[] A, int[][] edges) {
        int n = A.length;
        PriorityQueue<Integer>[] q = new PriorityQueue[n];
        for (int i = 0; i < n; i++)
            q[i] = new PriorityQueue<>((a, b) -> A[a] - A[b]);
        for (int[] e : edges) {
            q[e[0]].offer(e[1]);
            q[e[1]].offer(e[0]);
            if (q[e[0]].size() > 3) q[e[0]].poll();
            if (q[e[1]].size() > 3) q[e[1]].poll();
        }
        int res = -1;
        for (int[] edge : edges)
            for (int i : q[edge[0]])
                for (int j : q[edge[1]])
                    if (i != j && i != edge[1] && j != edge[0])
                        res = Math.max(res, A[i] + A[j] + A[edge[0]] + A[edge[1]]);  
        return res;
    }
```
**Python**
```py
    def maximumScore(self, A, edges):
        n = len(A)
        G = [[] for i in range(n)]
        for i,j in edges:
            G[i].append([A[j], j])
            G[j].append([A[i], i])
        for i in range(n):
            G[i] = nlargest(3, G[i])
            
        res = -1
        for i,j  in edges:
            for vii, ii in G[i]:
                for vjj, jj in G[j]:
                    if ii != jj and ii != j and j != ii:
                        res = max(res, vii + vjj + A[i] + A[j])
        return res
```

# [Java] | ✅Adjacency List Graph | PriorityQueue | TopK | Easy to Understand | 50ms🔥

**Author:** byegates
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2899105/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2899105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each node, we need it's own value (can be negative) and it's top k neighbor with positive values .
# Approach
<!-- Describe your approach to solving the problem. -->
Create the adjacency list graph first, and loop each node to get max start sum.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(V+E)
create and iterate over graph
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(V+E+k)
V+E to create graph
k size priority queue

# Code
[50ms Submission](https://leetcode.com/problems/maximum-star-sum-of-a-graph/submissions/857816006/)
```java
class Solution {
    public int maxStarSum(int[] vals, int[][] edges, int k) {
        int res = vals[0];
        if (k == 0) { // corner case
            for (var x : vals) res = Math.max(res, x);
            return res;
        }

        // create graph
        int n = vals.length;
        List<Integer>[] g = new List[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (var e : edges) {
            if (vals[e[1]] > 0) g[e[0]].add(vals[e[1]]);
            if (vals[e[0]] > 0) g[e[1]].add(vals[e[0]]);
        }

        for (int i = 0; i < n; i++) res = Math.max(res, topK(g[i], vals[i], k));
        return res;
    }

    private int topK(List<Integer> l, int res, int k) {
        Queue<Integer> q = new PriorityQueue<>();
        for (int x : l) {
            if (q.size() < k) q.offer(x);
            else if (x > q.peek()) {
                q.poll();
                q.offer(x);
            }
        }

        while (!q.isEmpty()) res += q.poll();

        return res;
    }
}
```
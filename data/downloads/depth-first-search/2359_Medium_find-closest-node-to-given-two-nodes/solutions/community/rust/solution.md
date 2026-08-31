# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line (DFS / Dijkstra)

**Author:** tr1nity
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3095974/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3095974/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord Study Group](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [Screencast](https://www.youtube.com/watch?v=ySmwUSc9nU4&list=PLBu4Bche1aEWMj1TdpymXbD8Tn8xKVYwj&index=25) if you are interested.

**Approach 1: DFS**

Since there is only at most 1 outgoing edge, we can simply use DFS.

<iframe src="https://leetcode.com/playground/SPiUkFTy/shared" frameBorder="0" width="100%" height="500"></iframe>

**Approach 2: Dijkstra**

Dijkstra approach in this question is not recommended but here's how we do in case there are multiple outgoing edges.

```cpp
class Solution {
public:
    // https://leetcodethehardway.com/tutorials/graph-theory/dijkstra
    template<typename T_pair, typename T_vector>
    void dijkstra(T_pair &g, T_vector &dist, int start) {
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
      dist[start] = 0;
      pq.push({start, 0});
      while (!pq.empty()) {
        auto [u_node, u_cost] = pq.top(); pq.pop();
        if (u_cost > dist[u_node]) continue;
        for (auto [v_node, v_cost] : g[u_node]) {
          if (dist[v_node] > dist[u_node] + v_cost) {
            dist[v_node] = dist[u_node] + v_cost;
            pq.push({v_node, dist[v_node]});
          }
        }
      }
    }
    
    int closestMeetingNode(vector<int>& edges, int node1, int node2) {
        int n = edges.size();
        // d1[i]: shortest dist to node i starting from node 1
        // d2[i]: shortest dist to nodes i starting from node 2
        vector<int> d1(n, INT_MAX), d2(n, INT_MAX);
        // build the graph
        vector<vector<pair<int, int>>> g(n);
        // iterate each node
        for (int i = 0; i < n; i++) {
            // if there is outgoing edge from node i
            if (edges[i] != -1) {
                // by default, we define the dist to edges[i] is 1
                g[i].push_back({edges[i], 1});
            }
        }
        // build the dist for d1
        dijkstra(g, d1, node1);
        // build the dist for d2
        dijkstra(g, d2, node2);
        // iterate each node to find the min max dist
        int ans = -1, mi = INT_MAX;
        for (int i = 0; i < n; i++) {
            if (max(d1[i], d2[i]) < mi) {
                mi = max(d1[i], d2[i]);
                ans = i;
            }
        }
        return ans;
    }
};
```
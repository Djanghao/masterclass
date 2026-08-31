# 2 * DFS + 2 * BFS | C++ | O(N)

**Author:** meanjellybean
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/solutions/5888763/](https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/solutions/5888763/)

---

Root the Tree at $0$.

$1.1.$ Find the endpoints of the Diameter of the Tree. 
$1.2.$ This can be done by performing DFS twice to reach the farthest node.
$~~~ a.$ $1^{st}$ DFS - Finding the $1^{st}$ endpoint from $0$. Let's call this $u$.
$~~~ b.$ $2^{nd}$ DFS - Finding the $2^{nd}$ endpoint from $u$. Let's call this $v$.


$2.1.$ Claim: Start from any node. The last visited node would be either one of $u$ or $v$.
$2.2.$ Reason: If we root our Tree at any other point, and use the same concept to find diameter, the farthest node to reach would be one of the endpoints.

$3.$ Use BFS twice to find distances of all nodes from $u$ and $v$. The maximum of the two would be the answer for node $i$.

Time Complexity: $O(N)$
Space Complexity: $O(N)$


<h4> Code [C++] </h4>

```cpp []
class Solution {
private:
    int32_t n, u, v, dist;
    std::vector<std::vector<int32_t>> graph;
    std::vector<int32_t> dist_u, dist_v, answer;

public:
    std::vector<int32_t> lastMarkedNodes(std::vector<std::vector<int32_t>>& edges) {
        n = edges.size() + 1; 
        graph.resize(n); dist_u.assign(n, -1); dist_v.assign(n, -1); answer.resize(n);

        for(const std::vector<int32_t>& edge: edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }

        std::function<void(int32_t, int32_t, int32_t, int32_t&)> dfs = 
        [&](int32_t curr, int32_t prev, int32_t d, int32_t& w) -> void {
            if(d > dist) { dist = d; w = curr; }

            for(const int32_t& next: graph[curr]) {
                if(next == prev) continue;
                dfs(next, curr, d + 1, w);
            }
        };
        u = -1; dist = -1; dfs(0, -1, 0, u);
        v = -1; dist = -1; dfs(u, -1, 0, v);
        
        std::queue<int32_t> qbfs;
        std::function<void(std::vector<int32_t>&)> bfs = 
        [&](std::vector<int32_t>& dist_w) -> void {
            int32_t d = 1;

            while(!qbfs.empty()) {
                int32_t sz = qbfs.size();
                for(int32_t i = 0; i < sz; i++) {
                    int32_t node = qbfs.front();
                    for(const int32_t i: graph[node]) {
                        if(dist_w[i] != -1) continue;
                        dist_w[i] = d;
                        qbfs.push(i);
                    }
                    qbfs.pop();
                }
                ++d;
            }
        };
        dist_u[u] = 0; qbfs.push(u); bfs(dist_u);
        dist_v[v] = 0; qbfs.push(v); bfs(dist_v);

        for(int32_t i = 0; i < n; i++) answer[i] = (dist_u[i] > dist_v[i])? u: v;
        return answer;
    }
};
```
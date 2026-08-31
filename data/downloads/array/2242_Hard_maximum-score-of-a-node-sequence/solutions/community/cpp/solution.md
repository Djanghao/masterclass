# [C++] Beats 100% | Check for edges

**Author:** meKabhi
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/1954315/](https://leetcode.com/problems/maximum-score-of-a-node-sequence/solutions/1954315/)

---

Take every edge and find the top-scoring neighbors of both nodes of that edge. We need to find atmost 3 top scoring nodes because there may be overlap in neighbors. We can use the set to find top-scoring neighbors.

```
/* 
    Time: O(V+E)
    Space: O(V+E)
    Tags: Graph, Set, Sorting, Greedy
    Difficulty: H
*/

class Solution {
public:
    int maximumScore(vector<int> &scores, vector<vector<int>> &edges) {
        set<pair<int, int>> graph[scores.size()];
        for (auto edge : edges) {
            graph[edge[0]].insert({scores[edge[1]], edge[1]});
            graph[edge[1]].insert({scores[edge[0]], edge[0]});
            if (graph[edge[0]].size() > 3) graph[edge[0]].erase(graph[edge[0]].begin());
            if (graph[edge[1]].size() > 3) graph[edge[1]].erase(graph[edge[1]].begin());
        }
        int res = -1;
        for (auto edge : edges) {
            int ans = scores[edge[0]] + scores[edge[1]];
            for (auto node1 : graph[edge[0]]) {
                for (auto node2 : graph[edge[1]]) {
                    if (node1.second != edge[0] && node1.second != edge[1] && node2.second != edge[0] && node2.second != edge[1] && node2.second != node1.second)
                        res = max(res, ans + node1.first + node2.first);
                }
            }
        }
        return res;
    }
};
```
# MOST OPTIMIZE C++ CODE || BEGINNER FRIENDLY

**Author:** tin_le
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/5167743/](https://leetcode.com/problems/delete-tree-nodes/solutions/5167743/)

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
![image.png](./images/0.png)

# Code
```
class Solution {
public:
    int deleteTreeNodes(int nodes, vector<int>& parent, vector<int>& value) {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        vis.assign(nodes, 0);
        vector<vector<int>> graph(nodes);
        for(int i = 1; i < nodes; i++)
        {
            graph[parent[i]].push_back(i);
        }
        dfs(graph, 0, value);
        return nodes - res;
    }
    vector<int> vis;
    int res = 0;
    int dfs(vector<vector<int>>& graph, int node, vector<int>& value)
    {
        if(vis[node]) return 0;
        int sum = value[node];
        for(auto& nei : graph[node])
        {
            sum += dfs(graph, nei, value);
        }
        if(sum == 0)
        {
            res += countNode(graph, node);
        }
        return sum;
    }
    int countNode(vector<vector<int>>& graph, int node)
    {
        if(vis[node]) return 0;
        vis[node] = 1;
        int count = 1;
        for(auto& nei : graph[node])
        {
            count += countNode(graph, nei);
        }
        return count;
    }
};
```
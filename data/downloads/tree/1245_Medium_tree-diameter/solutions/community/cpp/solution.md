# [C++] Using DFS, easy to understand

**Author:** bombadil
**Votes:** 9
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/418837/](https://leetcode.com/problems/tree-diameter/solutions/418837/)

---

```
class Solution {
public:
    int treeDiameter(vector<vector<int>>& edges) {
        unordered_map<int, vector<int>> paths;
        for (const auto& it : edges) {
            paths[it[0]].push_back(it[1]);
            paths[it[1]].push_back(it[0]);
        }
        int start_node = edges[0][0];
        int ret = 0;
        int _ = dfs(start_node, INT_MIN, paths, ret);
        return ret;
    }
    
private:
    int dfs(int node, int parent, unordered_map<int, vector<int>>& paths, int& ret) {
        if (paths[node].size() == 1 && paths[node][0] == parent) return 1;
        
        int first_max = 0, second_max = 0;
        for (const auto& it : paths[node]) {
            if (it == parent) continue;
            
            int child_res = dfs(it, node, paths, ret);
            
            if (child_res > first_max) {
                second_max = first_max;
                first_max = child_res;
            } else if (child_res > second_max) {
                second_max = child_res;
            }
            ret = max(ret, first_max + second_max);
        }
        return first_max + 1;
    }
};
```
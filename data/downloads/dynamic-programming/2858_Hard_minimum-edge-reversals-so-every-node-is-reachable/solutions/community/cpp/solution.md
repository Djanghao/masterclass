# [C++ with explanation] DP in disguise of Graph

**Author:** Code-O-Maniac
**Votes:** 90
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052072/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052072/)

---

**Intuition**
* We need to reach every node from node $$i$$.
* This means there will be no incoming edges to $$i$$.
* This means $$i$$ should be the root node.
* The answer will be number of reversed edges while traversing the entire tree starting from node $$i$$.

**Can brute force work?**
* We need answer for each $$i$$ through $$[0,\\,n)$$
* DFS from each node $$i$$ will take $$O(n)$$
* The solution will be $$0(n ^ 2)$$. Hence, brute force **will not** work.

**How to optimize?**
* We are traversing the entire tree irrespective of the directed nature.
* In a tree, every node has only one parent. Think why?
* The tree is always fixed. We are not modifying the tree.
* So, during DFS, our recursive call will look like - $$dfs(node,\\,parent)$$.
* Since, we are traversing the tree $$n$$ times, there will be overlapping subproblems, where we would be calculating the answer again and again.
* Why not cache this? 

**Code**
```
class Solution {
    vector<vector<int>> graph;
    vector<vector<int>> revGraph;
    
    map<pair<int, int>, int> dp;
    
    int dfs(int node, int parent) {
        int ans = 0;
        
        if(dp.find({node, parent}) != dp.end())
            return dp[{node, parent}];
        
        for(auto &x:graph[node]) {
            if(x != parent)
                ans += dfs(x, node);
        }
        
        for(auto &x:revGraph[node]) {
            if(x != parent)
                ans += dfs(x, node) + 1;
        }
        
        return dp[{node, parent}] = ans;
    }
public:
    vector<int> minEdgeReversals(int n, vector<vector<int>>& edges) {
        graph = vector<vector<int>>(n);
        revGraph = vector<vector<int>>(n);
        dp.clear();
        
        for(auto x:edges) {
            graph[x[0]].push_back(x[1]);
            revGraph[x[1]].push_back(x[0]);
        }
        
        vector<int> ans;
        for(int i = 0; i < n; i++) {
            ans.push_back(dfs(i, -1));
        }
        
        return ans;
    }
};
```
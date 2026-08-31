# C++ Code using DFS (Beats 100%)

**Author:** rohitzerofour
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971390/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971390/)

---

So basically we have to just do what the question has asked. 
For each node we will find the ancestor of it having the same character and then add it to our changes list.
After getting all the changes that are possible we will make those changes in the parent array.
Now we will construct the adjacency list of the tree.
Now just count the size of the subtree for each node recursively.
```
class Solution {
    vector<pair<int, int>> changes;
    void dfs(int original, int curr, vector<int>& parent, string& s){
        if(s[original] == s[curr]){
            changes.push_back({original, curr});
            return;
        }
        if(curr == 0) return;
        dfs(original, parent[curr], parent, s);
    }
    void counter(int level, vector<int>& ans, vector<vector<int>>& g){
        if(level == (int)ans.size()) return;
        for(auto it: g[level]){
            counter(it, ans, g);
            ans[level] += ans[it];
        }
    }
public:
    vector<int> findSubtreeSizes(vector<int>& parent, string s) {
        int n = (int)parent.size();
        vector<int> ans(n, 1);
        for(int i = 1; i<n; i++){
            dfs(i, parent[i], parent, s);
        }
        for(auto it: changes) parent[it.first] = it.second;
        vector<vector<int>> g(n);
        for(int i = 1; i<n; i++){
            g[parent[i]].push_back(i);
        }
        counter(0, ans, g);
        return ans;
    }
};
```
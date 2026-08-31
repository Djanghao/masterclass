# C++ deepest LCA O(mn)

**Author:** Sanzenin_Aria
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/3236234/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/3236234/)

---

```
class Solution {
public:
    vector<int> closestNode(int n, vector<vector<int>>& edges, vector<vector<int>>& query) {
        g.resize(n);
        vdepth.resize(n);
        for(auto& e:edges) {
            g[e[0]].push_back(e[1]);
            g[e[1]].push_back(e[0]);
        }
        getDepth(0, -1, 0);

        vector<int> res;
        for(auto q:query){
            int i = q[0], j = q[1], k = q[2];
            auto lca1 = lca(0, -1, i, j), lca2 = lca(0, -1, i, k), lca3 = lca(0, -1, j, k);
            auto lcaMax = max({lca1, lca2, lca3}, [&](int a, int b){return vdepth[a] < vdepth[b];});
            res.push_back(lcaMax);
        }
        return res;
    }

    void getDepth(int root, int par, int h){
        vdepth[root] = h;
        for(auto child:g[root]){
            if(child != par) getDepth(child, root, h+1);            
        }
    }

    int lca(int root, int par, int i, int j){
        if(root == i || root == j) return root;
        vector<int> v;
        for(auto child : g[root]){
            if(child == par) continue;
            int p = lca(child, root, i, j);
            if(p != -1) v.push_back(p);
        }
        if(v.size() == 2) return root;
        else if(v.size() == 1) return v[0];
        else return -1;
    }

    vector<vector<int>> g;
    vector<int> vdepth;
};
```
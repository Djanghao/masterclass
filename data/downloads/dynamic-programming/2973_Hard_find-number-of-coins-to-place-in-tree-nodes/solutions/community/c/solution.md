# c++ traversal

**Author:** maybe_rz
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4467660/](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4467660/)

---

```
class Solution {
public:
    
    #define ll long long
    
    vector<vector<int>> m;
    vector<int> cost;
    vector<ll> ans;
    int n;
    vector<long long> placedCoins(vector<vector<int>>& edges, vector<int>& cost) {
        this->n = cost.size();
        this->m = vector<vector<int>>(n, vector<int>());
        this->cost = cost;
        this->ans = vector<ll>(n, -1);
        for (auto& v : edges) {
            m[v[0]].push_back(v[1]);
            m[v[1]].push_back(v[0]);
        }
        
        traverse(0, -1);
        for (int i = 0; i < n; i++) ans[i] = max(ans[i], 0LL);
        return ans;
        
    }
    
    vector<int> traverse(int curr, int par) {
        vector<int> val;
        int children = 0;
        for (int i : m[curr]) {
            if (i != par) {
                vector<int> next = traverse(i, curr);
                children += next[0];
                for (int k = 1; k < next.size(); k++) val.push_back(next[k]);
            }
        }
        
        val.push_back(cost[curr]);
        sort(val.begin(), val.end());
        
        if (val.size() < 3) {
            ans[curr] = 1LL;
            vector<int> ret;
            ret.push_back(children + 1);
            for (int i : val) ret.push_back(i);
            return ret;
        }
        
        if (val.size() == 3) {
            ans[curr] = 1LL * val[0] * val[1] * val[2];
            return {children + 1, val[0], val[1], val[2]};
        }
        
        ans[curr] = max(1LL * val[0] * val[1] * val.back(), 1LL * val.back() * val[val.size() - 2] * val[val.size() - 3]);
        if (val.size() == 4) return {children + 1, val[0], val[1], val[2], val[3]};
        return {children + 1, val[0], val[1], val[val.size() - 3], val[val.size() - 2], val.back()};
        
        
        
        
    }
    
};
```
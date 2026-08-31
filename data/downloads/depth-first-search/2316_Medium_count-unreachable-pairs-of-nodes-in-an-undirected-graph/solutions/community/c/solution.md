# Simple DFS | C++

**Author:** venkatasaitanish
**Votes:** 155
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/2195907/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/2195907/)

---

Total no. of ways to pick 2 nodes from n nodes = nC2 = n*(n-1)/2;
Here we should not pick 2 nodes from the same component, so we find the number of nodes in each component. And subtract the no. of ways to pick 2 nodes from that component.
To find no. of nodes in a component, we can just do a DFS traversal and maintain a cnt to maintain no. of nodes visited in that dfs call.
```
class Solution {
public:
    typedef long long ll;
    void dfs(int node, unordered_map<int,vector<int>>& m, ll& cnt, vector<int>& vis){
        vis[node] = 1;
        cnt++;
        for(auto& i: m[node]){
            if(vis[i]==0) dfs(i,m,cnt,vis);   
        }
    }
    long long countPairs(int n, vector<vector<int>>& edges) {
        unordered_map<int,vector<int>> m; // making adjacency list
        for(int i=0;i<edges.size();i++){
            m[edges[i][0]].push_back(edges[i][1]);
            m[edges[i][1]].push_back(edges[i][0]);
        }
        ll ans = ((ll)n*(n-1))/2;
        vector<int> vis(n,0);
        for(int i=0;i<n;i++){
            if(vis[i]==0){ // as node is not visited, we find the no. of nodes in current component.
                ll cnt = 0;
                dfs(i,m,cnt,vis);
                ans -= (cnt*(cnt-1))/2;
            }
        }
        return ans;
    }
};
```
**Upvote if it helps!**
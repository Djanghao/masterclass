# Min Hamming Distance | C++ | Code explained | DFS Connected components

**Author:** tonystark_3000
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1009948/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1009948/)

---

```
class Solution {
public:
    
    // Graph DFS to find the connected components
    void dfs(int pos, vector<vector<int>>& adj, vector<int> &vis, vector<int> &group, int top){
        group[pos] = top;
        vis[pos] = 1;
        for(int i = 0 ; i < adj[pos].size() ; i++){
            int cur = adj[pos][i];
            if(vis[cur] == 0){
                dfs(cur, adj, vis, group, top);
            }
        }
    }
    
    int minimumHammingDistance(vector<int>& source, vector<int>& target, vector<vector<int>>& as) {
        int n = source.size();
        vector<vector<int>> adj(n);
        
        // First made the allowed swaps turned into graph edge with source size as nodes
        for(int i = 0 ; i < as.size() ; i++){
            adj[as[i][0]].push_back(as[i][1]);
            adj[as[i][1]].push_back(as[i][0]);
        }
        vector<int> vis(n , 0);
        vector<int> group(n);
        for(int i = 0 ; i < n ; i++){
            group[i] = i;
        }
        
        // Then performed DFS to find the connected components.
        for(int i = 0 ; i < n ; i++){
            if(vis[i] == 0){
                dfs(i, adj, vis, group , i);
            }
        }
        
        
        // Similar groups are stored into the map 
        unordered_map<int,vector<int>> mp;
        for(int i=0 ; i < n ; i++){
            mp[group[i]].push_back(i);
        }
        
        // now traverse in each group, and check how many elements are common in each connected components.
        // rest of the non-common components result into the hamming distance
        int ans = 0;
        for(auto i : mp){
            vector<int> pos = i.second;
            unordered_map<int, int> check;
            for(int j = 0 ; j < pos.size() ; j++){
                check[source[pos[j]]]++;
            }
            
            for(int j = 0 ; j < pos.size() ; j++){
                if(check[target[pos[j]]] > 0){
                    check[target[pos[j]]]--;
                }else{
                    ans++;
                }
            }
            
        }
        return ans;
    }
};
```
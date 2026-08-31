# C++✅✅ Easy solution✅ ✅DFS🔥

**Author:** deleted_user
**Votes:** 68
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330357/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330357/)

---

Har Har Mahadev\u2764\uFE0F\uD83D\uDD49\uFE0F

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check number of wire we have if number of wire is less than connections than it's not possible to connect all devices

Check number of components , after counting number of components we can return ans-1 (Because we can connect n devices with n-1 wire)

# Approach
<!-- Describe your approach to solving the problem. -->
Collect data in adjacency list and after that run DFS don't forget to maintain a visited array to not visit one node again and again

Start from 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(V+E), where V is the number of vertices and E is the number of edges in the graph.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 The space complexity of the DFS algorithm is O(V).
And we are making adjacency list is O(V+E)


# Code
```
class Solution {
    void dfs(vector<int> adj[], vector<bool> &visited, int src)
    {
        visited[src] = true;
        for(int i : adj[src]){
            if(!visited[i]){
                dfs(adj, visited, i);
            }
        }
    }
public:
    int makeConnected(int n, vector<vector<int>>& arr) {
        int len = arr.size();
        if(len<n-1) return -1;
         vector<int> adj[n];
        for(auto v : arr)
        {
            adj[v[0]].push_back(v[1]);
            adj[v[1]].push_back(v[0]);
        }
        vector<bool> visited(n, false);
        int ans = 0;
        for(int i=0; i<n; i++)
        if(!visited[i])
        {
            dfs(adj, visited, i);
            ans++;
        }
        return ans - 1;
    }
};




```
I hope you guys understand the solution , if there is any confusion or any improvements in the solution please inform me.

Jai Shree Ram \uD83D\uDEA9\uD83D\uDE4F.



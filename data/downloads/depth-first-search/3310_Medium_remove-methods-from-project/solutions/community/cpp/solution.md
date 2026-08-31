# Simple DFS | Greedy | Implementation

**Author:** Sparker_7242
**Votes:** 38
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5875789/](https://leetcode.com/problems/remove-methods-from-project/solutions/5875789/)

---

# Approach
According to the question, **the suspicious nodes are all nodes lying along the DFS call starting from node k**.

But if **any** external node invokes **any** node of the above list of nodes, the nodes will not be removed.

`So either all the suspicious nodes will be removed, or none will be removed`

That was all the concept. Let's look at the code for its\xA0implementation.

# Complexity
- Time complexity: O(V+E)
- Space complexity: O(V+E)

# Code
```cpp []
class Solution {
public:
    void dfs(vector<int> adj[], int node, vector<int> &vis){
        vis[node] = 1;
        for (int child: adj[node]){
            if (!vis[child]) dfs(adj,child,vis);
        }
    }

    vector<int> remainingMethods(int n, int k, vector<vector<int>>& invocations) {
        vector<int> adj[n]; // adjancency list
        for (auto &x: invocations){
            adj[x[0]].emplace_back(x[1]);
        }

        // creating the visited array and calling the DFS
        vector<int> vis(n,0);
        dfs(adj,k,vis);

        // checking if any node is externally invoked
        bool c = false;
        for (int i = 0; i < n; i++){
            bool tmp = false;
            if (!vis[i]){ // external node
                for (int x: adj[i]){
                    if (vis[x]){
                        tmp = true;
                        break;
                    }
                }
                if (tmp){
                    c = true;
                    break;
                }
            }
        }

        // creating the answer array
        vector<int> ans;
        for (int i = 0; i < n; i++){
            if (vis[i]){
                if (c) ans.emplace_back(i);
            } else {
                ans.emplace_back(i);
            }
        }
        return ans;
    }
};
```
**IF YOU FOUND THIS USEFUL**
![image.png](./images/0.png)

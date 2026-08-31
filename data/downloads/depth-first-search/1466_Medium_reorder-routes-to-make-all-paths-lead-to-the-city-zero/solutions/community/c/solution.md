# straightforward c++ solution || bfs

**Author:** helloisabelle
**Votes:** 155
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/827414/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/827414/)

---

We put outward facing edges in one vector, and keep the reverse in another.  

Starting from the city, we switch edges that are facing away from us.  

If there is a node that faces inward to us that we haven't visited yet, it would be in our back vector. 
We need to add inward facing nodes to the queue as well, since they might have neighbors that need to be flipped.

```
	int minReorder(int n, vector<vector<int>>& connections) {
        vector<int> visited(n);
        vector<vector<int>> adj(n), back(n);
        queue<int> q;
        q.push(0);
        int ans = 0;
        
        for (auto c : connections){
            adj[c[0]].push_back(c[1]);
            back[c[1]].push_back(c[0]);
        }
        
        while (!q.empty()){
            int curr = q.front();
            q.pop();
            visited[curr] = 1;

            // change dir for all arrows facing out
            for (auto a: adj[curr]){
                if (!visited[a]){
                    ans++;
                    q.push(a);
                }
            }
            // push other nodes so we visit everything
            for (auto b: back[curr]){
                if (!visited[b]) q.push(b);
            }
        }
        return ans;
    }
```
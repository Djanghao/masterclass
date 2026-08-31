# C++ DFS Easiest Solution [With Explanation] (My 1st approach)

**Author:** ciguvi-v2
**Votes:** 372
**Link:** [https://leetcode.com/problems/course-schedule/solutions/658275/](https://leetcode.com/problems/course-schedule/solutions/658275/)

---

We just have to find if our graph contains cycle or not because if graph contains cycle then all tnodes in cycle are interdependent and 1 course cannot be completed because its prerequisite is dependent on other course and it goes on .
We used coloring algorithm to find if there is cycle in graph or not.

**Coloring Algorithm** 
vis[id]=0 is used for node which is not yet visited, vis[id]=1 is used for the node which is visited and currently its child nodes are being visited and vis[id]=2 done when all the child nodes of a node ("id") are visited and the function returns to parent node of node ("id"). So at that time it is marked as 2 because this node does not require any further traversing.

```
bool iscycle(vector<int> adj[],vector<int> &vis,int id){
        if(vis[id]==1)
            return true;
        if(vis[id]==0){
            vis[id]=1;
            for(auto edge : adj[id]){
                if(iscycle(adj,vis,edge))
                    return true;
            }
        }
        vis[id] = 2;
        return false;
    }
    bool canFinish(int n, vector<vector<int>>& pre) {
        vector<int> adj[n];
        for(auto edge : pre)
            adj[edge[1]].push_back(edge[0]);
        vector<int> vis(n,0);
        
        for(int i=0;i<n;i++){
            if(iscycle(adj,vis,i))
                return false;
        }
        return true;
    }
```
**Upvotes are encouraging**
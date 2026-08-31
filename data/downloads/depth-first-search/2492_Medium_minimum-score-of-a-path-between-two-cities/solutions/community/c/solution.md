# ✅C++ | ✅Use BFS | ✅Easy & Efficient Approach

**Author:** Yash2arma
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/2874947/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/2874947/)

---

**Approach:** We can't find minimum path score directly by traversing in roads 2d-vector because graph might be disconnected. So, First we mark the visited nodes in vis vector by using bfs then we find minimum score by checking whether ai and bi are visited in roads and calculate minimum value.

```
class Solution 
{
public:
    int minScore(int n, vector<vector<int>>& roads) 
    {
        //create adjacency list of roads to make it a graph
        vector<pair<int, int>> adj[n+1];
        for(int i=0; i<roads.size(); i++)
        {
            adj[roads[i][0]].push_back({roads[i][1], roads[i][2]});
            adj[roads[i][1]].push_back({roads[i][0], roads[i][2]});
        }
        
        //mark possible visitable nodes 
        vector<int> vis(n+1, 0);
        queue<int> q;
        q.push(1), vis[1]=1;
        while(!q.empty())
        {
            int node=q.front();
            q.pop();
            for(auto it: adj[node])
            {
                if(!vis[it.first])
                {
                    q.push(it.first);
                    vis[it.first]=1;
                }
            }
        }
            
        //find minimum path score among visited nodes
        int mini_path = INT_MAX;
        for(int i=0; i<roads.size(); i++)
        {
            if(vis[roads[i][0]] && vis[roads[i][1]] && roads[i][2] < mini_path)
                mini_path = roads[i][2];
        }
        return mini_path;
        
    }
};
```

**Please upvote if it helps :)**
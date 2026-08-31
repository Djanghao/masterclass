# Simple DFS solution (C++)

**Author:** Byte_Walker
**Votes:** 93
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/1563770/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/1563770/)

---

We will do DFS in this problem. We have the condition here that we can visit a node any number of times but we shall add its value only once for that path for the calculation of its quality. 

So, we would require a visited array which would keep track of the visited nodes so that we do not add its value again into the quality score. 

Here, we are doing DFS and we increase the count of that node in visited array indicating how many times we have visited that node. If its being visited for the first time, we add its value to our sum. After we have processed all its neighbours, we then mark the current node as unvisited i.e. we reduce the count of that node from the visited array. 

We do not use a boolean visited array since if we go that way we would not be able to track visited properly since if we turn visited back to false after processing its neighbours, it would mean we treat that node as non visited even if its been visited multiple times before. To account for that, we use counter based visited array which increases or decreases the visited count thus serving its purpose.

The code provided below is self explanatory and I am sure you would be able to understand it easily.

```
class Solution {
public:
    int maximalPathQuality(vector<int>& values, vector<vector<int>>& edges, int maxTime) {
        int n = values.size();
        int res = values[0];
        vector<vector<pair<int,int>>> graph(n);
        for(int i=0;i<edges.size();i++)
        {
            graph[edges[i][0]].push_back({edges[i][1], edges[i][2]});
            graph[edges[i][1]].push_back({edges[i][0], edges[i][2]});
        }
        
        vector<int> visited(n, 0);
        dfs(graph, values, visited, res, 0, 0, 0, maxTime);
        return res;
    }
    
    void dfs(vector<vector<pair<int,int>>>& graph, vector<int>& values, vector<int>& visited, int& res, int node, int score, int time, int& maxTime)
    {
        if(time > maxTime)
            return;
        
        if(visited[node] == 0)
            score += values[node];
        
 \xA0 \xA0 \xA0 \xA0visited[node]++;
		
 \xA0 \xA0 \xA0
 \xA0 \xA0 \xA0 \xA0if(node == 0)
            res = max(res, score);
        
        for(auto it : graph[node])
        {
            int neigh = it.first;
            int newTime = time + it.second;
            dfs(graph, values, visited, res, neigh, score, newTime, maxTime);
        }
        
        visited[node]--;
    }
};
```

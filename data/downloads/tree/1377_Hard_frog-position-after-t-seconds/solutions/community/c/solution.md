# [C++] Straightforward BFS | Nothing Complicated😁

**Author:** aparna_g
**Votes:** 18
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/1344094/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/1344094/)

---

```
class Solution {
public:
    double frogPosition(int n, vector<vector<int>>& edges, int t, int target) {
        vector<vector<int>> graph(n+1);
        for(auto e : edges){
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
        }
        vector<double> prob(n+1 , 0);
        queue<int> q;
        q.push(1);
        vector<bool> visited(n+1, 0);
        visited[1] = 1;
        prob[1] = 1.0;
        while(!q.empty() && t--) {
            int size = q.size();
            for(int i=0;i<size;i++){
                int node = q.front();
                q.pop();
                int edge_count = 0; //count of unvisited nodes from the current node. 
                for(auto v : graph[node]){
                    if(!visited[v]) 
                        edge_count++;
                }
                for(auto v : graph[node]) {
                    if(!visited[v]) {
                        q.push(v);
                        visited[v] = true;        
                        prob[v] =  prob[node] / edge_count;                        
                    }
                } 
				//the only tricky part
                //A frog cannot stay at a fixed postion until there's no more vertex to jump
                if(edge_count>0)
                    prob[node] = 0;
            }
        }
        return prob[target];
    }
};
```
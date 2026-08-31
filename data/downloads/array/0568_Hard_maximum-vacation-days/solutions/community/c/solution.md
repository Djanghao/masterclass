# Easy DP with Edges of graph options

**Author:** Uni_koko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/3653162/](https://leetcode.com/problems/maximum-vacation-days/solutions/3653162/)

---

```
class Solution {
public:
    /*
    
       First make adjacency list 
       now see how is this dynamic programming ques 
       
       start from source 0 
       at each step we have neigh no. of choices
       
       for each there is cost associated in days[node][week] = max vacation it can give
       so choose the max of all choices
       
       int go(src,week,graph,days) -> return the max vacation possible
       
       ** so if start from src->node than check for dist[node]  not source for that week
   
    */
    map<pair<int,int>,int>m;
    
    int go(int src, vector<vector<int>>& days, int currweek, unordered_map<int,vector<int>>&graph, int totweek) {
        
        if(currweek==totweek)
            return 0;
        
        if(m.find({src,currweek})!=m.end())
            return m[{src,currweek}];
        int maxvac =0;
        for(auto it:graph[src]) {
            maxvac = max(maxvac,days[it][currweek]+go(it,days,currweek+1,graph,totweek));
        }
        return m[{src,currweek}]=maxvac;       
    }
   
    int maxVacationDays(vector<vector<int>>& flights, vector<vector<int>>& days) {
        int row = flights.size(), col = flights[0].size();
        unordered_map<int,vector<int>>graph;
        
        //make adjacency list
        for(int i=0; i<row; i++) {
            for(int j=0; j<col; j++) {
                if(flights[i][j]==1 or i==j) {
                    graph[i].push_back(j);
                }
            }
        }
      
        return go(0,days,0,graph,days[0].size());
        
    }
};
```
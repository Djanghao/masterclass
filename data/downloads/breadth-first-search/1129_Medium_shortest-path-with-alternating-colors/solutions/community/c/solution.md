# Easy C++  BFS solution || commented || 93% faster

**Author:** saiteja_balla0413
**Votes:** 44
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/1370454/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/1370454/)

---

```
class Solution {
public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& r, vector<vector<int>>& b) {
        
        //create adjacency list
        vector<vector<int>> bAdj(n);
        vector<vector<int>> rAdj(n);
        
        
        //red edges adjacency list
        for(int i=0;i<r.size();i++)
        {
            rAdj[r[i][0]].push_back(r[i][1]);
        }
        
        //blue edges adjacency list
        for(int i=0;i<b.size();i++)
        {
            bAdj[b[i][0]].push_back(b[i][1]);
        }
        
        //use bfs 
        queue<pair<int,int>> q;
        
        vector<pair<int,int>> res(n,{INT_MAX,INT_MAX});
        //pair.first stores the min distance to reach node through blue color
        //pair.second stores the min dist to reach node through red color
        
        res[0]={0,0};
        
        //1 represents the  blue color
        //-1 represents the red color
        q.push({0,-1});
        q.push({0,1});
        
        //currDist is the distance from node 0  to the nodes in the queue
        //in Alternative edges
        int currDist=0;
        while(!q.empty())
        {
            int l=q.size();
            //for every node in q check if a shorter dist exists with alternative manner
            
            for(int m=0;m<l;m++)
            {
                //edge is the color of incoming edge to the node
                auto [node,edge]=q.front();
                q.pop();
                
                //if incoming is red  add the nodes of blue edges and viceversa
                if(edge==1)
                {
                    //blue 
                    //check for red adjacency list
                    for(auto x:rAdj[node])
                    {
                        if(res[x].second > currDist+1)
                        {
                            q.push({x,-1});
                            res[x].second=currDist+1;
                        }
                    }
                }
                else{
                    //red
                    //check for blue adj list
                    for(auto x:bAdj[node])
                    {
                        if(res[x].first > currDist+1)
                        {
                            q.push({x,1});
                            res[x].first=currDist+1;
                        }
                    }
                }
            }
            currDist++;
        }
        
        vector<int> ans(n);
        
        for(int i=0;i<n;i++)
        {
            int mini=min(res[i].first,res[i].second);
            ans[i]=(mini==INT_MAX) ? -1 : mini;
        }
        return ans;
        
    }
};
```
**Upvote if this helps you :)**
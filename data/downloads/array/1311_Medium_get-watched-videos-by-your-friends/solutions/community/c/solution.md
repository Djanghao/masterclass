# BFS BASED SOLUTION || BREAKING BAD :) || C++

**Author:** SJ4u
**Votes:** 6
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/1247416/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/1247416/)

---

```
class Solution {
public:
    vector<string> watchedVideosByFriends(vector<vector<string>>& w, vector<vector<int>>& friends, int id, int level) {
        
        vector<vector<int>>graph(friends.size());
        
     
        vector<int>ans;
        vector<int>visited(friends.size(),0);
        visited[id]=1;
        queue<pair<int,int>>q;
        q.push({id,0});
        
        while(q.size())//bfs
        {
            int val=q.front().first;
            int lev=q.front().second;
            q.pop();
            
            if(lev==level)
            {
                // cout<<val<<endl;
                ans.push_back(val);
            }
            
            for(auto x:friends[val])
            {
                if(visited[x]==0)
                {
                    visited[x]=1;
                    q.push({x,lev+1});
                }
            }
        }
        
        unordered_map<string,int>mp;
   
        for(auto x:ans)
        {
            for(auto y: w[x])
            {
                mp[y]++;
            }
        }
        
        vector<pair<int,string>>res;
        for(auto x:mp)
        {
              res.push_back({x.second,x.first});
        }
        sort(res.begin(),res.end());
       
        vector<string>fin;
        for(auto x:res)
        {
            fin.push_back(x.second);
        }
        return fin;
    }
};
```
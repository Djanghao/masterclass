# ✅C++||topological sort|| queue||easy to understand

**Author:** return_7
**Votes:** 9
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/2012697/](https://leetcode.com/problems/strange-printer-ii/solutions/2012697/)

---

```
class Solution {
public:
    bool isPrintable(vector<vector<int>>& tg) 
    {
        int n=tg.size(),m=tg[0].size();
        vector<int> xmax(61,-1),xmin(61,n),ymax(61,-1),ymin(61,m);
        vector<vector<int>> g(61);
        for(int i=0;i<n;i++)// find max &min index in x& y
        {
            for(int j=0;j<m;j++)
            {
                xmax[tg[i][j]]=max(xmax[tg[i][j]],i);
                xmin[tg[i][j]]=min(xmin[tg[i][j]],i);
                ymax[tg[i][j]]=max(ymax[tg[i][j]],j);
                ymin[tg[i][j]]=min(ymin[tg[i][j]],j);
            }
        }
        vector<int> indeg(61);
        for(int colr=1;colr<=60;colr++)
        {
            for(int i=xmin[colr];i<=xmax[colr];i++)
            {
                for(int j=ymin[colr];j<=ymax[colr];j++)
                {
                    if(tg[i][j]!=colr)
                    {
                        g[colr].push_back(tg[i][j]);
                        indeg[tg[i][j]]++;// count indegree
                    }
                    
                }
            }
        }
        int visited=0;
        queue<int> q;
        for(int colr=1;colr<=60;colr++)///push whose indegree=0
        {
            if(!indeg[colr])
            {
                q.push(colr);
            }
        }

            while(!q.empty())
            {
                int node=q.front();
                q.pop();
                visited++;
                for(auto &child:g[node])
                {
                    if(!(--indeg[child]))
                        q.push(child);
                }
            }
        
        return visited==60;
    }
};
// if you like the solution plz upvote.
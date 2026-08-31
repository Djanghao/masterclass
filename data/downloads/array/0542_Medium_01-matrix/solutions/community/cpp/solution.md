# C++ Detailed BFS!!

**Author:** _asR9_
**Votes:** 151
**Link:** [https://leetcode.com/problems/01-matrix/solutions/576079/](https://leetcode.com/problems/01-matrix/solutions/576079/)

---

```
//shortest paths-unweighted graph---->bfs(very standard)
//but usually 1 source node---minimum distance from that particular node
//but here multiple source nodes
//so push all of them first
//WHY???
//WHEN WE POP AND EXPLORE WE ARE DOING SO IN INCREASING ORDER OF THEIR LEVELS
//SO WHEN WE DISCOVER A NODE FIRST WE ARE EXPLORING IT FROM MINI POSSIBLE LEVEL NODE THAT IT IS CONNECTED TO
//first the source..then level 1 nodes..then level 2 and so on
//here the case is there are many level 0 nodes
//so push all of them first!!!

class Solution {
public:
    
    
    bool isvalid(int i,int j,int m,int n)
    {
        if(i==m||j==n||j<0||i<0)
            return false;
        return true;
    }
    
    vector<vector<int>> dir={{1,0},{0,1},{0,-1},{-1,0}};
    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) 
    {
        queue<pair<int,int>> q;
        int m=matrix.size();
        int n=matrix[0].size();
        vector<vector<int>> dis(m,vector<int>(n,-1));
        for(int i=0;i<m;i++)
            for(int j=0;j<n;j++)
            {
                if(matrix[i][j]==0)
                { 
                    q.push({i,j});
                    dis[i][j]=0;
                }
            }
        while(!q.empty())
        {
            pair<int,int> curr=q.front();
            q.pop();
            for(auto& x:dir)
            {
                int a=curr.first+x[0];
                int b=curr.second+x[1];
                if(isvalid(a,b,m,n)&&dis[a][b]==-1)
                {
                    q.push({a,b});
                    dis[a][b]=dis[curr.first][curr.second]+1;
                }
            }
        }
        return dis;
    }
};
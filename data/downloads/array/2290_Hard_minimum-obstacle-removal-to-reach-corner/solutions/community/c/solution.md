# Two methods || 0-1 bfs || dijkastras algo ||100% faster|| resources included

**Author:** ashu143
**Votes:** 68
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2088276/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2088276/)

---

# **Dijkastras algo method**
* **When do we use dijkastras,**
    1. When there is a weighted graph and there are one or multiple destinations possible
*   **What do we do in this** 
    1.We need to store the minimum distance between nodes 
    2.In order to do this we use a data structure like set or a priority queue 
*  **In questions point of view**  :-
1.   Consider the edge weight from a free node to obstacle node to be 1 and from free node to free node 0
2.   Now apply dijkastras algo
```
 int m=grid.size(), n=grid[0].size();
        vector<int> dir={0,1,0,-1,0};
        vector<vector<int>> dist(m, vector<int> (n,INT_MAX));
        dist[0][0]=0;
        priority_queue<pair<int,pair<int,int>>, std::vector<pair<int,pair<int,int>>>, std::greater<pair<int,pair<int,int>>> > pq;
        pq.push({0,{0,0}});
        while(!pq.empty())
        {
            auto v=pq.top();
            pq.pop();
            int i=v.second.first, j=v.second.second, d=v.first;
            for(int k=0;k<4;k++)
            {
                int x=i+dir[k], y=j+dir[k+1];
                if(x<0 || x>=m || y<0 || y>=n) continue;
                int wt;
                if(grid[x][y]==1)
                {
                    wt=1;
                }
                else
                {
                    wt=0;
                }
                
                if(d+wt<dist[x][y])
                {
                    dist[x][y]=d+wt;
                    pq.push({dist[x][y],{x,y}});
                }
            }
        }
        return dist[m-1][n-1];  
    }
```
	
This approach gives us the answer but its time complexity is **(O(V+E)logN)**
Extra logN comes because of the use of Priority Queue
*TIME TO THINK* == > Do we really need dijkastras algo. No we don't because we have only 2 different kinds of weights so we have a better and faster approach i.e 0-1 BFS.


# 0-1BFS Method
![image](./images/0.png)

Let me try to explain when we use 0-1 bfs and what are the advantages :-
* This is used when only two types of states/ weights are present
* This works using a deque so the complexity is **O(V+E)** like a normal bfs traversal
*   Links to refer for 0-1 BFS 
      1. [https://cp-algorithms.com/graph/01_bfs.html](http://)
      2. [https://www.youtube.com/watch?v=SQOQ99stCas&list=PLauivoElc3ghxyYSr_sVnDUc_ynPk6iXE&index=14](http://)

```
class Solution {
public:
    int minimumObstacles(vector<vector<int>>& grid) {
      int m=grid.size(), n=grid[0].size();
        vector<int> dir={0,1,0,-1,0};
        vector<vector<int>> dist(m, vector<int> (n,INT_MAX));
        vector<vector<bool>> vis(m, vector<bool>(n,0));
        deque<pair<int,int>>q;
        dist[0][0]=0;
        q.push_front({0,0});
        while(!q.empty())
        {
            auto cur=q.front();
            q.pop_front();
            int x=cur.first;
            int y=cur.second;
            for(int i=0;i<4;i++)
            {
                int cx=x+dir[i];
                int cy=y+dir[i+1];
            if(cx>=0 and cy>=0 and cx<m and cy<n)
            {
                if(!vis[cx][cy])
                {
                    dist[cx][cy]=dist[x][y]+(grid[cx][cy]==1);
                    if(grid[cx][cy]==1)
                        q.push_back({cx,cy});//obstacle cell pushed at the end
                    else
                    q.push_front({cx,cy}); //empty cell pushed on top
                    vis[cx][cy] = true;
                }
            }
        }
    }
        return dist[m-1][n-1];
    }
};
```

Please do upvote if this helps!!!!
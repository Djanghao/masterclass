# [C++]/BFS+DP FULLY EXPLAINED SOLUTION✅✅✅

**Author:** tushar_1290
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/3687165/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/3687165/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Simplest intuition you can think for this problem is calculating cost using BFS.
- But the question is how to apply BFS to get our answer ?
- Let see the approach..
# Approach
<!-- Describe your approach to solving the problem. -->
- The simplest approach is to calculate minimum cost for each cell for a valid path from (0,0) to (i,j), i,j be any cell.
- We will use priority queue and bfs to calculate the minimum cost.
- As we have four options from each cell to traverse through we push them all into priority queue if indexes are valid(not out of boundary) then mark cell (i,j) as visited and pop it from the priority queue.
- When our priority queue becomes empty means all the cells are traversed and we have calculated the minimum cost for each cell to reach from (0,0).

# Complexity
- Time complexity: O(m\\*n\\*log(m*n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minCost(vector<vector<int>>& grid) {
        int m=grid.size(),n=grid[0].size();
        vector<vector<int>> dist(m,vector<int>(n,1e9)),vis(m,vector<int>(n,0));
        priority_queue<pair<int,pair<int,int>>,vector<pair<int,pair<int,int>>>,greater<pair<int,pair<int,int>>>> pq;   //min priority queue
        //in pq first is cost and first and second of second are (i,j)....({cost,{i,j}})
        int dx[5]={0,0,0,1,-1},dy[5]={0,1,-1,0,0};

        pq.push({0,{0,0}}); //push (0,0) as starting point with 0 cost
        dist[0][0]=0; //distance of (0,0) is 0

        while(!pq.empty()){
            auto it=pq.top();  //cell with minimum cost
            pq.pop();
            int x=it.second.first,y=it.second.second; 
            int cost=it.first; //current cost to reach (x,y) from (0,0)
            if(vis[x][y]) continue;
            vis[x][y]=1; //mark (x,y) as visited to avoid infininte loops

            //traverse in all four directions of a cell i.e. up,down,left,right
            for(int i=1;i<=4;i++){
                int x2=x+dx[i],y2=y+dy[i]; 
                if(x2<0||y2<0||x2>=m||y2>=n) continue;
                if(grid[x][y]==i){ //when direction is same as we required

                    if(dist[x2][y2]>=cost){ //change the dist[x2][y2] if the cost to reach (x2,y2) via x,y is lesser then its previous cost to reach 
                        dist[x2][y2]=cost;
                        pq.push({cost,{x2,y2}});
                    }
                }
                //when direction is something different so we required cost 1 to change it.
                else{ 
                    if(dist[x2][y2]>=cost+1){
                        dist[x2][y2]=cost+1;
                        pq.push({cost+1,{x2,y2}});
                    }
                }
            }
        }

        return dist[m-1][n-1]; //this is the minimum cost to reach (m-1,n-1) from (0,0)
    }
};

```
## **PLEASE UPVOTE THE SOLUTION.**

![upvote.jpg](./images/0.jpeg)

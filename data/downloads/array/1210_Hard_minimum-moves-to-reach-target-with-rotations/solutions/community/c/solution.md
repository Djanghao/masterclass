# Easy BFS C++

**Author:** ashwani7_
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/1220110/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/1220110/)

---

We can solve this problem using bfs. In queue of bfs we store 3 things. Snake's x coordinate,Snake's y coordinate and the direction(true for horizontal, false for vertical). We don't need to store head of snake as we can easily find it if we are given these 3 variables.

We also maintain a visited set of same 3 things(x,y,direction) which will tell us if we have visited the orientation or not. If we have already visited we simply return.

Inititally the snake's tail is at (0,0) and direction is horizontal so we push (0,0,true) to our queue.
Then we follow simple bfs and check if we can visit left,right or rotate it and if yes we push it to the queue.

We need to use two loops for bfs as the inner loop is providing us options in which we can move but eventually we are going to move in just one direction so we have to count whole inner loop once only.


```
class Solution {
public:
    
    int n;
    set<vector<int>> visited;
    bool candown(vector<vector<int>>& grid,int x,int y,bool hor){
        if(!hor){
            if(x+2<n && grid[x+1][y]==0 && grid[x+2][y]==0 && !visited.count({x+1,y,hor})){
                return true;
            }
        }else{
            if(x+1<n && y+1<n && grid[x+1][y]==0 && grid[x+1][y+1]==0 && !visited.count({x+1,y,hor})){
                return true;
            }
        }
        
        return false;
    }
    
    bool canright(vector<vector<int>>& grid,int x,int y,bool hor){
        if(hor){
            if(y+2<n && grid[x][y+1]==0 && grid[x][y+2]==0 && !visited.count({x,y+1,hor})){
                return true;
            }
        }else{
            if(y+1<n && x+1<n && grid[x][y+1]==0 && grid[x+1][y+1]==0 && !visited.count({x,y+1,hor})){
                return true;
            }
        }
        
        return false;
    }
    
    bool canrot(vector<vector<int>>& grid,int x,int y,bool hor){
        if(hor){
            if(y+1<n && x+1<n && grid[x+1][y]==0 && grid[x+1][y+1]==0 && !visited.count({x,y,!hor})){
                return true;
            }
        }else{
            if(x+1<n && y+1<n && grid[x][y+1]==0 &&grid[x+1][y+1]==0 && !visited.count({x,y,!hor})){
                return true;
            }
        }
        return false;
    }
    
    int minimumMoves(vector<vector<int>>& grid) {
        queue<array<int, 3>> q;
        q.push({0,0,true});
        int ans=0;
        n=grid.size();
        while(!q.empty()){
            int size=q.size();
            while(size--){
                auto a=q.front();
                q.pop();
                if(visited.count({a[0],a[1],a[2]})){
                    continue;
                }
                visited.insert({a[0],a[1],a[2]});
                int x=a[0];
                int y=a[1];
                if(x==n-1 && y==n-2 && a[2]==1){
                    return ans;
                }
                if(candown(grid,x,y,a[2])){
                    q.push({x+1,y,a[2]});
                }
                if(canrot(grid,x,y,a[2])){
                    q.push({x,y,!a[2]});
                }
                if(canright(grid,x,y,a[2])){
                    q.push({x,y+1,a[2]});
                }
            }
            ans++;
        }
        return -1;
    }
};
```
**Please upvote if you liked the solution.**
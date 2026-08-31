# C++ | Top Down 5D DP | Explained with comments

**Author:** tanyarajhans7
**Votes:** 6
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/1559078/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/1559078/)

---

```
class Solution {
public:
    //rows and cols are 8*8 atmax therefore, cat and mouse both can reach anywhere they want in at max ~70 steps even if catJump, mouseJump=1.
    
    //let's indicate win as 1 and loss as 0.
    int n,m;
    
    int dp[71][9][9][9][9]; //turns, ci, cj, mi, mj
    
    int dx[4]={1,0,-1,0};
    int dy[4]={0,1,0,-1};
    
    int solve(int turns, int ci, int cj, int mi, int mj, int catJump, int mouseJump, vector<string>& grid){
        int x=turns%2;
        int ans=0;
        if(x==0){ //mouse
            if(turns>=70)
            return 0;
            if (mi==ci && mj==cj) 
                return 0;//mouse gets caught by cat, it loses
            if (grid[mi][mj] == 'F') 
                return 1;//mouse got the food, it wins
            if (grid[ci][cj] == 'F') 
                return 0; //cat got the food, mouse loses
            if(dp[turns][ci][cj][mi][mj]!=-1)
                return dp[turns][ci][cj][mi][mj];
             for(int i=0;i<4;i++){
                       for(int j=0;j<=mouseJump;j++){
                           int mx=mi+j*dx[i];
                           int my=mj+j*dy[i];
                           if(mx>=0 && my>=0 && mx<n && my<m && grid[mx][my]!='#'){
                               if(solve(turns+1, ci, cj, mx, my, catJump, mouseJump, grid)==0){ //if in the next turn cat loses
                                   ans=1;
                                   break;
                               }
                           }
                           else
                               break;
                     }
                    if(ans)
                        break;
             }
        }
        else{ //cat
            if(turns>=70)
            return 1;
            if (mi==ci && mj==cj) 
                return 1;//mouse gets caught by cat, cat wins
            if (grid[mi][mj] == 'F') 
                return 0;//mouse got the food, cat loses
            if (grid[ci][cj] == 'F') 
                return 1; //cat got the food, it wins
            if(dp[turns][ci][cj][mi][mj]!=-1)
                return dp[turns][ci][cj][mi][mj];
            for(int i=0;i<4;i++){
                for(int j=0;j<=catJump;j++){
                           int cx=ci+j*dx[i];
                           int cy=cj+j*dy[i];
                           if(cx>=0 && cy>=0 && cx<n && cy<m && grid[cx][cy]!='#'){ 
                               if(solve(turns+1, cx, cy, mi, mj, catJump, mouseJump, grid)==0){ //if in the next turn mouse loses
                                   ans=1;
                                   break;
                               }
                           }
                           else
                               break;
                     }
                    if(ans)
                        break;
             }
        }
        return dp[turns][ci][cj][mi][mj]=ans;
        
    }
    
    bool canMouseWin(vector<string>& grid, int catJump, int mouseJump) {
        n=grid.size();
        m=grid[0].size();
        int ci,cj,mi,mj;
        memset(dp, -1, sizeof(dp));
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]=='C'){
                    ci=i;
                    cj=j;
                }
                else if(grid[i][j]=='M'){
                    mi=i;
                    mj=j;
                }
            }
        }
        return solve(0, ci, cj, mi, mj, catJump, mouseJump, grid);
    }
};
```
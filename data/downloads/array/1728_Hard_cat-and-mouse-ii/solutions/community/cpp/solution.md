# Its hard to be CAT or to be Tom    || C++|| Special one

**Author:** Get_the_Guns
**Votes:** 6
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/2314781/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/2314781/)

---

```




EDITED::::   23 JULYY    I DIDNT GAVE UP MAN!!......NOR I WILL ..........I POSTED AGIAN ON 23








Hey !....Leetcoders this could be my last post i and the number stands at 314........
time is 1:30 and date is 22 July .......

i Spent almost 3 months here ...this was my second home........i remeber how i used to solve question here even on my toughest days.....[to be exact when i was admit and even today to forget my pain i used to solve problems here ]....also there are lot of memories attached with it....lot of persons lot of ups and downs lots of frustration ......Hope and i wish i could continue lets see.......what happens ..
Btw i spend madly 22 hours today here ........\uD83D\uDE05\uD83D\uDE05

.Hoping for the best!! and i hope i will continue ........


```

```

This was quite hard problem and i m happy that i solved it......
Credits to all......
```

```

 Coming to question.....
 there is no quick way to figure out if mouse can win or not. The only thing we can do is to exhausted search all seach space. In the problem statement says If Mouse cannot get to the food within 1000 turns, Cat wins, so it seems like we need to search 1000 turns to make sure if cat wins or not?

The main trick for this problem is that we don\u2019t need to search 1000 turns. Let\u2019s assume the cat and the mouse are at whatever position in the grid, and the row x col is 64. Then, after 64*2 = 128 turns, they should be able to go whatever place they want. This is because if we assume their jump length to be 1 (the smallest), they\u2019ll need at most 64 jumps to cover the whole grid, and they both need 64 turns so the total turn is 128.

With this, we only need to search 128 deeper. We use a dp array to store the solution if we know who will win. If the turn is more than 128, mouse lose. We use 1 to mean mouse win, and 0 to mean mouse lose.

Finally, in mouse\u2019s turn, we default the status to mouse lose, and mouse can win once it finds one way to win. Same thing happens in cat\u2019s turn, we default the status to cat lose (mouse win), and cat can win once it finds one way to win. This is the play optimally means in the problem statement. Both cat and mouse will only pick the way they can win.
    





int n,m;
    int dx[4] = {-1,0,0,1};
int dy[4] = {0,-1,1,0};
     int dp[140][8][8][8][8];
    vector<int> cat,food,mouse;
    int solve(int c0,int c1,int m0,int m1,vector<string>& grid, int cj, int mj,int turn)
    {
        if(turn>=128)
        {
            return 0;
        }
        if (dp[turn][m0][m1][c0][c1] != -1) return dp[turn][m0][m1][c0][c1];
        int ret=turn%2==0?0:1;
        if(turn%2==0)//mouse
        {
            if(c0==m0 && c1==m1)
            {
                ret=0;
            }
            else if(m0==food[0] && m1==food[1])
            {
                ret=1;
            }
             else if(c0==food[0] && c1==food[1])
            {
                ret=0;
            }
            else
            {
                for(int i=0;i<4;i++)
                {
                    for(int j=0;j<=mj;j++)
                    {
                        int x=m0+j*dx[i];
                        int y=m1+j*dy[i];
                        
                        if(x>=0 && y>=0 && y<m && x<n && grid[x][y]!='#')
                        {
                            if(solve(c0,c1,x,y,grid,cj,mj,turn+1))
                            {
                                ret=1;
                                break;
                            }
                        }
                        else
                        {
                            break;
                        }
                    }
                }
                
            }
            
        }
        else
        {
             if(c0==m0 && c1==m1)
            {
                ret=0;
            }
            else if(c0==food[0] && c1==food[1])
            {
                ret=0;
            }
               else if(m0==food[0] && m1==food[1])
            {
                ret=1;
            }
            else
            {
                for(int i=0;i<4;i++)
                {
                    for(int j=0;j<=cj;j++)
                    {
                        int x=c0+j*dx[i];
                        int y=c1+j*dy[i];
                        
                        if(x>=0 && y>=0 && y<m && x<n && grid[x][y]!='#')
                        {
                            if(solve(x,y,m0,m1,grid,cj,mj,turn+1)==0)
                            {
                                ret=0;
                                break;
                            }
                        }
                        else
                        {
                            break;
                        }
                    }
                }
                
            }
            
        }
        return dp[turn][m0][m1][c0][c1]=ret;
    }
public:
    bool canMouseWin(vector<string>& grid, int catJump, int mouseJump) {
         memset(dp, -1, sizeof(dp));
          cat.resize(2); mouse.resize(2); food.resize(2);
        int R = grid.size();int C = grid[0].size();
        n=R;m=C;
          for (int i=0; i<R; i++) {
           for (int j=0; j<C; j++) {
                if (grid[i][j] == 'C') cat[0] = i, cat[1] = j;
                else if (grid[i][j] == 'M') mouse[0] = i, mouse[1] = j;
                else if (grid[i][j] == 'F') food[0] = i, food[1] = j;
            }
        }
        return solve(cat[0],cat[1],mouse[0],mouse[1],grid,catJump,mouseJump,0);
    }






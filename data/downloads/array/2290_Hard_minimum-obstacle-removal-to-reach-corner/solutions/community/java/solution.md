# Let's solve this problem based on never give up! | Explained failure point

**Author:** faltu_admi
**Votes:** 130
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2086036/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2086036/)

---

While giving the contest the first intuition which came to my mind is dp. Yes, Off-course after solving a bunch of dp problems in the beginning I am also the person who wants to see dp everywhere.

So, Here is my code for using dp which failed 2nd test case though. But still, I have written something which I can analyze.
```

class Solution {
    int [][]grid;
    int n,m;
    boolean [][]seen;
    int []dx = new int[]{0,0,1,-1};
    int []dy = new int[]{1,-1,0,0};
    int [][]dp;
    int finalres;
    private boolean isValid(int i, int j) {
        return Math.min(i,j)>=0 && i<n && j<m && !seen[i][j];
    }
    
    private int solve(int i, int j, int cnt) {
        if(cnt>=finalres) return finalres;
        if(i == n-1 && j == m-1) {
            return cnt;
        }
        if(dp[i][j]!=Integer.MAX_VALUE) return dp[i][j];
        int res = n*m+1;
        seen[i][j]=true;
        for(int k=0;k<4;k++) {
            int newI = i+dx[k], newJ = j+dy[k];
            if(isValid(newI, newJ)) {
                res = Math.min(res, solve(newI, newJ, cnt+grid[i][j]));
            }
        }
        seen[i][j]=false;
        return dp[i][j]=Math.min(dp[i][j], res);
    }
    
    public int minimumObstacles(int[][] grid) {
        this.grid = grid;
        this.n = grid.length;
        this.m = grid[0].length;
        this.seen = new boolean[n][m];
        dp = new int[n][m];
        finalres = n*m+1;
        for(int []row:dp) Arrays.fill(row, Integer.MAX_VALUE);
        return solve(0,0,0);
    }
}
```

**But It didn't work.**
# Why?
since once I store the result of (i,j) using path let's say "*path*" then whenever I again come to (i,j), I just used the already saved result. So here is what my code assumes once we get the result for (i,j) then it's the optimal. But there is the possibility that a path from a different *path* that contributed to saving the dp result will be coming with less cost(i.e. cost == the number of blockers that needs to remove). That's why it's failed.

**Ok so let's try another way**
So at this point of time, I was confirmed that, dp wouldn't help here. So what next I can try?
Since from (0,0) to (n-1,m-1) I can have multiple paths and I need the path which has the minimum number of blockers(not exactly the path just count). So yeah here I thought let's do bfs so that each path will be running in the queue with their context and wouldn't merge as in dp.

So here is the BFS code : 

```
class Solution {
    int n,m;
    int []dx = new int[]{0,0,1,-1};
    int []dy = new int[]{1,-1,0,0};
    int [][]dp;
    private boolean isValid(int i, int j) {
        return Math.min(i,j)>=0 && i<n && j<m;
    }
    
    public int minimumObstacles(int[][] grid) {
        this.n = grid.length;
        this.m = grid[0].length;
        dp = new int[n][m];
        for(int []row:dp)Arrays.fill(row,Integer.MAX_VALUE);
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0,0,0});
        int res = n*m+1;// At most i have to remove all the blockers.
        
        while(!queue.isEmpty()) {
            int thisLevel = queue.size();
            while(thisLevel-->0 ) {
                int []temp = queue.remove();
                int i=temp[0], j=temp[1];
                if(i==n-1 && j == m-1) {
                    res = Math.min(res, temp[2]);
                    continue;
                }
                
               for(int k=0;k<4;k++) {
                    int newI = i+dx[k], newJ = j+dy[k];
                   
                   // if newi and newj is valid and which is not increasing the cost for newi and newj which already i have achieved.
                    if(isValid(newI, newJ) && dp[newI][newJ]>temp[2]+grid[newI][newJ]) {
                        dp[newI][newJ]=temp[2]+grid[newI][newJ];
                        queue.add(new int[]{newI, newJ, dp[newI][newJ]});
                    }
                }
            }
        }
        return res;
    }
}
```
**But again this code is given tle.**
# Why?
So after doing analysis, I come to the point that, I was checking for any node (newI, newJ) which is going to be added to the queue that is, whether it is increasing the blocker count that I have already achieved for this node or not? Yeah, this is right and I should do that. But I skipped that If the same node (newI, newJ) is already in the queue with the greater number of blockers that we're getting now.
So why this is making an issue?
Since the node in the queue must be removed because we got a path to reach the (newI, newJ) with less blocker. If we don't remove this path this path again will start adding the node in the queue which gives the result as TLE.
ok so now let's update it.

```
class Solution {
    int n,m;
    int []dx = new int[]{0,0,1,-1};
    int []dy = new int[]{1,-1,0,0};
    int [][]dp;
    int [][]grid;
    private boolean isValid(int i, int j, int cost) {
        boolean valid = (Math.min(i,j)>=0 && i<n && j<m && dp[i][j]>cost+grid[i][j]);
        if(valid) dp[i][j]=cost+grid[i][j];
        return valid;
    }
    
    public int minimumObstacles(int[][] grid) {
        this.grid = grid;
        this.n = grid.length;
        this.m = grid[0].length;
        dp = new int[n][m];
        for(int []row:dp)Arrays.fill(row,Integer.MAX_VALUE);
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0,0,0});
        int res = n*m+1;// At most i have to remove all the blockers.
        
        while(!queue.isEmpty()) {
            int thisLevel = queue.size();
            while(thisLevel-->0 ) {
                int []temp = queue.remove();
                int i=temp[0], j=temp[1];
                if(i==n-1 && j == m-1) {
                    res = Math.min(res, temp[2]);
                    continue;
                }
                
                if(temp[2]>dp[i][j]) {
                    // This is invalid path because we have achived better which already might be running in the queue
                    continue;
                }
                
               for(int k=0;k<4;k++) {
                    int newI = i+dx[k], newJ = j+dy[k];
                   
                   // if newi and newj is valid and which is not increasing the cost for newi and newj which already i have achieved.
                    if(isValid(newI, newJ, temp[2])) {
                        queue.add(new int[]{newI, newJ, dp[newI][newJ]});
                    }
                }
            }
        }
        return res;
    }
}
```
**Aaahhha it's accepted**
Later when I came to the discussion page and read some code. Then I remember this code is most likely the Dijkstra algorithm.
# So morel is
Instead of remembering the Algorithms just understand the actual concept and the problem for which any algorithms are made. Later in the future, you'll be building the same algorithms again and again without remembering.

**Please upvote if it's fun and knowledgeable for you.**

Happy coding!
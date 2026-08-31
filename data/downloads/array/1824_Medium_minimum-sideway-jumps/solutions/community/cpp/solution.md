# Recursive | Top-Down | Bottom-up | Space Optimization

**Author:** Sameeksha1304
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/3756264/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/3756264/)

---


We are checking all the possibilies and taking the minimum, so basically recursion!

1. if there is no obstacle in the lane we are standing at i.e. (`currLane`) then we will simply move to the next index (no jumps needed).

2. Now if there is an obstacle, then obiviously we can't stay in the same lane i.e. `i!=currLane` && there must not be an obstacle in the lane we gonna move i.e. `obstacles[idx]!=i`. Here we are taking a jump so +. 

3. We will take minimum of all the possiblities 

**Recursion (gives TLE)**
```
int solve(int idx, int currLane, vector<int>& obstacles){
        if(idx == obstacles.size() -1) return 0;
        // 1
        if(obstacles[idx+1] != currLane) return solve(idx+1, currLane, obstacles);
        // 2
        int mn = 1e9;
        for(int i = 1; i<=3; i++){
            if(i!=currLane && obstacles[idx]!=i){
        // 3
                mn = min(mn, 1 + solve(idx+1, i, obstacles));
            }
        }
        return mn;
    }
    int minSideJumps(vector<int>& obstacles) {
        return solve(0, 2, obstacles);
    }
```

Now if you can write the recurrence then writing top down is childplay.
Just store the computed values so that we can use them later when required.

**Top-down (Memoization)** 
```
 int solve(int idx, int currLane, vector<int>& obstacles, vector<vector<int>>& dp){
        if(idx == obstacles.size()-1) return 0;
        if(dp[idx][currLane] != -1) return dp[idx][currLane];
        if(obstacles[idx+1] != currLane) return solve(idx+1, currLane, obstacles, dp);
        int mn = 1e9;
        for(int i = 1; i<=3; i++){
            if(i!=currLane && obstacles[idx]!=i){
                mn = min(mn, 1 + solve(idx+1, i, obstacles, dp));
            }
        }
        return dp[idx][currLane] = mn;
    }
    int minSideJumps(vector<int>& obstacles) {
        int n = obstacles.size();
        vector<vector<int>> dp(n, vector<int> (4, -1));
        return solve(0, 2, obstacles, dp);
    }
```
We will write tabulation to get ride of the recursive stack space.

Bottom-up is starting with the base cases (reverse of top-down). So we will first write the base case in top down our idx was going from 0 to n-1 so here we will do the opposite. Other thing will remain same


**Bottom-up (Tabulation)** 
```
    int minSideJumps(vector<int> &obstacles){
            int n = obstacles.size();
            vector<vector < int>> dp(n, vector<int> (3, 1e9));
            for (int i = 0; i <= 2; i++) dp[n - 1][i] = 0;

            for (int idx = n - 2; idx >= 0; idx--){
                for (int currLane = 0; currLane <= 2; currLane++){
                    if (obstacles[idx+1] != currLane +1) dp[idx][currLane] = dp[idx + 1][currLane];
                    else
                    {
                        int mn = 1e9;
                        for (int i = 0; i <= 2; i++){
                            if (i != currLane && obstacles[idx] != i + 1){
                                mn = min(mn, 1 + dp[idx + 1][i]);
                            }
                        }
                        dp[idx][currLane] = mn;
                    }
                }
            }
            return min(dp[0][1], 1 + min(dp[0][0], dp[0][2]));
    }
```

We can notice that we only need values for idx & idx+1, so why store the whole vector. instead of this we will initilize two 1D arrays curr and prev, and keep on updating them in each iteration

**Space Optimized to O(n)**

```
    int minSideJumps(vector<int> &obstacles){
            int n = obstacles.size();
            vector<int> curr(3, 1e9), prev(3, 0);
            for (int idx = n - 2; idx >= 0; idx--){
                for (int currLane = 0; currLane <= 2; currLane++){
                    if (obstacles[idx+1] != currLane +1) curr[currLane] = prev[currLane];
                    else{
                        int mn = 1e9;
                        for (int i = 0; i <= 2; i++){
                            if (i != currLane && obstacles[idx] != i + 1){
                                mn = min(mn, 1 + prev[i]);
                            }
                        }
                        curr[currLane] = mn;
                    }
                }
                prev = curr;
            }
            return min(prev[1], 1 + min(prev[0], prev[2]));
    }

```

Please upvote if you find this helpful :)
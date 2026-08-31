# C++ Memoised DP solution

**Author:** Byte_Walker
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/1152537/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/1152537/)

---

First write down the recursive solution and then memoize it to approach it in a simple way. 

Start with lane 2 and we have the following options:-
1) If no obstacle on current lane on next position then we can move forward in same lane.
2) If we have an obstacle at the next pos, we can jump to either of the other two lanes (L1 and L2).
So, here we have 3 options :-
i) If we have an obstacle at L1 at same pos, jump to L2.
ii) If we have an obstacle at L2 at same pos, jump to L1.
iii) If no obstacle at either L2 or L1 at this pos, take minimum of both.
Repeat the same for the new current lane until we reach the second last position.

3) If we reached second last pos, we can return the ans.

**Recursive Solution: (TLE)**
```
class Solution {
public:
    int solve(vector<int>& obstacles, int pos, int lane)
    {
        if(pos == obstacles.size()-2)
            return 0;
        
        if(obstacles[pos+1]!=lane)
        {
            return solve(obstacles, pos+1, lane);
        }
        if(obstacles[pos+1]==lane){
            int l1=0, l2=0;
            if(lane==1)
            {
                l1=2;
                l2=3;
            }
            else if(lane==2)
            {
                l1=1;
                l2=3;
            }
            else{
                l1=1;
                l2=2;
            }
            if(obstacles[pos]==l1)
                return 1 + solve(obstacles, pos+1, l2);
            else if(obstacles[pos]==l2)
                return 1 + solve(obstacles, pos+1, l1);
            else
                return 1 + min(solve(obstacles, pos+1, l1), solve(obstacles, pos+1, l2));
        }
        return 0;
    }
    
    int minSideJumps(vector<int>& obstacles) {
        return solve(obstacles, 0, 2);
    }
};
```

**Memoized Approach (Accepted)**

```
class Solution {
public:
    int solve(vector<int>& obstacles, int pos, int lane, vector<vector<int>>&dp)
    {
        if(pos == obstacles.size()-2)
            return dp[pos][lane] = 0;
        
        if(dp[pos][lane]!=-1)
            return dp[pos][lane];
        
        if(obstacles[pos+1]!=lane)
        {
            return dp[pos][lane] = solve(obstacles, pos+1, lane, dp);
        }
        if(obstacles[pos+1]==lane){
            int l1=0, l2=0;
            if(lane==1)
            {
                l1=2;
                l2=3;
            }
            else if(lane==2)
            {
                l1=1;
                l2=3;
            }
            else{
                l1=1;
                l2=2;
            }
            if(obstacles[pos]==l1)
                return dp[pos][lane] = 1 + solve(obstacles, pos+1, l2, dp);
            else if(obstacles[pos]==l2)
                return dp[pos][lane] = 1 + solve(obstacles, pos+1, l1, dp);
            else
                return dp[pos][lane] = 1 + min(solve(obstacles, pos+1, l1, dp), solve(obstacles, pos+1, l2, dp));
        }
        return dp[pos][lane] = 0;
    }
    
    int minSideJumps(vector<int>& obstacles) {
        vector<vector<int>>dp(obstacles.size()+1, vector<int>(4,-1));
        return solve(obstacles, 0, 2, dp);
    }
};
```

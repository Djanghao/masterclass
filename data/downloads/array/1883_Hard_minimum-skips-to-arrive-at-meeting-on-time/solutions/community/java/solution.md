# Trying to explain the DP logic

**Author:** mylemoncake
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1246493/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1246493/)

---

```
class Solution {
    public int minSkips(int[] dist, int speed, int hoursBefore) {
        // Observations: 
        //    1. to skip is always better than not to skip
        //    2. given a fixed number of skips, the best time to reach ith road only depends on the best time to reach i-1 th road, 

        // Definition: 
        //      dp[i][j] / speed: minimum time needed if given j skip, to cover first i roads
        // init: 
        //      dp[0][0] / speed = ceiling of (dist[0] / speed)
        //      dp[0][1..j] = dist[0] / speed
        // transition: 
        //      when including ith road, i.e. from i-1 to i
        //          if skip at i, dp[i][j] / speed = dp[i-1][j-1] / speed + dist[i] / speed
        //          if not skip at i, dp[i][j] / speed = dp[i-1][j] / speed + (dist[i] + X) / speed, 
        //              X is defined as in: (dp[i-1][j] + dist[i] + X) / speed is the ceiling of (dp[i-1][j] + dist[i]) / speed
        //      dp[i][j] / speed = the min of above two choices
        
        // if ith road is the last one, doesn't need the skip to finish
        // dp[n][j] / speed = dp[n-1][j] / speed + dist[i] / speed
        
        // Observations: 
        //    1. speed is a constant, can be removed from equation. 
        //    2. backward traverse on j, to use only 1d array
        //    3. init step can be baked into transition step
        
        //init for i = 0, no need
        int[] dp = new int[dist.length+1]; // 0 .. j skips
        // dp[0] = (dist[0] + speed - 1) / speed * speed; // ceiling of dist[0] / speed
        // for (int i = 1; i < dp.length; i++) {
        //     dp[i] = dist[0];
        // }
        
        for (int i = 0; i < dist.length; i++) {
            for (int j = dp.length - 1; j >= 0; j--) {
                
                // two way of calculate the ceiling
                // int notToSkip = (dp[j] + dist[i]) % speed == 0 ? dp[j] + dist[i] : dp[j] + dist[i] + speed - (dp[j] + dist[i]) % speed; 
                int notToSkip = (dp[j] + dist[i] + speed - 1) / speed * speed;
                int toSkip = j - 1 >= 0 ? dp[j-1] + dist[i] : notToSkip; // if j == 0, cannot skip
                
                if (i == dist.length - 1) {
                    dp[j] = dp[j] + dist[i];
                } else {
                    dp[j] = Math.min(toSkip, notToSkip);
                }
            }
        }
        
        
        for (int j = 0; j < dp.length; j++) {
            if (dp[j] <= hoursBefore * speed ) {
                return j;
            }
        }
        return -1;
        
    }
}
```
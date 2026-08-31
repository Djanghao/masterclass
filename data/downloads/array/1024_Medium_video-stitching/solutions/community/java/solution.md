# From Recursion to DP & Greedy | 5 Solutions [Java]

**Author:** redocsuomynona
**Votes:** 11
**Link:** [https://leetcode.com/problems/video-stitching/solutions/1307648/](https://leetcode.com/problems/video-stitching/solutions/1307648/)

---

**Solutions**
N = size of clips array
T = time

**1. Recursion**
Time complexity: O(2^N)
Space complexity: O(N)

```java
class Solution {
    public int videoStitching(int[][] clips, int time) {
        // sort the clips by start time
        Arrays.sort(clips, (a, b) -> a[0] - b[0]);
        
        return recurse(clips, time, clips.length);
    }
    
    private int recurse(int[][] clips, int time, int size) {
        // base case
        if (time == 0) {
            return 0;
        }
        else if (size == 0) {
            return -1;
        }
        
        // skip the current clip
        int skip = recurse(clips, time, size - 1);
        
        // take the current clip is possible
        int[] newClip = clips[size - 1];
        int take = -1;
        if (newClip[0] < time && newClip[1] >= time) {
            take = recurse(clips, newClip[0], size - 1);
        }
        
        // return the optimal result
        int res = -1;
        if (skip == -1 && take != -1) {
            res = 1 + take;
        }
        else if (skip != -1 && take == -1){
            res = skip;
        }
        else if (skip != -1 && take != -1) {
            res = Math.min(skip, 1 + take);
        }
        
        return res;
    }
}
```

**2. Memoization (Top-Down)**
Time complexity: O(N * T)
Space complexity: O(N * T)

```java
class Solution {
    public int videoStitching(int[][] clips, int time) {
        // initialize dp table
        Integer[][] dp = new Integer[time + 1][clips.length + 1];
        for (Integer[] row: dp) {
            row[0] = -1;
        }
        Arrays.fill(dp[0], 0);
        
        // sort the clips by start time
        Arrays.sort(clips, (a, b) -> a[0] - b[0]);
        
        return recurse(clips, time, clips.length, dp);
    }
    
    private int recurse(int[][] clips, int time, int size, Integer[][] dp) {
        // check dp table
        if (dp[time][size] != null) {
            return dp[time][size];
        }
        
        // skip the current clip
        int skip = recurse(clips, time, size - 1, dp);
        
        // take the current clip is possible
        int[] newClip = clips[size - 1];
        int take = -1;
        if (newClip[0] < time && newClip[1] >= time) {
            take = recurse(clips, newClip[0], size - 1, dp);
        }
        
        // return the optimal result
        int res = -1;
        if (skip == -1 && take != -1) {
            res = 1 + take;
        }
        else if (skip != -1 && take == -1){
            res = skip;
        }
        else if (skip != -1 && take != -1) {
            res = Math.min(skip, 1 + take);
        }
        
        // update dp table
        dp[time][size] = res;
        return res;
    }
}
```

**3. Tabulation (Bottom-Up)**
Time complexity: O(N * T)
Space complexity: O(N * T)

```java
class Solution {
    public int videoStitching(int[][] clips, int time) {
        // initialize dp table
        Integer[][] dp = new Integer[time + 1][clips.length + 1];
        for (Integer[] row: dp) {
            row[0] = -1;
        }
        Arrays.fill(dp[0], 0);
        
        // sort the clips by start time
        Arrays.sort(clips, (a, b) -> a[0] - b[0]);
        
        // bottom-up
        for (int t = 1; t <= time; t++) {
            for (int s = 1; s <= clips.length; s++) {
                // skip the current clip
                int skip = dp[t][s - 1];

                // take the current clip is possible
                int[] newClip = clips[s - 1];
                int take = -1;
                if (newClip[0] < t && newClip[1] >= t) {
                    take = dp[newClip[0]][s - 1];
                }

                // return the optimal result
                int res = -1;
                if (skip == -1 && take != -1) {
                    res = 1 + take;
                }
                else if (skip != -1 && take == -1){
                    res = skip;
                }
                else if (skip != -1 && take != -1) {
                    res = Math.min(skip, 1 + take);
                }

                // update dp table
                dp[t][s] = res;
            }
        }
        
        return dp[time][clips.length];
    }
}
```

**4. Tabulation (Bottom-Up) with Space Optimization**
Time complexity: O(N * T)
Space complexity: O(T)

```java
class Solution {
    public int videoStitching(int[][] clips, int time) {
        // initialize dp table
        Integer[] dp = new Integer[time + 1];
        Arrays.fill(dp, -1);
        dp[0] = 0;
        
        // sort the clips by start time
        Arrays.sort(clips, (a, b) -> a[0] - b[0]);
        
        // bottom-up
        for (int s = 1; s <= clips.length; s++) {
            Integer[] prevDp = dp;
            dp = new Integer[time + 1];
            
            for (int t = 0; t <= time; t++) {
                if (t == 0) {
                    dp[t] = 0;
                    continue;
                }
                
                // skip the current clip
                int skip = prevDp[t];

                // take the current clip is possible
                int[] newClip = clips[s - 1];
                int take = -1;
                if (newClip[0] < t && newClip[1] >= t) {
                    take = prevDp[newClip[0]];
                }

                // return the optimal result
                int res = -1;
                if (skip == -1 && take != -1) {
                    res = 1 + take;
                }
                else if (skip != -1 && take == -1){
                    res = skip;
                }
                else if (skip != -1 && take != -1) {
                    res = Math.min(skip, 1 + take);
                }

                // update dp table
                dp[t] = res;
            }
        }
        
        return dp[time];
    }
}
```

**5. Greedy**
Time complexity: O(NlogN)
Space complexity: O(1)

```java
class Solution {
    public int videoStitching(int[][] clips, int time) {
        //sort array by start time
        Arrays.sort(clips, (a, b) -> a[0] - b[0]);
        
        int cur = 0;
        int low = 0;
        int count = 0;
        while (cur < clips.length && clips[cur][0] <= low && low < time) {
            int maxUp = 0;
            
            while (cur < clips.length && clips[cur][0] <= low) {
                maxUp = Math.max(maxUp, clips[cur][1]);
                cur++;
            }
            
            count++;
            low = maxUp;
        }
        
        return low >= time ? count : -1;
    }
}
```
# [C++] Dp Solution (Explained Thoroughly)

**Author:** SparshKat
**Votes:** 72
**Link:** [https://leetcode.com/problems/video-stitching/solutions/707876/](https://leetcode.com/problems/video-stitching/solutions/707876/)

---

**C++ Solution**

`dp[i]` here means the minimum number of clips needed to atleast cover ith time .
For Eg : `dp[3]` gives the number of clips required to atleast cover a time of 3.
So returning a `dp[T]` is needed.

**If condition requirement  `if(clip[0] <= i && i <= clip[1])` :** 
This If condition checks if the taken video clip's starting time is smaller or equal to the `i`(which represents the max time for the clip to run or the least time we need to cover).

`dp[i] = min(dp[i], dp[clip[0]] + 1);` tells that if we find a clip whose starting time is smaller than ith time and ending time is bigger than ith time. Then we can effectively take this clip for our use and check if this gives us minimum answer.
We take the amount of clips required till starting time of taken clip and then add 1 to it.

Enjoy :)

```
int videoStitching(vector<vector<int>>& clips, int T) {
        int n = clips.size();
        vector<int> dp(T+2,T+1);
        dp[0] = 0;
        for(int i=0;i<=T;i++){
            for(auto clip : clips){
                if(clip[0] <= i && i <= clip[1]){
                    dp[i] = min(dp[i], dp[clip[0]] + 1);
                }
            }
            if(dp[i] >= T+1) return -1;
        }
        return dp[T];
    }
```
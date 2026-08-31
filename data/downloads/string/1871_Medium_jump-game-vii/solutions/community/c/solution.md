# DP + Sliding Window | O(N) | Single Pass

**Author:** yajassardana
**Votes:** 78
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/1224936/](https://leetcode.com/problems/jump-game-vii/solutions/1224936/)

---

* We use a DP + Sliding window approach to solve this problem:
	* We keep a count of the number of indices in a window of size `maxJump-minJump`   from which we can reach current index 'i'.
	* We also decerement count if there was a possiblity to reach current index i from `i-maxJump-1`, as we can no longer jump from that index to reach  current `'i'` as it's no longer a part of the sliding window.
	* Finally, for the current index i if the `count > 0` , this means that there is atleast one way to reach from the window `(i-maxJump, i-minJump)` to our `i`, so we set the `dp[i] = 0` in this case, with the added check that `s[i]=='0'`.
**Feel free to drop your queries in the comment box**
```
class Solution {
public:
    bool canReach(string s, int mi, int ma) {
 \xA0 \xA0 \xA0 \xA0if(s.back()=='1)return false; // In case the last character is '1', we'll never be able to reach the end.
        vector<bool>dp(s.size());
        dp[0] = true;
        int count = 0;
        for(int i = 1; i<s.size(); i++){
            if(i>ma){
                count-=dp[i-ma-1]; //Moving sliding window forward by decrementing the count by the dp value of the index that is no longer in our window
            }
            if(i>=mi){
                count+=dp[i-mi];
            }
            if(count>0&&s[i]=='0')dp[i] = true;
            else dp[i] = false;
        }
        return dp.back();
    }
};
```
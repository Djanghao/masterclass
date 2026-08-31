# Simple and short Bitmask DP

**Author:** cjcoax
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2546958/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2546958/)

---

* Iterate over all possible order of selections
	e.g. in an array of size 3 following will be all selection order permutations
```
	1. 1,2,3             4. 2,3,1
	2. 1,3,2             5. 3,1,2
	3. 2,1,3             6. 3,2,1
```
* Keep track of the order of selection of the current item (it'll be the gain). 
  e.g. if we want to kill monster at 3rd position in 2nd selection, gain is 2. 
  Because we have killed 1 monster so far, when we had gain 1. 
  Now for killing second monster, so our gain will be increased by 1, and now it's 2.
 
The wait time for monster at index `i` is `ceil(power[position i]/gain)` or
`power[position i]/gain + power[position i]%gain != 0`

Also cache all calculated results in a 2d array dp. Complexity is `O(N * 2**N)`


```
class Solution {
public:
    long long dp[19][1<<18] = {}, total = 0, n = 0;
    long long dfs(int gain, int mask, vector<int> &power) {
        if (mask == total) return 0;
        if (!dp[gain][mask]) {
            dp[gain][mask] = LLONG_MAX;
            for (int i = 0; i < n; i++) {
                int j = 1<<i;
                if (j&mask)
                    continue;
                long long wait = power[i]/gain + (power[i]%gain != 0);
                dp[gain][mask] = min(dp[gain][mask], wait + dfs(gain+1, mask|j, power));
            }
        }
        return dp[gain][mask];
    }
    long long minimumTime(vector<int>& power) {
        n = power.size(); total = (1<<n) - 1;
        return dfs(1, 0, power);
    }
};
```
Please upvote if it helped :)
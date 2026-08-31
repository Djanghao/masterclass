# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2998690/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2998690/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [YouTube Channel](https://www.youtube.com/@leetcodethehardway) if you are interested.

---

```cpp
class Solution {
public:
    long long mod = 1e9 + 7;
	
	// See tutorial here
	// https://wingkwong.github.io/leetcode-the-hard-way/tutorials/math/number-theory/binary-exponentiation
    long long modpow(long long base, long long exp) {
      base %= mod;
      long long res = 1;
      while (exp > 0) {
        if (exp & 1) res = (res * base) % mod;
        base = (base * base) % mod;
        exp >>= 1;
      }
      return res;
    }
    
    int maxFrequencyScore(vector<int>& nums, int k) {
        long long sum = 0LL;
        unordered_map<long long, long long> m;
        // count the frequency for the first window
        for (int i = 0; i < k; i++) m[nums[i]]++;
        // calculate the result for the first window
        for (auto x : m) sum = (sum + modpow(x.first, x.second)) % mod;
        // assume the first window is the answer
        long long ans = sum;
        // try different windows
        for (int i = k; i < nums.size(); i++) {
            // remove the leftmost element
            // we remove the frequency score for nums[i - k]
            // here we need to add mod to handle negative value
            if (m[nums[i - k]] > 0) sum = (sum - modpow(nums[i - k], m[nums[i - k]]) + mod) % mod;
            // then decrease the frequency by 1
            m[nums[i - k]]--;
            // if it is still greater than 0, then we add the score back
            if (m[nums[i - k]] > 0) sum = (sum + modpow(nums[i - k], m[nums[i - k]])) % mod;
            
            // add the current element
            // similarly we remove the frequency score for nums[i]
            // here we need to add mod to handle negative value
            if (m[nums[i]] > 0) sum = (sum - modpow(nums[i], m[nums[i]]) + mod) % mod;
            // then increase the frequency by 1
            m[nums[i]]++;
            // add the score to sum
            sum = (sum + modpow(nums[i], m[nums[i]])) % mod;
            // update the max score
            ans = max(ans, sum);
        }
        return ans;
    }
};
```
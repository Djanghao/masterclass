# [C++] Detailed Explanation with Thought Process | DP

**Author:** annashekhawat
**Votes:** 492
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211070/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211070/)

---

**Intuition and My Thought Process:**
Let's say n = 5, k = 3.
Starting from the leftmost position, for the first position, we have five options to choose from. If we choose 3 at the first position, then we are left with the set {1, 2, 4, 5} and the sticks of sizes 1 and 2 can never be seen from the left side. So we must maintain the order that 4 comes before 5 (because we need 3 sticks to be visible) and the rest of the order can be anything (for example [1, 2, 4, 5], [2, 4, 5, 1], and many other possibilites). So for any state (n, k), we must also have the information about what the tallest stick on the left is, and how many of the remaining sticks are smaller than that stick. Without it, we cannot do anything. And keeping track of all this information seems to be a lot and it also increases the complexity beyond the given constraints. I mentioned this because this was my first thought too. And after realizing that this is too complex, I started thinking in a different direction.

Another way to think about this problem is to assign a stick to the rightmost position first. After selecting a stick for the rightmost position, we will be left with n - 1 sticks of different sizes that will go on its left and there will be no restriction imposed by the stick we selected to be at the rightmost position. We just need to track whether the stick we selected at the rightmost position will be visible from the left side or not. And figuring that out is easy. It will be visible from the left side if it was the tallest of all the sticks we had. And it will not be visible from the left if it wasn't the tallest stick. So the two possibilities for the rightmost stick selection at any point where we have n sticks and k of them need to be visible from the left:
1. We select the tallest of the n sticks. There's only one such stick and this stick will finally be visible from the left. And so we are left with the sub-problem (n - 1, k - 1).
2. We select a stick that's not the tallest one. We can do this by selecting any of the n - 1 sticks that are not the tallest one. So there are n - 1 sub-problems and each of them is (n - 1, k). This stick we selected will not be visible from the left, so we still gotta select k sticks from the remaining pile that will be visible, that's why the sub-problem has k, and not k - 1.

I have implemented a top-down dp approach.
Time complexity: O(n * k)

```
#define ll long long
class Solution {
public:
    vector<vector<ll> > dp;
    ll mod = 1e9 + 7;
    
    ll numWays(ll n, ll k) {
        if(k == 0 || k > n) return 0; // can't have no stick visible or more sticks visible than the total number of sticks
        if(n <= 2) return 1; // base condition
        
        if(dp[n][k] != -1) return dp[n][k]; // return if already calculated
        
        ll ans = 0;
        
        // select the tallest stick
        ans = (ans + numWays(n - 1, k - 1)) % mod;
        
        // select any of the n - 1 sticks that are not the tallest
        ans = (ans + ((n - 1) * numWays(n - 1, k))) % mod;
        
        return dp[n][k] = ans;
    }
    
    int rearrangeSticks(int n, int k) {
        dp = vector<vector<ll> >(n + 1, vector<ll>(k + 1, -1));
        return numWays(n, k);
    }
};
```
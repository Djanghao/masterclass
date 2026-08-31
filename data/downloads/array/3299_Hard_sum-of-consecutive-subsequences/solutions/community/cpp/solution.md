# C++ | DP on Element Size

**Author:** blank_manash
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5874809/](https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5874809/)

---

# Intuition

We will solve this problem individually for 1, and -1 sequences. For generalization let me assume it to be $d$. 

# Approach

Let $dp[x]$ represent the sum of values such that the sequence ends at $x$, i.e $dp[x]$ is the answer for all the sequences such that last element is $x$.

The transition is defined as follows

For current element $x$, we find the number of sequences that end at $x-d$. Let this be $c[x-d]$. 

Since we also include the current element, the total number of sequences will be 
$1+c[x-d]$

This is the number of times $x$ will be added to $dp[x]$. In addition to that we also have to add the previous sum $dp[x-d]$. 

So the final transition is

$dp[x]=dp[x-d]+x\	imes c[x-d]$

With this we only need to calculate array $c$, 
It can be observed that $c[x]$ is nothing but $1+c[x]+c[x-d]$.
The last $c[x]$ is for the older elements. As it is defined as the number of sequences that end with $x$. 

Finally while computing for both $\\{1,-1\\}$ we will add the singular elements twice, hence we need to subtract once. 

All operations are done $\\mod 10^9+7$

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
const int mod = 1e9 + 7;
class Solution {
    int add(int a, int b) {
        long long c = 0LL + a + b;
        c %= mod;
        if (c < 0) c += mod;
        return (int) c;
    }

    int mul(int a, int b) {
        long long c = 1LL * a * b;
        c %= mod;
        return (int) c;
    }


    int getSumWithD(const vector<int> &v, int d) {
        int n = v.size();
        int N = * max_element(v.begin(), v.end());
        vector<int> dp(N + 1), s(N + 1), c(N + 1);
        for(int i = 0; i < n; ++i) {
            int x = v[i];
            s[x] = 1;
            int curCount = 1;
            if (x - d >= 1 && x - d <= N && s[x - d]) {
                curCount = add(curCount, c[x - d]);
                dp[x] = add(dp[x], dp[x - d]);
            }
            int m = mul(curCount, x);
            c[x] = add(c[x], curCount);
            dp[x] = add(dp[x], m);
        }
        int ans = 0;
        for(int i = 1; i <= N; ++i) {
            if (s[i]) {
                ans = add(ans, dp[i]);
            }
        }
        return ans;
    }



public:
    int getSum(vector<int>& nums) {
        int ans = 0;
        for(int d : {1, -1}) {
            int now = getSumWithD(nums, d);
            ans = add(ans, now);
        }
        for(int x : nums) {
            ans = add(ans, -x);
        }
        return ans;
    };
};

```
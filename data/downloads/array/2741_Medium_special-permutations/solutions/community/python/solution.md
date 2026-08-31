# ✅Brute Force✅ || 🔥DP + BitMask🔥 || C++ || Java || Python

**Author:** AnishKrSingh
**Votes:** 6
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3650631/](https://leetcode.com/problems/special-permutations/solutions/3650631/)

---

# Intuition
**```Since we need to form a permutation we can start from no elements and then each time we take a element we can see what further element can be taken to form permuatation with it```**

# Approach
**```Since we are exploring all possible permutation we will apply Dynamic Programming and BitMasking (for keeping visited track)```**

**We will maintain a previous element so that at each point when we take a new element which was previously not taken we can satisfy the condition** ``` nums[i] % nums[i + 1] == 0 || nums[i + 1] % nums[i] == 0```

**To iterate over those elements which are previously not taken we will maintain mask.**

# Complexity
**- Time complexity:**
**```The overall time complexity of the code is O(N * 2^N * N) ```**

**- Space complexity:**
**```Since we are using the dp table space complexity goes up to O(14 + 1)(2 ^ 14)```**

# Code (C++)
```
class Solution {
public:
    int mod = 1e9 + 7;
    int sb(int x)
    {
        int ans = 0;
        while (x > 0)
        {
            if (x & 1)
                ans++;
            x = x >> 1;
        }
        return ans;
    }
    long long dp[1 << 14][15];
    int func(int idx, vector<int> &nums, int mask, int prev)
    {
        if (idx == nums.size())
            return (sb(mask) == nums.size());
        long long way1 = 0;
        if (dp[mask][prev + 1] != -1)
            return dp[mask][prev + 1];
        if (prev == -1)
        {
            for (int i = 0; i < nums.size(); ++i)
            {
                if (mask & (1 << i))
                    continue;
                else
                {
                    int newMask = mask | (1 << i);
                    way1 =(way1 + func(idx + 1, nums, newMask, i)) % mod;
                }
            }
        }
        else
        {
            for (int i = 0; i < nums.size(); ++i)
            {
                if (mask & (1 << i))
                    continue;
                else
                {
                    if (nums[i] % nums[prev] == 0 || nums[prev] % nums[i] == 0)
                    {
                        int newMask = mask | (1 << i);
                        way1 = (way1 + func(idx + 1, nums, newMask, i)) % mod;
                    }
                }
            }
        }
        return dp[mask][prev + 1] = (way1) % mod;
    }
    int specialPerm(vector<int>& nums) {
        memset(dp, -1, sizeof(dp));
        int mask = 0;
        return func(0, nums, mask, -1) % mod;
    }
};
```
# Code(Java)
```
import java.util.Arrays;

class Solution {
    int mod = 1000000007;

    int sb(int x) {
        int ans = 0;
        while (x > 0) {
            if ((x & 1) == 1)
                ans++;
            x = x >> 1;
        }
        return ans;
    }

    long[][] dp = new long[1 << 14][15];

    int func(int idx, int[] nums, int mask, int prev) {
        if (idx == nums.length)
            return (sb(mask) == nums.length) ? 1 : 0;

        long way1 = 0;

        if (dp[mask][prev + 1] != -1)
            return (int) dp[mask][prev + 1];

        if (prev == -1) {
            for (int i = 0; i < nums.length; ++i) {
                if ((mask & (1 << i)) != 0)
                    continue;
                else {
                    int newMask = mask | (1 << i);
                    way1 = (way1 + func(idx + 1, nums, newMask, i)) % mod;
                }
            }
        } else {
            for (int i = 0; i < nums.length; ++i) {
                if ((mask & (1 << i)) != 0)
                    continue;
                else {
                    if (nums[i] % nums[prev] == 0 || nums[prev] % nums[i] == 0) {
                        int newMask = mask | (1 << i);
                        way1 = (way1 + func(idx + 1, nums, newMask, i)) % mod;
                    }
                }
            }
        }

        return (int) (dp[mask][prev + 1] = way1 % mod);
    }

    int specialPerm(int[] nums) {
        for (long[] row : dp)
            Arrays.fill(row, -1);

        int mask = 0;
        return func(0, nums, mask, -1) % mod;
    }
}
```
# Code(Python)
```
class Solution:
    mod = 10**9 + 7

    def sb(self, x):
        ans = 0
        while x > 0:
            if x & 1:
                ans += 1
            x = x >> 1
        return ans

    def __init__(self):
        self.dp = [[-1] * 15 for _ in range(1 << 14)]

    def func(self, idx, nums, mask, prev):
        if idx == len(nums):
            return 1 if self.sb(mask) == len(nums) else 0

        way1 = 0

        if self.dp[mask][prev + 1] != -1:
            return self.dp[mask][prev + 1]

        if prev == -1:
            for i in range(len(nums)):
                if mask & (1 << i):
                    continue
                else:
                    newMask = mask | (1 << i)
                    way1 = (way1 + self.func(idx + 1, nums, newMask, i)) % self.mod
        else:
            for i in range(len(nums)):
                if mask & (1 << i):
                    continue
                else:
                    if nums[i] % nums[prev] == 0 or nums[prev] % nums[i] == 0:
                        newMask = mask | (1 << i)
                        way1 = (way1 + self.func(idx + 1, nums, newMask, i)) % self.mod

        self.dp[mask][prev + 1] = way1
        return self.dp[mask][prev + 1]

    def specialPerm(self, nums):
        mask = 0
        return self.func(0, nums, mask, -1) % self.mod
```

``` Please Upvote if it was helpful ```
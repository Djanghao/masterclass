# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 172
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/1766824/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/1766824/)

---

Watching Beijing Olympics game,
you will be encouraged and have better performance on LeetCode.

# **Intuition**
DP solution, but need to figure out how to define bit mask.

I considered two options
1) Use a mask on base-3
2) Use a mask on base-2, and each slot takes two bits.

I feel no big difference on code length,
and base-3 has slightly better complexity.
<br>

# **Optimization**
Usually the bitmask dp will be in format of `dp(i, mask) = max(current, dp(i, mask - bit) + value)`
and we memorized `dp(i, mask)`.
Actually in this problem, I only memorized `mask`, without caring about `i`.
Since `mask` has the information of the `slots` used
<br>

# **Explanation**
We recursively check `dp(i, mask)`,
meanning we are going to assign `A[i]` with current bitmask `mask`.
`dp(i, mask)` is the biggest AND sum we can get, by assign `A[0]` to `A[i]` into the remaining slots.

We iterate all slots, the corresponding `bit = 3 ** (slot - 1)`.
Ther check if this `slot` is availble.
If it's available, we take it and recursively check `dp(i - 1, mask - bit)`.
<br>

# **Complexity**
Time `O(ns * 3^ns)`
Space `O(3^ns)`
<br>

**Java**
```java
    public int maximumANDSum(int[] A, int ns) {
        int mask = (int)Math.pow(3, ns) - 1;
        int[] memo = new int[mask + 1];
        return dp(A.length - 1, mask, ns, memo, A);
    }
    
    private int dp(int i, int mask, int ns, int[] memo, int[] A) {
        if (memo[mask] > 0) return memo[mask];
        if (i < 0) return 0;
        for (int slot = 1, bit = 1; slot <= ns; ++slot, bit*= 3)
            if (mask / bit % 3 > 0)
                memo[mask] = Math.max(memo[mask], (A[i] & slot) + dp(i - 1, mask - bit, ns, memo, A));
        return memo[mask];
    }
```

**C++**
Using helper function
```cpp
    int maximumANDSum(vector<int>& A, int ns) {
        int mask = pow(3, ns) - 1;
        vector<int> memo(mask + 1, 0);
        return dp(A.size() - 1, mask, ns, memo, A);
    }
    
    int dp(int i, int mask, int ns, vector<int>& memo, vector<int>& A) {
        if (memo[mask] > 0) return memo[mask];
        if (i < 0) return 0;
        for (int slot = 1, bit = 1; slot <= ns; ++slot, bit*= 3)
            if (mask / bit % 3 > 0)
                memo[mask] = max(memo[mask], (A[i] & slot) + dp(i - 1, mask - bit, ns, memo, A));
        return memo[mask];
    }
```

**C++**
using lambda function
```cpp
    int maximumANDSum(vector<int>& A, int ns) {
        int mask = pow(3, ns) - 1;
        vector<int> memo(mask + 1, 0);

        function<int(int, int)> dp =
        [&](int i, int mask) {
            int& res = memo[mask];
            if (res > 0) return res;
            if (i < 0) return 0;
            for (int slot = 1, bit = 1; slot <= ns; ++slot, bit *= 3)
                if (mask / bit % 3 > 0)
                    res = max(res, (A[i] & slot) + dp(i - 1, mask - bit));
            return res;
        };

        return dp(A.size() - 1, mask);
    }
```
**Python3**
```py
    def maximumANDSum(self, A, ns):
        @lru_cache(None)
        def dp(i, mask):
            res = 0
            if i == len(A): return 0
            for slot in range(1, ns + 1):
                b = 3 ** (slot - 1)
                if mask // b % 3 > 0:
                    res = max(res, (A[i] & slot) + dp(i + 1, mask - b))
            return res
        
        return dp(0, 3 ** ns - 1)
```

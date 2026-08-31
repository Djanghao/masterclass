# [Java/C++/Python] Prefix XOR

**Author:** lee215
**Votes:** 133
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3286372/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3286372/)

---

# **Intuition**
Similar to the problem to count the subarrays with `sum = k`.
We can record the prefix sum to solve it.

Here we are counting the subarrays with `xor = 0`.
we can record the prefix xor to solve it.
<br>

# **Explanation**
`pre` records the prefix xor,
where `pre[i] = pre[i-1] ^ A[i]`.

`dp` counts the frequency for prefix different value.
At first `pre = 0`,
so we initilize `dp[0] = 1`.

As we iterate every `A[i]`,
we update `pre ^= A[i]`,
the number of current `dp[pre]`,
means the number prefix array with xor is `pre`,
corresponding the number of subarray ending at `A[j]` with `xor = pre ^ pre = 0`.
so we update the result `res += dp[pre]` and `dp[pre] += 1`

Finally we return `res`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long beautifulSubarrays(int[] A) {
        HashMap<Integer, Integer> dp = new HashMap<>();
        dp.put(0, 1);
        int pre = 0;
        long res = 0;
        for (int a : A) {
            pre ^= a;
            int v = dp.getOrDefault(pre, 0);
            res += v;
            dp.put(pre, v + 1);
        }
        return res;
    }
```

**C++**
```cpp
    long long beautifulSubarrays(vector<int>& A) {
        unordered_map<int, int> dp{{0, 1}};
        long long res = 0, pre = 0;
        for (int a : A)
            res += dp[pre ^= a]++;
        return res;
    }
```

**Python**
```py
    def beautifulSubarrays(self, A):
        dp = Counter({0: 1})
        res = pre = 0
        for a in A:
            pre ^= a
            res += dp[pre]
            dp[pre] += 1
        return res
```

# [Java/C++/Python] DP + Prefix Sum

**Author:** lee215
**Votes:** 70
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4112000/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4112000/)

---

# **Intuition**
We may cover several complete array of `A`,
so we firstly calculate `sumA`, the array sum of `A`.

`k = target // sumA`, so we know can cover `k` compelete `A`
and update `target %= sumA`.

If `taregt == 0`, no more to take, we can return `k * n`
Otherwise, we need to make up `target` with a subarray.
<br>

# **Explanation**
`dp[sum] = index`,
which means the prefix sum at `index` is `sum`.

We will iterate `A` from index `0` to index `n + n - 1`,
so we can cover all subarraies without a complete `A`.
Each time,
we update the prefix `sum`,
and check if we have met `sum - target`,
and update the minimum length `res`.

If we find the target, we'll return `res + k * n`,
otherwise return `-1`
<br>

# **Follow up**
What's if `A[i]` can be negative?
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int minSizeSubarray(int[] A, int target) {
        long sumA = 0L, su = 0L;
        for (int a : A)
            sumA += a;
        int n = A.length, k = (int)(target / sumA), res = n;
        target %= sumA;
        if (target == 0) {
            return k * n;
        }

        HashMap<Long, Integer> dp = new HashMap<>();
        dp.put(0L, -1);

        for (int i = 0; i < 2 * n; ++i) {
            su += A[i % n];
            if (dp.containsKey(su - target)) {
                res = Math.min(res, i - dp.get(su - target));
            }
            dp.put(su, i);
        }

        return res < n ? res + k * n : -1;
    }
```

**C++**
```cpp
    int minSizeSubarray(vector<int>& A, int target) {
        long sumA = accumulate(A.begin(), A.end(), 0L), su = 0;
        int n = A.size(), k = target / sumA, res = n;
        target %= sumA;
        if (target == 0)
            return k * n;
        unordered_map<long, int> dp{{0L, -1}};
        for (int i = 0; i < 2 * n; ++i) {
            su += A[i % n];
            if (dp.count(su - target))
                res = min(res, i - dp[su - target]);
            dp[su] = i;
        }
        return res < n ? res + k * n : -1;
    }
```

**Python**
```py
	def minSizeSubarray(self, A: List[int], target: int) -> int:
        sumA = sum(A)
        n = len(A)
        k = target // sumA
        target %= sumA
        if target == 0:
            return k * n

        dp = {0: -1}
        su = 0
        res = inf
        for i,a in enumerate(A + A):
            su += a
            if su - target in dp:
                res = min(res, i - dp.get(su - target))
            dp[su] = i
        return res + k * n if res < inf else -1
```

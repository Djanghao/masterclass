# [Java/C++/Python] Minimum Distance of Points

**Author:** lee215
**Votes:** 50
**Link:** [https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4886430/](https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4886430/)

---

# **Intuition 1**
The cost of using operation 1 to pick 1, is 2.
The cost of using operation 2 to pick 1, is the distance to that 1.
<br>

# **Intuition 2**
`i - 1, i, i + 1`, at most 3 places have diatance `<= 2`.
We will at most take `m + 3` of 1 using operation 2,

and also,
`m <= n`, where we have `n` of 1 at the begin.
`m <= k`, where need `k` of 1.
<br>

# **Explanation**
Now the question is simple,
what's the minimum distance from `m` points in `A`?

We choose the center of `m` points as initial index,
and calculate the total distance with prefix skill.

Return the minimum result in the end.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long minimumMoves(int[] nums, int k, int maxChanges) {
        List<Long> A = new ArrayList<>();
        A.add(0L);
        for (int i = 0; i < nums.length; i++)
            if (nums[i] > 0)
                A.add(A.get(A.size() - 1) + i);

        int n = A.size() - 1, m = Math.max(0, k - maxChanges);
        long res = Long.MAX_VALUE;
        for (int l = m; l <= Math.min(n, Math.min(m + 3, k)); l++) {
            for (int i = 0; i <= n - l; i++) {
                int mid1 = i + l / 2, mid2 = i + l - l / 2;
                long cur = A.get(i + l) - A.get(mid2) - (A.get(mid1) - A.get(i));
                res = Math.min(res, cur + (k - l) * 2);
            }
        }
        return res;
    }
```

**C++**
```cpp
    long long minimumMoves(vector<int>& nums, int k, int maxChanges) {
        vector<long long> A = {0};
        for (int i = 0; i < nums.size(); ++i)
            if (nums[i] > 0)
                A.push_back(A.back() + i);
        int n = A.size() - 1, m = max(0, k - maxChanges);
        long long res = 1e10;
        for (int l = m; l <= min(n, min(m + 3, k)); ++l) {
            for (int i = 0; i <= n - l; ++i) {
                int mid1 = i + l / 2, mid2 = i + l - l / 2;
                long long cur = A[i + l] - A[mid2] - (A[mid1] - A[i]);
                res = min(res, cur + (k - l) * 2);
            }
        }
        return res;
    }
```

**Python**
```py
    def minimumMoves(self, A: List[int], k: int, maxChanges: int) -> int:
        A = [i for i,a in enumerate(A) if a]
        n = len(A)
        A = [0] + list(accumulate(A))
        m = max(0, k - maxChanges)
        res = inf
        for m in range(m, min(n, m + 3, k) + 1):
            for i in range(n - m + 1):
                cur = (A[i + m]) - A[i + m - m // 2] - (A[i + m // 2] - A[i])
                res = min(res, cur + (k - m) * 2)
        return res
```

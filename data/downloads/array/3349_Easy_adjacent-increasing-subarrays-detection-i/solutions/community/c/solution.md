# [Java/C++/Python] One Pass, O(1) Space

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6028775/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6028775/)

---

# **Intuition**
Split `A` into multiple mono incresing subarray.
(subarray as long as possible).
<br>

# **Explanation**
`pre_max_up` the length of previous increasing subarray.
`up` the length of current increasing subarray.

One option,
we can directly use two adjacent increasing subarray.
`k = min(up, pre_max_up)`

The other option,
we can split one long subarray into two adjacent halves,
each is still mono increasing.
`k = up / 2`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

```Java [Java]
    public boolean hasIncreasingSubarrays(List<Integer> A, int k) {
        int n = A.size(), up = 1, pre_max_up = 0, res = 0;
        for (int i = 1; i < n; ++i) {
            if (A.get(i) > A.get(i - 1)) {
                up++;
            } else {
                pre_max_up = up;
                up = 1;
            }
            res = Math.max(res, Math.max(up / 2, Math.min(pre_max_up, up)));
        }
        return res >= k;
    }
```

```C++ [C++]
    bool hasIncreasingSubarrays(vector<int>& A, int k) {
        int n = A.size(), up = 1, pre_max_up = 0, res = 0;
        for (int i = 1; i < n; ++i) {
            if (A[i] > A[i - 1]) {
                up++;
            } else {
                pre_max_up = up;
                up = 1;
            }
            res = max({res, up / 2, min(pre_max_up, up)});
        }
        return res >= k;
    }
```

```py [Python3]
    def hasIncreasingSubarrays(self, A: List[int], k: int) -> bool:
        n = len(A)
        up = 1
        pre_max_up = 0
        res = 0
        for i in range(1, n):
            if A[i] > A[i - 1]:
                up = up + 1
            else:
                pre_max_up = up
                up = 1
            res = max(res, up // 2, min(pre_max_up, up))
        return res >= k
```

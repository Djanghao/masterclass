# [Java/C++/Python] Sliding Window, no Binary Search

**Author:** lee215
**Votes:** 54
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4414772/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4414772/)

---

# **Intuition**
Sort the input `A`,
and we will make a subarray of `A` all same,
with cost at most `k`.

the cost of making subarray same,
is the bigger half sum - smaller half sum.
<br>


# **Solution 1: With Binary Search**

Binary search the length of subarray,
and one pass `A` to check if it's possible.

Time `O(nlogn)`
Space `O(n)`

**Python**
```py
    def maxFrequencyScore(self, A: List[int], k: int) -> int:
        n = len(A)
        acc = list(accumulate(sorted(A), initial = 0))
        l, r = 1, n
        while l < r:
            m = (l + r + 1) // 2
            for i in range(n - m + 1):
                if (acc[i + m] - acc[i + (m + 1) // 2]) - (acc[i + m // 2] - acc[i]) <= k:
                    l = m
                    break
            else:
                r = m - 1
        return l
```
<br>

# **Solution 2: Sliding Window**
Actually in solution,
we already keep(calculate) the cost of sliding window,
We don't need to binary search the window size.

So we apply a normal sliding window format to solve this problem,
`cur` means the cost of current sliding window.

Time `O(sort)`
Space `O(sort)`

**Java**
```java
    public int maxFrequencyScore(int[] A, long k) {
        int i = 0, res = 0, n = A.length;
        long cur = 0;
        Arrays.sort(A);
        for (int j = 0; j < n; ++j) {
            cur += A[j] - A[(i + j) / 2];
            while (cur > k) {
                cur -= A[(i + j + 1) / 2] - A[i];
                i++;
            }
            res = Math.max(res, j - i + 1);
        }
        return res;
    }
```
<br>

# **Solution 3: Shorter Version**
Advanced shorter version of sliding window.
`O(sort)` for sort
Time `O(n)` for sliding window
Space `O(1)` for sliding window

**Java**
```java
    public int maxFrequencyScore(int[] A, long k) {
        int i = 0, n = A.length;
        Arrays.sort(A);
        for (int j = 0; j < n; ++j)
            if ((k -= A[j] - A[(i + j) / 2]) < 0)
                k += A[(i + j + 1) / 2] - A[i++];
        return n - i;
    }
```

**C++**
```cpp
    int maxFrequencyScore(vector<int>& A, long long k) {
        int i = 0, n = A.size();
        sort(A.begin(), A.end());
        for (int j = 0; j < n; ++j)
            if ((k -= A[j] - A[(i + j) / 2]) < 0)
                k += A[(i + j + 1) / 2] - A[i++];
        return n - i;
    }
```
**Python**
```py
    def maxFrequencyScore(self, A: List[int], k: int) -> int:
        i = 0
        A.sort()
        for j in range(len(A)):
            k -= A[j] - A[(i + j) // 2]
            if k < 0:
                k += A[(i + j + 1) // 2] - A[i]
                i += 1
        return j - i + 1
```

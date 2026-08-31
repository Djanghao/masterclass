# [Java/C++/Python] DP + Binary Search

**Author:** lee215
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4329014/](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4329014/)

---

# **Intuition**
Assume `dp[i]` is the result for `i` first elements.
the `i` first elements can be a non-decreasing array with length `dp[i]`,
after applying operations.

For the next `A[i]`,
we can append it to previous last element,
and it's still non-decreasing array.
So we prove that `dp[i] <= dp[i + 1]`,
result `dp` is also a non-decreasing array.
<br>

# **Intuition II**
Because `dp` is increasing,
so for each `A[j]`,
we want to find the biggest `i` that,
 `A[i] + A[i + 1] .. + A[j]` is big enough to make the applied array non-decreasing,
then `dp[j + 1] = dp[i] + 1`.


# **Solution 1**
After the above intuition,
we can have this "brute force" solution.
`acc` is the prefix sum array of `A`.

Time `O(n^2)`, will be TLE
Space `O(n)`

**Python**
```py
    def findMaximumLength(self, A: List[int]) -> int:
        n = len(A)
        last = [0] + [inf] * n
        acc = [0]
        dp = [0] + [0] * n
        for j in range(n):
            a = A[j]
            acc.append(a + acc[-1])
            i = j
            while last[i] > acc[-1] - acc[i]:
                i -= 1
            last[j + 1] = acc[-1] - acc[i]
            dp[j + 1] = dp[i] + 1
        return dp[-1]
```
<br>



# **Solution II**
The sum of last group of elements is `acc[j] - acc[i] = A[i] + ... + A[j - 1]`.
We will find the next shortest group starting from `A[j]`  to `A[k - 1]`
to make it bigger than current group.
`acc[j] - acc[i] <= acc[k] - acc[j]`
so that `acc[j] * 2 - acc[i] <= acc[k]`.

So we can apply binary search in `acc` array,
to find the lower bound index of `acc[j] * 2 - acc[i]`.
And we assign `pre[k] = j`, which means
to make the `k` first element non-decreasing,
we need to at least to sum up `A[j] + A[j + 1] + .. A[k - 1]` to make it big enough.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public int findMaximumLength(int[] A) {
        int n = A.length;
        int[] pre = new int[n + 2], dp = new int[n + 1];
        long[] acc = new long[n + 1];
        for (int i = 1; i <= n; i ++) {
            acc[i] = acc[i - 1] + A[i - 1];
        }
        for (int i = 0, j = 1; j <= n; j++) {
            i = Math.max(i, pre[j]); // if this was previously optimizesd.
            dp[j] = dp[i] + 1;
            int k = Arrays.binarySearch(acc, 2 * acc[j] - acc[i]);
            if (k < 0) {
                k = -k - 1;
            }
            pre[k] = j;
        }
        return dp[n];
    }
```
**C++**
updated from @user7634rI
```cpp
    int findMaximumLength(vector<int>& A) {
        int n = A.size();
        vector<int> pre(n + 2), dp(n + 1);
        vector<long long> acc(n + 1);
        for (int i = 1; i <= n; i ++) {
            acc[i] = acc[i - 1] + A[i - 1];
        }
        for (int i = 0, j = 1; j <= n; j++) {
            i = max(i, pre[j]); // if this was previously optimizesd.
            dp[j] = dp[i] + 1;
            int k = lower_bound(acc.begin(), acc.end(), 2 * acc[j] - acc[i]) - acc.begin();
            pre[k] = j;
        }
        return dp[n];
    }
```
**Python**
```py
    def findMaximumLength(self, A: List[int]) -> int:
        n = len(A)
        acc = list(accumulate(A, initial = 0))
        pre = [0] * (n + 2)
        dp = [0] * (n + 1)
        i = 0
        for j,a in enumerate(A, 1):
            i = max(i, pre[j])
            dp[j] = dp[i] + 1 # if this was previously optimizesd
            k = bisect_left(acc, acc[j] * 2 - acc[i])
            pre[k] = j
        return dp[n]
```

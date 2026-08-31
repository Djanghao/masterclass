# [Java/C++/Python] DP O(1) Space

**Author:** lee215
**Votes:** 65
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/2390802/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/2390802/)

---

# **Explanation**
`dp[i % 4]` means there is a valid partition for `A[0]` to `A[i]`.

Iterate `i` from `0` to `n - 1`,
assign `dp[i]` to false first.

Check if `s[i-1], s[i]` are exactly 2 equal elements,
then `dp[i] |= dp[i - 2]`

Check if `s[i-2],s[i-1], s[i]` are exactly 3 equal elements
then `dp[i] |= dp[i - 3]`

Check if `s[i-2],s[i-1], s[i]` are exactly 3 consecutive increasing elements
then `dp[i] |= dp[i - 3]`

Finally return result of `dp[n - 1]`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>


**Java**
```java
    public boolean validPartition(int[] A) {
        int n = A.length, dp[] = new int[] {0, 0, 0, 1};
        for (int i = 0; i < n; ++i) {
            dp[i % 4] = 0;
            if (i - 1 >= 0 && A[i] == A[i - 1])
                dp[i % 4] |= dp[(i + 2) % 4];
            if (i - 2 >= 0 && A[i] == A[i - 1] && A[i - 1] == A[i - 2])
                dp[i % 4] |= dp[(i + 1) % 4];
            if (i - 2 >= 0 && A[i] - 1 == A[i - 1] && A[i - 1] == A[i - 2] + 1)
                dp[i % 4] |= dp[(i + 1) % 4];
        }
        return dp[(n - 1) % 4] > 0;
    }
```
**C++**
```cpp
    bool validPartition(vector<int>& A) {
        int n = A.size(), dp[4] = {0, 0, 0, 1};
        for (int i = 0; i < n; ++i) {
            dp[i % 4] = 0;
            if (i - 1 >= 0 && A[i] == A[i - 1])
                dp[i % 4] |= dp[(i + 2) % 4];
            if (i - 2 >= 0 && A[i] == A[i - 1] && A[i - 1] == A[i - 2])
                dp[i % 4] |= dp[(i + 1) % 4];
            if (i - 2 >= 0 && A[i] - 1 == A[i - 1] && A[i - 1] == A[i - 2] + 1)
                dp[i % 4] |= dp[(i + 1) % 4];
        }
        return dp[(n - 1) % 4];
    }
```
**Python**
```py
    def validPartition(self, A):
        n = len(A)
        dp = [False, False, False, True]
        for i in range(n):
            dp[i % 4] = False
            if i - 1 >= 0 and A[i] == A[i-1]:
                dp[i % 4] |= dp[(i - 2) % 4]
            if i - 2 >= 0 and A[i] == A[i-1] == A[i-2]:
                dp[i % 4] |= dp[(i - 3) % 4]
            if i - 2 >= 0 and A[i] == A[i-1] + 1 == A[i-2] + 2:
                dp[i % 4] |= dp[(i - 3) % 4]
        return dp[(n - 1) % 4]
```

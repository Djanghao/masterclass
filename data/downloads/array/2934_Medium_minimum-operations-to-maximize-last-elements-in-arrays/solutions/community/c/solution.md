# [Java/C++/Python] Easy and Concise DP

**Author:** lee215
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278385/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278385/)

---

# **Explanation**
`dp1` means the result with `A[n-1]` and `B[n-1]` not swapped.
`dp2` means the result with `A[n-1]` and `B[n-1]` swapped.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minOperations(int[] A, int[] B) {
        int dp1 = 0, dp2 = 0, n = A.length;
        int mi = Math.min(A[n - 1], B[n - 1]), ma = Math.max(A[n - 1], B[n - 1]);
        for (int i = 0; i < n; i++) {
            int a = A[i], b = B[i];
            if (Math.max(a, b) > ma) return -1;
            if (Math.min(a, b) > mi) return -1;
            if (a > A[n - 1] || b > B[n - 1]) dp1++;
            if (a > B[n - 1] || b > A[n - 1]) dp2++;
        }
        return Math.min(dp1, dp2);
    }
```
**C++**
```cpp
    int minOperations(vector<int>& A, vector<int>& B) {
        int dp1 = 0, dp2 = 0, n = A.size(), mi = min(A[n - 1], B[n - 1]), ma = max(A[n - 1], B[n - 1]);
        for (int i = 0; i < n; i++) {
            int a = A[i], b = B[i];
            if (max(a, b) > ma) return -1;
            if (min(a, b) > mi) return -1;
            if (a > A[n - 1] || b > B[n - 1]) dp1++;
            if (a > B[n - 1] || b > A[n - 1]) dp2++;
        }
        return min(dp1, dp2);
    }
```

**Python**
```py
    def minOperations(self, A: List[int], B: List[int]) -> int:
        dp1, dp2 = 0, 0
        for a,b in zip(A, B):
            if max(a, b) > max(A[-1], B[-1]): return -1
            if min(a, b) > min(A[-1], B[-1]): return -1
            if a > A[-1] or b > B[-1]: dp1 += 1
            if a > B[-1] or b > A[-1]: dp2 += 1
        return min(dp1, dp2)
```
